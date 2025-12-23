import { useState } from "react";
import { Copy, Check, Heart, ExternalLink, Sparkles, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/data/prompts-data";
import { AI_CONFIGS } from "@/data/ai-config";
import { useFavorites } from "@/hooks/use-favorites";
import { useToast } from "@/hooks/use-toast";
import { usePromptEdits } from "@/hooks/use-prompt-edits";
import { cn } from "@/lib/utils";
import { PromptModal } from "./PromptModal";

interface PromptListItemProps {
  prompt: Prompt;
  isFocused?: boolean;
}

export function PromptListItem({ prompt, isFocused = false }: PromptListItemProps) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const { getEditedPrompt } = usePromptEdits();
  const favorite = isFavorite(prompt.id);
  const aiConfig = AI_CONFIGS[prompt.aiRecommended];
  const currentPromptText = getEditedPrompt(prompt.id, prompt.prompt);

  const handleCopy = async (event: React.MouseEvent) => {
    event.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    toast({
      title: "✓ Prompt copiado!",
      description: "Cole na ferramenta de sua escolha.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (event: React.MouseEvent) => {
    event.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    toast({
      title: "✓ Prompt copiado!",
      description: `Abrindo ${aiConfig.name}...`,
    });
    window.open(aiConfig.url, "_blank");
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(prompt.id);
    toast({
      title: favorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: favorite ? "Prompt removido da sua lista." : "Acesse seus favoritos no menu.",
    });
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-prompt-id={prompt.id}
        className={cn(
          "group relative flex items-center gap-4 px-4 py-3 rounded-lg border bg-card/50 transition-all duration-200 cursor-pointer overflow-hidden",
          isHovered && "bg-card shadow-md -translate-y-0.5",
          isFocused 
            ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background" 
            : "border-border/50 hover:border-primary/40"
        )}
      >
        {/* Gradient overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none",
            isHovered && "opacity-100"
          )}
        />

        {/* AI Indicator with pulse */}
        <div className="relative flex-shrink-0">
          <div
            className="w-1.5 h-10 rounded-full transition-all duration-200"
            style={{ backgroundColor: aiConfig.colors.hex }}
          />
          {isHovered && (
            <div
              className="absolute inset-0 w-1.5 h-10 rounded-full animate-pulse"
              style={{ backgroundColor: aiConfig.colors.hex, opacity: 0.5 }}
            />
          )}
        </div>

        {/* Content */}
        <div className="relative flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className={cn(
              "font-medium text-sm truncate transition-colors duration-200",
              isHovered && "text-primary"
            )}>
              {prompt.title}
            </h4>
            {favorite && (
              <Heart className="w-3 h-3 text-destructive fill-current flex-shrink-0 animate-scale-in" />
            )}
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {prompt.description}
          </p>
        </div>

        {/* Recommended AI */}
        <button
          onClick={handleOpenAI}
          className={cn(
            "relative flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 active:scale-95",
            aiConfig.colors.bg, aiConfig.colors.text, aiConfig.colors.border, aiConfig.colors.hover
          )}
        >
          <Sparkles className="w-3 h-3" />
          {aiConfig.name}
          <ExternalLink className="w-2.5 h-2.5" />
        </button>

        {/* Actions */}
        <div className="relative flex-shrink-0 flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 transition-all duration-200 active:scale-90",
              favorite && "text-destructive"
            )}
            onClick={handleFavorite}
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                favorite && "fill-current",
                isHovered && !favorite && "scale-110"
              )}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 transition-all duration-200 active:scale-90",
              copied && "text-accent bg-accent/10"
            )}
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
          <div className={cn(
            "flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200",
            isHovered && "bg-primary/10"
          )}>
            <ChevronRight className={cn(
              "w-4 h-4 text-muted-foreground transition-all duration-200",
              isHovered && "text-primary translate-x-0.5"
            )} />
          </div>
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
