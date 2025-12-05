import { useState, useMemo, useCallback } from "react";
import { prompts, Prompt } from "@/data/prompts-data";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);

  const filteredPrompts = useMemo(() => {
    let result = [...prompts];

    // Filter by search query
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
          p.category.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by section
    if (selectedSection !== null) {
      result = result.filter((p) => p.sectionNumber === selectedSection);
    }

    // Filter by evidence level
    if (selectedEvidence) {
      result = result.filter((p) => p.evidenceLevel === selectedEvidence);
    }

    return result;
  }, [query, selectedSection, selectedEvidence]);

  const clearFilters = useCallback(() => {
    setQuery("");
    setSelectedSection(null);
    setSelectedEvidence(null);
  }, []);

  const hasActiveFilters = query.trim() || selectedSection !== null || selectedEvidence !== null;

  return {
    query,
    setQuery,
    selectedSection,
    setSelectedSection,
    selectedEvidence,
    setSelectedEvidence,
    filteredPrompts,
    clearFilters,
    hasActiveFilters,
    resultCount: filteredPrompts.length,
    totalCount: prompts.length,
  };
}
