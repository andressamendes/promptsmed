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
    <section id="prompts" className="py-16 bg-pattern">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="medical-badge medical-badge-cyan mb-4">Biblioteca de Prompts</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {totalCount} Prompts para Medicina
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prompts otimizados com estratégias de aprendizado baseadas em
            evidências científicas para maximizar sua retenção e desempenho.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto mb-10">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            selectedSection={selectedSection}
            onSectionChange={setSelectedSection}
            selectedEvidence={selectedEvidence}
            onEvidenceChange={setSelectedEvidence}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
            resultCount={resultCount}
            totalCount={totalCount}
          />
        </div>

        {/* Prompts Grid by Section */}
        {!hasActiveFilters ? (
          // Show grouped by section when no filters
          <div className="space-y-12">
            {sections.map((section) => {
              const sectionPrompts = groupedPrompts[section.number];
              if (!sectionPrompts?.length) return null;

              return (
                <div key={section.id} className="animate-fade-in">
                  {/* Section Header */}
                  <div
                    className={cn(
                      "border-l-4 pl-4 mb-6",
                      sectionColors[section.number] || "border-l-primary"
                    )}
                  >
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Seção {section.number}
                    </span>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>

                  {/* Section Prompts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sectionPrompts.map((prompt, index) => (
                      <PromptCard key={prompt.id} prompt={prompt} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Show flat grid when filters are active
          <div>
            {filteredPrompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPrompts.map((prompt, index) => (
                  <PromptCard key={prompt.id} prompt={prompt} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  Nenhum prompt encontrado com esses filtros.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
