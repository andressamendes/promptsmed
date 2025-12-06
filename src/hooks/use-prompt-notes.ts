import { useState, useEffect, useCallback } from "react";

interface PromptNote {
  promptId: string;
  content: string;
  updatedAt: string;
}

const STORAGE_KEY = "promptlab-notes";

export function usePromptNotes() {
  const [notes, setNotes] = useState<Record<string, PromptNote>>(() => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const getNote = useCallback(
    (promptId: string): string => {
      return notes[promptId]?.content || "";
    },
    [notes]
  );

  const setNote = useCallback((promptId: string, content: string) => {
    setNotes((prev) => ({
      ...prev,
      [promptId]: {
        promptId,
        content,
        updatedAt: new Date().toISOString(),
      },
    }));
  }, []);

  const deleteNote = useCallback((promptId: string) => {
    setNotes((prev) => {
      const newNotes = { ...prev };
      delete newNotes[promptId];
      return newNotes;
    });
  }, []);

  const hasNote = useCallback(
    (promptId: string): boolean => {
      return !!notes[promptId]?.content;
    },
    [notes]
  );

  return { getNote, setNote, deleteNote, hasNote, notes };
}
