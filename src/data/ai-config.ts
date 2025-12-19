import { LucideIcon, MessageSquare, Brain, Sparkles, BookOpen, Compass } from "lucide-react";

export type AIProvider = "chatgpt" | "claude" | "gemini" | "notebooklm" | "perplexity";

export interface AIConfig {
  id: AIProvider;
  name: string;
  url: string;
  icon: LucideIcon;
  reason: string;
  colors: {
    hex: string;
    text: string;
    bg: string;
    border: string;
    hover: string;
  };
}

export const AI_CONFIGS: Record<AIProvider, AIConfig> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    icon: MessageSquare,
    reason: "Listas estruturadas, flashcards e tarefas rápidas",
    colors: {
      hex: "#10a37f",
      text: "text-[hsl(var(--ai-chatgpt))]",
      bg: "bg-[hsl(var(--ai-chatgpt))]/8",
      border: "border-[hsl(var(--ai-chatgpt))]/20",
      hover: "hover:bg-[hsl(var(--ai-chatgpt))]/15",
    },
  },
  claude: {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai/",
    icon: Brain,
    reason: "Raciocínio complexo e tutoria socrática",
    colors: {
      hex: "#cc785c",
      text: "text-[hsl(var(--ai-claude))]",
      bg: "bg-[hsl(var(--ai-claude))]/8",
      border: "border-[hsl(var(--ai-claude))]/20",
      hover: "hover:bg-[hsl(var(--ai-claude))]/15",
    },
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    url: "https://gemini.google.com/",
    icon: Sparkles,
    reason: "Conteúdo visual e mapas conceituais",
    colors: {
      hex: "#8e8ea0",
      text: "text-[hsl(var(--ai-gemini))]",
      bg: "bg-[hsl(var(--ai-gemini))]/8",
      border: "border-[hsl(var(--ai-gemini))]/20",
      hover: "hover:bg-[hsl(var(--ai-gemini))]/15",
    },
  },
  notebooklm: {
    id: "notebooklm",
    name: "NotebookLM",
    url: "https://notebooklm.google.com/",
    icon: BookOpen,
    reason: "Síntese de documentos e podcasts",
    colors: {
      hex: "#4285f4",
      text: "text-[hsl(var(--ai-notebooklm))]",
      bg: "bg-[hsl(var(--ai-notebooklm))]/8",
      border: "border-[hsl(var(--ai-notebooklm))]/20",
      hover: "hover:bg-[hsl(var(--ai-notebooklm))]/15",
    },
  },
  perplexity: {
    id: "perplexity",
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    icon: Compass,
    reason: "Busca de evidências atualizadas",
    colors: {
      hex: "#20b8cd",
      text: "text-[hsl(var(--ai-perplexity))]",
      bg: "bg-[hsl(var(--ai-perplexity))]/8",
      border: "border-[hsl(var(--ai-perplexity))]/20",
      hover: "hover:bg-[hsl(var(--ai-perplexity))]/15",
    },
  },
};

export const AI_LIST = Object.values(AI_CONFIGS);

export function getAIConfig(id: AIProvider): AIConfig {
  return AI_CONFIGS[id];
}
