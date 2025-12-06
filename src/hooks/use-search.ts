import { useState, useMemo, useCallback } from "react";
import { prompts, Prompt } from "@/data/prompts-data";

export type AIFilter = "chatgpt" | "claude" | "gemini" | "notebooklm" | "perplexity" | null;

// Extract all unique tags from prompts
export const allTags = Array.from(
  new Set(prompts.flatMap((p) => p.tags))
).sort();

export function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [selectedAI, setSelectedAI] = useState<AIFilter>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

    // Filter by recommended AI
    if (selectedAI) {
      result = result.filter((p) => p.aiRecommended === selectedAI);
    }

    // Filter by selected tags (prompt must have ALL selected tags)
    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        selectedTags.every((tag) => p.tags.includes(tag))
      );
    }

    return result;
  }, [query, selectedSection, selectedEvidence, selectedAI, selectedTags]);

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setQuery("");
    setSelectedSection(null);
    setSelectedEvidence(null);
    setSelectedAI(null);
    setSelectedTags([]);
  }, []);

  const hasActiveFilters = !!(
    query.trim() ||
    selectedSection !== null ||
    selectedEvidence !== null ||
    selectedAI !== null ||
    selectedTags.length > 0
  );

  return {
    query,
    setQuery,
    selectedSection,
    setSelectedSection,
    selectedEvidence,
    setSelectedEvidence,
    selectedAI,
    setSelectedAI,
    selectedTags,
    toggleTag,
    setSelectedTags,
    filteredPrompts,
    clearFilters,
    hasActiveFilters,
    resultCount: filteredPrompts.length,
    totalCount: prompts.length,
  };
}
