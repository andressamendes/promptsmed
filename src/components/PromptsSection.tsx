import { useMemo } from "react";
import { PromptCard } from "./PromptCard";
import { SearchBar } from "./SearchBar";
import { useSearch } from "@/hooks/use-search";
import { sections, Prompt } from "@/data/prompts-data";
import { cn } from "@/lib/utils";

export function PromptsSection() {
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

  return (
    <section id="prompts" className="py-4">
      {/* Search */}
      <div className="max-w-4xl mb-6">
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

      {/* Prompts Grid by Section */}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionPrompts.map((prompt, index) => (
                    <PromptCard key={prompt.id} prompt={prompt} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard key={prompt.id} prompt={prompt} index={index} />
              ))}
            </div>
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
