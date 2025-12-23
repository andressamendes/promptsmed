import { useState, useRef, useEffect } from "react";
import { Search, X, Sparkles, Filter } from "lucide-react";
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
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Ctrl+K or Cmd+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="space-y-4">
      {/* Search Input with enhanced styling */}
      <div className={cn(
        "relative transition-all duration-200 rounded-lg",
        isFocused && "ring-2 ring-primary/20"
      )}>
        <Search className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
          isFocused ? "text-primary" : "text-muted-foreground"
        )} />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Buscar prompts... (Ctrl+K)"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "pl-10 pr-10 h-12 text-base transition-all duration-200",
            isFocused && "border-primary shadow-sm"
          )}
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* AI Filter Buttons with improved visual feedback */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onAIChange(null)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            "border active:scale-[0.98]",
            selectedAI === null
              ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
              : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground hover:border-foreground/20"
          )}
        >
          <Sparkles className={cn(
            "w-4 h-4 transition-transform duration-200",
            selectedAI === null && "animate-pulse"
          )} />
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
                "border active:scale-[0.98]",
                isSelected
                  ? cn("shadow-md", ai.colors.bg, ai.colors.text, ai.colors.border)
                  : "bg-card/50 border-border hover:border-current hover:shadow-sm"
              )}
              style={{
                color: isSelected ? undefined : ai.colors.hex,
                boxShadow: isSelected ? `0 4px 14px ${ai.colors.hex}25` : undefined
              }}
            >
              <Icon className={cn(
                "w-4 h-4 transition-transform duration-200",
                isSelected && "scale-110"
              )} />
              <span>{ai.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Filter Row with better spacing */}
      <div className="flex flex-wrap gap-3 items-center pt-1">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <Select
            value={selectedSection?.toString() || "all"}
            onValueChange={(value) =>
              onSectionChange(value === "all" ? null : parseInt(value))
            }
          >
            <SelectTrigger className={cn(
              "w-[200px] h-10 text-sm transition-all duration-200",
              selectedSection !== null && "border-primary/50 text-primary"
            )}>
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
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-10 text-sm px-4 text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-1.5 transition-all duration-200"
          >
            <X className="w-4 h-4" />
            Limpar filtros
          </Button>
        )}

        {/* Results counter with animation */}
        <div className={cn(
          "ml-auto px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
          hasActiveFilters 
            ? "bg-primary/10 text-primary" 
            : "bg-muted/50 text-muted-foreground"
        )}>
          <span className="font-semibold">{resultCount}</span>
          <span className="text-muted-foreground"> de </span>
          <span>{totalCount}</span>
          <span className="text-muted-foreground"> prompts</span>
        </div>
      </div>
    </div>
  );
}
