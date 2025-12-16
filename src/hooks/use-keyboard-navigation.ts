import { useEffect, useCallback, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Prompt } from "@/data/prompts-data";

interface UseKeyboardNavigationOptions {
  prompts: Prompt[];
  enabled?: boolean;
}

export function useKeyboardNavigation({ prompts, enabled = true }: UseKeyboardNavigationOptions) {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const { toast } = useToast();

  const focusedPrompt = focusedIndex >= 0 && focusedIndex < prompts.length 
    ? prompts[focusedIndex] 
    : null;

  const copyFocusedPrompt = useCallback(async () => {
    if (!focusedPrompt) return false;
    
    await navigator.clipboard.writeText(focusedPrompt.prompt);
    toast({
      title: "Prompt copiado!",
      description: `"${focusedPrompt.title}" copiado para a área de transferência.`,
    });
    return true;
  }, [focusedPrompt, toast]);

  const navigateUp = useCallback(() => {
    if (prompts.length === 0) return;
    setFocusedIndex((prev) => {
      if (prev <= 0) return prompts.length - 1;
      return prev - 1;
    });
  }, [prompts.length]);

  const navigateDown = useCallback(() => {
    if (prompts.length === 0) return;
    setFocusedIndex((prev) => {
      if (prev < 0 || prev >= prompts.length - 1) return 0;
      return prev + 1;
    });
  }, [prompts.length]);

  const navigateLeft = useCallback(() => {
    if (prompts.length === 0) return;
    setFocusedIndex((prev) => {
      if (prev <= 0) return prompts.length - 1;
      return prev - 1;
    });
  }, [prompts.length]);

  const navigateRight = useCallback(() => {
    if (prompts.length === 0) return;
    setFocusedIndex((prev) => {
      if (prev < 0 || prev >= prompts.length - 1) return 0;
      return prev + 1;
    });
  }, [prompts.length]);

  const clearFocus = useCallback(() => {
    setFocusedIndex(-1);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          navigateUp();
          break;
        case "ArrowDown":
          e.preventDefault();
          navigateDown();
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateLeft();
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateRight();
          break;
        case "c":
          if (e.ctrlKey || e.metaKey) {
            if (focusedPrompt) {
              e.preventDefault();
              copyFocusedPrompt();
            }
          }
          break;
        case "Escape":
          clearFocus();
          break;
        case "Enter":
          if (focusedPrompt) {
            // Trigger click on focused prompt card
            const element = document.querySelector(`[data-prompt-id="${focusedPrompt.id}"]`);
            if (element instanceof HTMLElement) {
              element.click();
            }
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, navigateUp, navigateDown, navigateLeft, navigateRight, copyFocusedPrompt, clearFocus, focusedPrompt]);

  // Reset focus when prompts change
  useEffect(() => {
    setFocusedIndex(-1);
  }, [prompts]);

  return {
    focusedIndex,
    focusedPrompt,
    setFocusedIndex,
    clearFocus,
  };
}