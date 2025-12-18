import { useState } from "react";
import { Copy, Check, Heart, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/data/prompts-data";
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

const aiColors: Record<string, { bg: string; text: string; border: string }> = {
  chatgpt: { bg: "bg-emerald-500/8", text: "text-emerald-600", border: "border-emerald-500/20" },
  claude: { bg: "bg-amber-500/8", text: "text-amber-600", border: "border-amber-500/20" },
  gemini: { bg: "bg-violet-500/8", text: "text-violet-600", border: "border-violet-500/20" },
  notebooklm: { bg: "bg-blue-500/8", text: "text-blue-600", border: "border-blue-500/20" },
  perplexity: { bg: "bg-cyan-500/8", text: "text-cyan-600", border: "border-cyan-500/20" },
};

const aiLinks: Record<string, string> = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
  notebooklm: "https://notebooklm.google.com/",
  perplexity: "https://www.perplexity.ai/",
};

const aiNames: Record<string, string> = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
  notebooklm: "NotebookLM",
  perplexity: "Perplexity",
};

export function PromptCard({ prompt, index = 0, isFocused = false }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const { getEditedPrompt } = usePromptEdits();
  const favorite = isFavorite(prompt.id);
  
  const { ref: scrollRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const animationDelay = Math.min(index * 80, 400);
  const currentPromptText = getEditedPrompt(prompt.id, prompt.prompt);
  const colors = aiColors[prompt.aiRecommended];

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    toast({
      title: "Prompt copiado",
      description: "Cole na ferramenta de sua escolha.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (e: React.MouseEvent, ai: string) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(currentPromptText);
    toast({
      title: "Prompt copiado",
      description: `Abrindo ${aiNames[ai]}...`,
    });
    window.open(aiLinks[ai], "_blank");
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
          className={cn(
            "group relative flex flex-col h-full bg-card border border-border/60 rounded-xl overflow-hidden cursor-pointer",
            "transition-all duration-200 hover:border-border hover:shadow-lg hover:shadow-black/5",
            isFocused && "ring-2 ring-primary ring-offset-2 ring-offset-background"
          )}
        >
          {/* Header - Clean category indicator */}
          <div className="px-5 pt-5 pb-3">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {prompt.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(prompt.id);
                }}
                className={cn(
                  "p-1.5 rounded-full transition-colors",
                  favorite 
                    ? "text-rose-500 bg-rose-500/10" 
                    : "text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50"
                )}
              >
                <Heart className={cn("w-4 h-4", favorite && "fill-current")} />
              </button>
            </div>
            
            <h3 className="text-base font-semibold leading-snug mb-2 text-foreground group-hover:text-primary transition-colors">
              {prompt.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {prompt.description}
            </p>
          </div>

          {/* Footer - Actions */}
          <div className="mt-auto px-5 py-4 border-t border-border/40 bg-muted/20">
            <div className="flex items-center justify-between gap-3">
              {/* Recommended AI */}
              <button
                onClick={(e) => handleOpenAI(e, prompt.aiRecommended)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  "border hover:scale-[1.02]",
                  colors.bg, colors.text, colors.border
                )}
              >
                <Star className="w-3.5 h-3.5 fill-current opacity-60" />
                {aiNames[prompt.aiRecommended]}
                <ExternalLink className="w-3 h-3 opacity-60" />
              </button>

              {/* Copy & Open */}
              <div className="flex items-center gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-8 px-3 text-xs gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      Copiado
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
                  className="h-8 px-3 text-xs"
                >
                  Ver completo
                </Button>
              </div>
            </div>
          </div>
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