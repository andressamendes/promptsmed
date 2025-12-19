import { Search, X, Sparkles } from "lucide-react";
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
import { AI_LIST, AIProvider } from "@/data/ai-config";
import { cn } from "@/lib/utils";

export type AIFilter = AIProvider | null;

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  selectedSection: number | null;
  onSectionChange: (value: number | null) => void;
  selectedAI: AIFilter;
  onAIChange: (value: AIFilter) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
  resultCount: number;
  totalCount: number;
}

export function SearchBar({
  query,
  onQueryChange,
  selectedSection,
  onSectionChange,
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
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar prompts..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-10 pr-10 h-11"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* AI Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onAIChange(null)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            "border hover:scale-[1.02]",
            selectedAI === null
              ? "bg-primary text-primary-foreground border-primary shadow-sm"
              : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
          )}
        >
          <Sparkles className="w-4 h-4" />
          Todas
        </button>
        
        {AI_LIST.map((ai) => {
          const Icon = ai.icon;
          const isSelected = selectedAI === ai.id;
          
          return (
            <button
              key={ai.id}
              onClick={() => onAIChange(ai.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                "border hover:scale-[1.02]",
                isSelected
                  ? cn("shadow-sm", ai.colors.bg, ai.colors.text, ai.colors.border)
                  : "bg-card/50 border-border hover:border-current"
              )}
              style={{
                color: isSelected ? undefined : ai.colors.hex,
              }}
            >
              <Icon className="w-4 h-4" />
              <span>{ai.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Filter Row */}
      <div className="flex flex-wrap gap-2 items-center">
        <Select
          value={selectedSection?.toString() || "all"}
          onValueChange={(value) =>
            onSectionChange(value === "all" ? null : parseInt(value))
          }
        >
          <SelectTrigger className="w-[180px] h-9 text-xs">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">Todas as categorias</SelectItem>
            {sections.map((section) => (
              <SelectItem key={section.number} value={section.number.toString()}>
                {section.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-9 text-xs px-3 text-muted-foreground hover:text-destructive"
          >
            <X className="w-3.5 h-3.5 mr-1" />
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
