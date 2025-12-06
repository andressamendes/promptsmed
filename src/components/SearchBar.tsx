import { Search, X, Filter, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sections } from "@/data/prompts-data";
import { AIFilter } from "@/hooks/use-search";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  selectedSection: number | null;
  onSectionChange: (value: number | null) => void;
  selectedEvidence: string | null;
  onEvidenceChange: (value: string | null) => void;
  selectedAI: AIFilter;
  onAIChange: (value: AIFilter) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
  resultCount: number;
  totalCount: number;
}

const aiOptions = [
  { value: "chatgpt", label: "ChatGPT", color: "text-[#10a37f]", bg: "bg-[#10a37f]/10" },
  { value: "claude", label: "Claude", color: "text-[#cc785c]", bg: "bg-[#cc785c]/10" },
  { value: "gemini", label: "Gemini", color: "text-[#8e8ea0]", bg: "bg-[#8e8ea0]/10" },
  { value: "notebooklm", label: "NotebookLM", color: "text-[#4285f4]", bg: "bg-[#4285f4]/10" },
  { value: "perplexity", label: "Perplexity", color: "text-[#20b8cd]", bg: "bg-[#20b8cd]/10" },
];

export function SearchBar({
  query,
  onQueryChange,
  selectedSection,
  onSectionChange,
  selectedEvidence,
  onEvidenceChange,
  selectedAI,
  onAIChange,
  onClear,
  hasActiveFilters,
  resultCount,
  totalCount,
}: SearchBarProps) {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar prompts por título, tag ou categoria..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-12 pr-12 h-12 text-base"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* AI Filter Pills */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mr-1">
          <Sparkles className="w-4 h-4" />
          IA:
        </div>
        <Button
          variant={selectedAI === null ? "default" : "outline"}
          size="sm"
          onClick={() => onAIChange(null)}
          className="h-8 text-xs"
        >
          Todas
        </Button>
        {aiOptions.map((ai) => (
          <Button
            key={ai.value}
            variant="outline"
            size="sm"
            onClick={() => onAIChange(ai.value as AIFilter)}
            className={cn(
              "h-8 text-xs gap-1.5 transition-all",
              selectedAI === ai.value && [ai.bg, ai.color, "border-current"]
            )}
          >
            <span className={cn("w-2 h-2 rounded-full", ai.bg, selectedAI !== ai.value && "opacity-60")} 
                  style={{ backgroundColor: ai.value === "chatgpt" ? "#10a37f" : 
                                           ai.value === "claude" ? "#cc785c" : 
                                           ai.value === "gemini" ? "#8e8ea0" :
                                           ai.value === "notebooklm" ? "#4285f4" : "#20b8cd" }} />
            {ai.label}
          </Button>
        ))}
      </div>

      {/* Other Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          Filtros:
        </div>

        {/* Section Filter */}
        <Select
          value={selectedSection?.toString() || "all"}
          onValueChange={(value) =>
            onSectionChange(value === "all" ? null : parseInt(value))
          }
        >
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue placeholder="Todas as seções" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as seções</SelectItem>
            {sections.map((section) => (
              <SelectItem key={section.number} value={section.number.toString()}>
                {section.number}. {section.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Evidence Filter */}
        <Select
          value={selectedEvidence || "all"}
          onValueChange={(value) =>
            onEvidenceChange(value === "all" ? null : value)
          }
        >
          <SelectTrigger className="w-[160px] h-9">
            <SelectValue placeholder="Nível de evidência" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os níveis</SelectItem>
            <SelectItem value="Alta">Alta</SelectItem>
            <SelectItem value="Média">Média</SelectItem>
            <SelectItem value="Emergente">Emergente</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-9 gap-1.5 text-muted-foreground"
          >
            <X className="w-3.5 h-3.5" />
            Limpar
          </Button>
        )}

        {/* Results Count */}
        <div className="ml-auto">
          <Badge variant="secondary" className="font-mono">
            {resultCount} / {totalCount} prompts
          </Badge>
        </div>
      </div>
    </div>
  );
}
