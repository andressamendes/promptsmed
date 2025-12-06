import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar prompts..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-10 pr-10 h-10"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-2 items-center">
        {/* AI Filter */}
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant={selectedAI === null ? "default" : "outline"}
            size="sm"
            onClick={() => onAIChange(null)}
            className="h-7 text-xs px-2"
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
                "h-7 text-xs px-2 gap-1",
                selectedAI === ai.value && [ai.bg, ai.color, "border-current"]
              )}
            >
              <span 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: ai.value === "chatgpt" ? "#10a37f" : 
                                         ai.value === "claude" ? "#cc785c" : 
                                         ai.value === "gemini" ? "#8e8ea0" :
                                         ai.value === "notebooklm" ? "#4285f4" : "#20b8cd" }} 
              />
              {ai.label}
            </Button>
          ))}
        </div>

        <div className="h-4 w-px bg-border mx-1" />

        {/* Section Filter */}
        <Select
          value={selectedSection?.toString() || "all"}
          onValueChange={(value) =>
            onSectionChange(value === "all" ? null : parseInt(value))
          }
        >
          <SelectTrigger className="w-[150px] h-7 text-xs">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {sections.map((section) => (
              <SelectItem key={section.number} value={section.number.toString()}>
                {section.title}
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
          <SelectTrigger className="w-[120px] h-7 text-xs">
            <SelectValue placeholder="Evidência" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="Alta">Alta</SelectItem>
            <SelectItem value="Média">Média</SelectItem>
            <SelectItem value="Emergente">Emergente</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-7 text-xs px-2 text-muted-foreground"
          >
            <X className="w-3 h-3 mr-1" />
            Limpar
          </Button>
        )}

        <span className="ml-auto text-xs text-muted-foreground">
          {resultCount} de {totalCount}
        </span>
      </div>
    </div>
  );
}
