import { useState, useMemo, useCallback } from "react";
import { prompts } from "@/data/prompts-data";

export type AIFilter = "chatgpt" | "claude" | "gemini" | "notebooklm" | "perplexity" | null;

export function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedAI, setSelectedAI] = useState<AIFilter>(null);

  const filteredPrompts = useMemo(() => {
    let result = [...prompts];

    // Filter by search query
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          p.category.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by section
    if (selectedSection !== null) {
      result = result.filter((p) => p.sectionNumber === selectedSection);
    }

    // Filter by recommended AI
    if (selectedAI) {
      result = result.filter((p) => p.aiRecommended === selectedAI);
    }

    return result;
  }, [query, selectedSection, selectedAI]);

  const clearFilters = useCallback(() => {
    setQuery("");
    setSelectedSection(null);
    setSelectedAI(null);
  }, []);

  const hasActiveFilters = !!(
    query.trim() ||
    selectedSection !== null ||
    selectedAI !== null
  );

  return {
    query,
    setQuery,
    selectedSection,
    setSelectedSection,
    selectedAI,
    setSelectedAI,
    filteredPrompts,
    clearFilters,
    hasActiveFilters,
    resultCount: filteredPrompts.length,
    totalCount: prompts.length,
  };
}
