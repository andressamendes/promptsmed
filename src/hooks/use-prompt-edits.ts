import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "medprompts-edited-prompts";

interface EditedPrompts {
  [promptId: string]: string;
}

export function usePromptEdits() {
  const [editedPrompts, setEditedPrompts] = useState<EditedPrompts>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEditedPrompts(JSON.parse(stored));
      } catch {
        console.error("Failed to parse edited prompts");
      }
    }
  }, []);

  const saveEdit = useCallback((promptId: string, editedText: string) => {
    setEditedPrompts((prev) => {
      const updated = { ...prev, [promptId]: editedText };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetEdit = useCallback((promptId: string) => {
    setEditedPrompts((prev) => {
      const updated = { ...prev };
      delete updated[promptId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getEditedPrompt = useCallback(
    (promptId: string, originalText: string) => {
      return editedPrompts[promptId] || originalText;
    },
    [editedPrompts]
  );

  const hasEdit = useCallback(
    (promptId: string) => {
      return !!editedPrompts[promptId];
    },
    [editedPrompts]
  );

  return {
    saveEdit,
    resetEdit,
    getEditedPrompt,
    hasEdit,
  };
}
