import { useState } from "react";
import { Copy, Check, Heart, ExternalLink, Star, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/data/prompts-data";
import { AI_CONFIGS } from "@/data/ai-config";
import { useFavorites } from "@/hooks/use-favorites";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { usePromptEdits } from "@/hooks/use-prompt-edits";
import { cn } from "@/lib/utils";
import { PromptModal } from "./PromptModal";

interface PromptCardProps {
  prompt: Prompt;
  index?: number;
  isFocused?: boolean;
}

export function PromptCard({ prompt, index = 0, isFocused = false }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const { getEditedPrompt } = usePromptEdits();
  const favorite = isFavorite(prompt.id);
  
  const { ref: scrollRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const animationDelay = Math.min(index * 80, 400);
  const currentPromptText = getEditedPrompt(prompt.id, prompt.prompt);
  const aiConfig = AI_CONFIGS[prompt.aiRecommended];

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    toast({
      title: "✓ Prompt copiado!",
      description: "Cole na ferramenta de sua escolha.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (e: React.MouseEvent) => {
    e.stopPropagation();
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
        ref={scrollRef}
        className={cn(
          "transition-all duration-500 ease-out",
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-6"
        )}
        style={{ 
          transitionDelay: isVisible ? `${animationDelay}ms` : "0ms",
        }}
      >
        <article 
          data-prompt-id={prompt.id}
          onClick={() => setShowModal(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "group relative flex flex-col h-full bg-card border rounded-xl overflow-hidden cursor-pointer",
            "transition-all duration-300 ease-out",
            isHovered && "shadow-xl shadow-primary/5 -translate-y-1",
            isFocused 
              ? "ring-2 ring-primary ring-offset-2 ring-offset-background border-primary" 
              : "border-border/60 hover:border-primary/40"
          )}
        >
          {/* Gradient overlay on hover */}
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 pointer-events-none",
              isHovered && "opacity-100"
            )}
          />

          {/* Header */}
          <div className="relative px-5 pt-5 pb-3">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {prompt.category}
                </span>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: aiConfig.colors.hex }}
                />
              </div>
              <button
                onClick={handleFavorite}
                className={cn(
                  "p-2 rounded-full transition-all duration-200 active:scale-90",
                  favorite 
                    ? "text-destructive bg-destructive/10 hover:bg-destructive/20" 
                    : "text-muted-foreground/50 hover:text-destructive hover:bg-destructive/10"
                )}
              >
                <Heart className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  favorite && "fill-current",
                  isHovered && !favorite && "scale-110"
                )} />
              </button>
            </div>
            
            <h3 className={cn(
              "text-base font-semibold leading-snug mb-2 transition-colors duration-200",
              isHovered ? "text-primary" : "text-foreground"
            )}>
              {prompt.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {prompt.description}
            </p>
          </div>

          {/* Footer */}
          <div className="relative mt-auto px-5 py-4 border-t border-border/40 bg-muted/20">
            <div className="flex items-center justify-between gap-3">
              {/* Recommended AI */}
              <button
                onClick={handleOpenAI}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                  "border hover:scale-[1.03] active:scale-[0.98]",
                  aiConfig.colors.bg, aiConfig.colors.text, aiConfig.colors.border
                )}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {aiConfig.name}
                <ExternalLink className="w-3 h-3 opacity-60" />
              </button>

              {/* Actions */}
              <div className="flex items-center gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className={cn(
                    "h-8 px-3 text-xs gap-1.5 transition-all duration-200",
                    copied && "text-accent bg-accent/10"
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copiar
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowModal(true)}
                  className={cn(
                    "h-8 px-3 text-xs gap-1.5 transition-all duration-200",
                    isHovered && "border-primary/50 text-primary"
                  )}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Ver
                </Button>
              </div>
            </div>
          </div>

          {/* Focus indicator ring animation */}
          {isFocused && (
            <div className="absolute inset-0 rounded-xl ring-2 ring-primary animate-pulse pointer-events-none" />
          )}
        </article>
      </div>

      <PromptModal
        prompt={prompt}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
