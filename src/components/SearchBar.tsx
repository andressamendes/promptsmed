import { useState } from "react";
import { Search, X, Sparkles, Brain, MessageSquare, BookOpen, Compass, Tag, ChevronDown, ChevronUp } from "lucide-react";
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
import { AIFilter, allTags } from "@/hooks/use-search";
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
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
  resultCount: number;
  totalCount: number;
}

const aiOptions = [
  { 
    value: "chatgpt", 
    label: "ChatGPT", 
    color: "#10a37f",
    icon: MessageSquare,
  },
  { 
    value: "claude", 
    label: "Claude", 
    color: "#cc785c",
    icon: Brain,
  },
  { 
    value: "gemini", 
    label: "Gemini", 
    color: "#8e8ea0",
    icon: Sparkles,
  },
  { 
    value: "notebooklm", 
    label: "NotebookLM", 
    color: "#4285f4",
    icon: BookOpen,
  },
  { 
    value: "perplexity", 
    label: "Perplexity", 
    color: "#20b8cd",
    icon: Compass,
  },
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
  selectedTags,
  onTagToggle,
  onClear,
  hasActiveFilters,
  resultCount,
  totalCount,
}: SearchBarProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  
  // Show popular tags first, then rest when expanded
  const popularTags = allTags.slice(0, 12);
  const displayedTags = showAllTags ? allTags : popularTags;

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
            "border hover:scale-105",
            selectedAI === null
              ? "bg-primary text-primary-foreground border-primary shadow-md"
              : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
          )}
        >
          <Sparkles className="w-4 h-4" />
          Todas
        </button>
        
        {aiOptions.map((ai) => {
          const Icon = ai.icon;
          const isSelected = selectedAI === ai.value;
          
          return (
            <button
              key={ai.value}
              onClick={() => onAIChange(ai.value as AIFilter)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                "border hover:scale-105",
                isSelected
                  ? "shadow-lg"
                  : "bg-card/50 border-border hover:border-current"
              )}
              style={{
                backgroundColor: isSelected ? `${ai.color}20` : undefined,
                borderColor: isSelected ? ai.color : undefined,
                color: isSelected ? ai.color : undefined,
                boxShadow: isSelected ? `0 4px 14px ${ai.color}30` : undefined,
              }}
            >
              <Icon 
                className="w-4 h-4" 
                style={{ color: isSelected ? ai.color : undefined }}
              />
              <span>{ai.label}</span>
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: ai.color }}
              />
            </button>
          );
        })}
      </div>

      {/* Tags Filter */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">Filtrar por tags:</span>
          {selectedTags.length > 0 && (
            <Badge variant="secondary" className="text-xs">
              {selectedTags.length} selecionadas
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {displayedTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200",
                  "border hover:scale-105",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-muted/30 text-muted-foreground border-border/50 hover:bg-muted hover:text-foreground hover:border-border"
                )}
              >
                {tag}
              </button>
            );
          })}
          {allTags.length > 12 && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="px-2.5 py-1 rounded-full text-xs font-medium text-primary hover:bg-primary/10 transition-colors flex items-center gap-1"
            >
              {showAllTags ? (
                <>
                  <ChevronUp className="w-3 h-3" />
                  Menos tags
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" />
                  +{allTags.length - 12} tags
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Additional Filters Row */}
      <div className="flex flex-wrap gap-2 items-center">
        {/* Section Filter */}
        <Select
          value={selectedSection?.toString() || "all"}
          onValueChange={(value) =>
            onSectionChange(value === "all" ? null : parseInt(value))
          }
        >
          <SelectTrigger className="w-[160px] h-9 text-xs">
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

        {/* Evidence Filter */}
        <Select
          value={selectedEvidence || "all"}
          onValueChange={(value) =>
            onEvidenceChange(value === "all" ? null : value)
          }
        >
          <SelectTrigger className="w-[140px] h-9 text-xs">
            <SelectValue placeholder="Evidência" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">Todas evidências</SelectItem>
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
            className="h-9 text-xs px-3 text-muted-foreground hover:text-destructive"
          >
            <X className="w-3.5 h-3.5 mr-1" />
            Limpar filtros
          </Button>
        )}

        <span className="ml-auto text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
          {resultCount} de {totalCount} prompts
        </span>
      </div>
    </div>
  );
}
