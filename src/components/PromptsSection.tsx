import { useMemo, useState, useEffect } from "react";
import { LayoutGrid, List, Keyboard } from "lucide-react";
import { PromptCard } from "./PromptCard";
import { PromptListItem } from "./PromptListItem";
import { SearchBar } from "./SearchBar";
import { useSearch } from "@/hooks/use-search";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { sections, Prompt } from "@/data/prompts-data";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ViewMode = "grid" | "list";

export function PromptsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  
  const {
    query,
    setQuery,
    selectedSection,
    setSelectedSection,
    selectedEvidence,
    setSelectedEvidence,
    selectedAI,
    setSelectedAI,
    filteredPrompts,
    clearFilters,
    hasActiveFilters,
    resultCount,
    totalCount,
  } = useSearch();

  const { focusedIndex, focusedPrompt } = useKeyboardNavigation({
    prompts: filteredPrompts,
    enabled: true,
  });

  // Scroll focused prompt into view
  useEffect(() => {
    if (focusedPrompt) {
      const element = document.querySelector(`[data-prompt-id="${focusedPrompt.id}"]`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [focusedPrompt]);

  // Group prompts by section
  const groupedPrompts = useMemo(() => {
    const groups: Record<number, Prompt[]> = {};
    filteredPrompts.forEach((prompt) => {
      if (!groups[prompt.sectionNumber]) {
        groups[prompt.sectionNumber] = [];
      }
      groups[prompt.sectionNumber].push(prompt);
    });
    return groups;
  }, [filteredPrompts]);

  const sectionColors: Record<number, string> = {
    1: "border-l-primary",
    2: "border-l-accent",
    3: "border-l-medical-purple",
    4: "border-l-medical-amber",
    5: "border-l-medical-red",
    6: "border-l-primary",
    7: "border-l-accent",
    8: "border-l-medical-purple",
    9: "border-l-medical-amber",
    10: "border-l-medical-red",
  };

  const renderPrompts = (prompts: Prompt[]) => {
    if (viewMode === "list") {
      return (
        <div className="space-y-2">
          {prompts.map((prompt) => (
            <PromptListItem 
              key={prompt.id} 
              prompt={prompt} 
              isFocused={focusedPrompt?.id === prompt.id}
            />
          ))}
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prompts.map((prompt, index) => (
          <PromptCard 
            key={prompt.id} 
            prompt={prompt} 
            index={index}
            isFocused={focusedPrompt?.id === prompt.id}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="prompts" className="py-4">
      {/* Header with Search and View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
        <div className="flex-1 max-w-4xl">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            selectedSection={selectedSection}
            onSectionChange={setSelectedSection}
            selectedEvidence={selectedEvidence}
            onEvidenceChange={setSelectedEvidence}
            selectedAI={selectedAI}
            onAIChange={setSelectedAI}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
            resultCount={resultCount}
            totalCount={totalCount}
          />
        </div>
        
        {/* View Toggle and Keyboard Hint */}
        <div className="flex items-center gap-2 self-start">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/50 border border-border/50">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
                viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200",
                viewMode === "list"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <List className="w-3.5 h-3.5" />
              Lista
            </button>
          </div>

          {/* Keyboard shortcuts hint */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="p-2 rounded-lg bg-muted/30 border border-border/30 cursor-help">
                  <Keyboard className="w-4 h-4 text-muted-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <div className="space-y-1.5 text-xs">
                  <p className="font-medium">Atalhos de teclado:</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <span className="text-muted-foreground">↑↓←→</span>
                    <span>Navegar</span>
                    <span className="text-muted-foreground">Ctrl+C</span>
                    <span>Copiar prompt</span>
                    <span className="text-muted-foreground">Enter</span>
                    <span>Abrir detalhes</span>
                    <span className="text-muted-foreground">Esc</span>
                    <span>Limpar seleção</span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Focused prompt indicator */}
      {focusedPrompt && (
        <div className="mb-4 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-2 text-sm">
          <Keyboard className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Selecionado:</span>
          <span className="font-medium">{focusedPrompt.title}</span>
          <span className="text-xs text-muted-foreground ml-auto">
            Pressione Ctrl+C para copiar ou Enter para abrir
          </span>
        </div>
      )}

      {/* Prompts */}
      {!hasActiveFilters ? (
        <div className="space-y-10">
          {sections.map((section) => {
            const sectionPrompts = groupedPrompts[section.number];
            if (!sectionPrompts?.length) return null;

            return (
              <div key={section.id}>
                {/* Section Header */}
                <div
                  className={cn(
                    "border-l-4 pl-4 mb-4",
                    sectionColors[section.number] || "border-l-primary"
                  )}
                >
                  <h3 className="text-lg font-bold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>

                {/* Section Prompts */}
                {renderPrompts(sectionPrompts)}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {filteredPrompts.length > 0 ? (
            renderPrompts(filteredPrompts)
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-2">
                Nenhum resultado
              </p>
              <button
                onClick={clearFilters}
                className="text-primary text-sm hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
