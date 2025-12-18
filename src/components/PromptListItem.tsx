import { useState } from "react";
import { Copy, Check, Heart, ExternalLink, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/data/prompts-data";
import { useFavorites } from "@/hooks/use-favorites";
import { useToast } from "@/hooks/use-toast";
import { usePromptEdits } from "@/hooks/use-prompt-edits";
import { cn } from "@/lib/utils";
import { PromptModal } from "./PromptModal";

interface PromptListItemProps {
  prompt: Prompt;
  isFocused?: boolean;
}

const aiColors: Record<string, string> = {
  chatgpt: "#10a37f",
  claude: "#cc785c",
  gemini: "#8e8ea0",
  notebooklm: "#4285f4",
  perplexity: "#20b8cd",
};

const aiNames: Record<string, string> = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
  notebooklm: "NotebookLM",
  perplexity: "Perplexity",
};

const aiLinks: Record<string, string> = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
  notebooklm: "https://notebooklm.google.com/",
  perplexity: "https://www.perplexity.ai/",
};

export function PromptListItem({ prompt, isFocused = false }: PromptListItemProps) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const { getEditedPrompt } = usePromptEdits();
  const favorite = isFavorite(prompt.id);
  const aiColor = aiColors[prompt.aiRecommended];
  const currentPromptText = getEditedPrompt(prompt.id, prompt.prompt);

  const handleCopy = async (event: React.MouseEvent) => {
    event.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    toast({
      title: "Prompt copiado",
      description: "Cole na ferramenta de sua escolha.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (event: React.MouseEvent) => {
    event.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    toast({
      title: "Prompt copiado",
      description: `Abrindo ${aiNames[prompt.aiRecommended]}...`,
    });
    window.open(aiLinks[prompt.aiRecommended], "_blank");
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        data-prompt-id={prompt.id}
        className={cn(
          "group flex items-center gap-4 px-4 py-3 rounded-lg border bg-card/50 hover:bg-card hover:shadow-md transition-all duration-200 cursor-pointer",
          isFocused 
            ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background" 
            : "border-border/50 hover:border-border"
        )}
      >
        {/* AI Indicator */}
        <div
          className="flex-shrink-0 w-1 h-10 rounded-full"
          style={{ backgroundColor: aiColor }}
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-sm truncate">{prompt.title}</h4>
            {favorite && (
              <Heart className="w-3 h-3 text-rose-500 fill-current flex-shrink-0" />
            )}
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {prompt.description}
          </p>
        </div>

        {/* Recommended AI */}
        <button
          onClick={handleOpenAI}
          className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors hover:opacity-80"
          style={{ 
            backgroundColor: `${aiColor}12`,
            color: aiColor,
          }}
        >
          <Star className="w-3 h-3" />
          {aiNames[prompt.aiRecommended]}
          <ExternalLink className="w-2.5 h-2.5" />
        </button>

        {/* Actions */}
        <div className="flex-shrink-0 flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(prompt.id);
            }}
          >
            <Heart
              className={cn(
                "w-3.5 h-3.5",
                favorite && "text-rose-500 fill-current"
              )}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </Button>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </div>

      <PromptModal
        prompt={prompt}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}