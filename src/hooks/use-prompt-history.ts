import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "medprompts-history";
const MAX_HISTORY_ITEMS = 20;

export interface PromptHistoryItem {
  id: string;
  promptId: string;
  promptTitle: string;
  generatedText: string;
  variables: Record<string, string>;
  createdAt: number;
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function loadHistory(): PromptHistoryItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Ignore parse errors
  }
  return [];
}

function saveHistory(items: PromptHistoryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage errors
  }
}

export function usePromptHistory() {
  const [history, setHistory] = useState<PromptHistoryItem[]>(() => loadHistory());

  // Sync with localStorage on mount
  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const addToHistory = useCallback((
    promptId: string,
    promptTitle: string,
    generatedText: string,
    variables: Record<string, string>
  ) => {
    const newItem: PromptHistoryItem = {
      id: generateId(),
      promptId,
      promptTitle,
      generatedText,
      variables,
      createdAt: Date.now(),
    };

    setHistory(prev => {
      // Remove duplicates (same promptId with same variables)
      const filtered = prev.filter(item => 
        item.promptId !== promptId || 
        JSON.stringify(item.variables) !== JSON.stringify(variables)
      );
      
      // Add new item at the beginning and limit size
      const updated = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);
      saveHistory(updated);
      return updated;
    });

    return newItem;
  }, []);

  const removeFromHistory = useCallback((id: string) => {
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      saveHistory(updated);
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getHistoryCount = useCallback(() => history.length, [history]);

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    getHistoryCount,
  };
}
