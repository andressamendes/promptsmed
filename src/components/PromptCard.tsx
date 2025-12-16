import { useState } from "react";
import { Copy, Check, Heart, ExternalLink, Clock, BarChart3, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Prompt } from "@/data/prompts-data";
import { useFavorites } from "@/hooks/use-favorites";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";
import { PromptModal } from "./PromptModal";

interface PromptCardProps {
  prompt: Prompt;
  index?: number;
  isFocused?: boolean;
}

const aiColors = {
  chatgpt: { bg: "bg-[#10a37f]/10", text: "text-[#10a37f]", border: "border-[#10a37f]/30" },
  claude: { bg: "bg-[#cc785c]/10", text: "text-[#cc785c]", border: "border-[#cc785c]/30" },
  gemini: { bg: "bg-[#8e8ea0]/10", text: "text-[#8e8ea0]", border: "border-[#8e8ea0]/30" },
  notebooklm: { bg: "bg-[#4285f4]/10", text: "text-[#4285f4]", border: "border-[#4285f4]/30" },
  perplexity: { bg: "bg-[#20b8cd]/10", text: "text-[#20b8cd]", border: "border-[#20b8cd]/30" },
};

const aiLinks = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
  notebooklm: "https://notebooklm.google.com/",
  perplexity: "https://www.perplexity.ai/",
};

const aiNames = {
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
  const favorite = isFavorite(prompt.id);
  
  const { ref: scrollRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: tiltRef, style: tiltStyle, glareStyle, handlers } = useTilt<HTMLElement>({
    max: 8,
    scale: 1.02,
    speed: 300,
    glare: true,
  });
  const animationDelay = Math.min(index * 100, 500);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast({
      title: "Prompt copiado!",
      description: "Cole na IA de sua escolha.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (ai: "chatgpt" | "claude" | "gemini" | "notebooklm" | "perplexity") => {
    await navigator.clipboard.writeText(prompt.prompt);
    toast({
      title: "Prompt copiado!",
      description: `Cole no ${aiNames[ai]}.`,
    });
    window.open(aiLinks[ai], "_blank");
  };

  const colors = aiColors[prompt.aiRecommended];

  return (
    <>
      <div
        ref={scrollRef}
        className={cn(
          "transition-all duration-700 ease-out will-change-transform",
          isVisible 
            ? "opacity-100 translate-y-0 scale-100 blur-0" 
            : "opacity-0 translate-y-12 scale-95 blur-sm"
        )}
        style={{ 
          transitionDelay: isVisible ? `${animationDelay}ms` : "0ms",
          transitionProperty: "opacity, transform, filter",
        }}
      >
        <article 
          ref={tiltRef}
          style={tiltStyle}
          {...handlers}
          data-prompt-id={prompt.id}
          className={cn(
            "prompt-card flex flex-col h-full relative overflow-hidden cursor-pointer transition-all duration-200",
            isFocused && "ring-2 ring-primary ring-offset-2 ring-offset-background"
          )}
        >
          {/* Glare Effect */}
          <div style={glareStyle} className="z-10" />
          
          
          {/* Header - Melhor IA */}
          <div
            className={cn(
              "flex items-center justify-between px-4 py-3 border-b border-border relative z-20",
              colors.bg
            )}
          >
            <div className="flex items-center gap-2">
              <Star className={cn("w-3.5 h-3.5", colors.text)} />
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-wide",
                  colors.text
                )}
              >
                Melhor: {aiNames[prompt.aiRecommended]}
              </span>
            </div>
            <Badge variant="outline" className="text-[10px] font-medium">
              {prompt.category}
            </Badge>
          </div>

          {/* Body */}
          <div className="flex-1 p-4 relative z-20">
            <h3 className="text-base font-bold mb-2 line-clamp-2">{prompt.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {prompt.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {prompt.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {prompt.estimatedTime}
              </span>
              <span className="flex items-center gap-1">
                <BarChart3 className="w-3 h-3" />
                {prompt.evidenceLevel}
              </span>
            </div>
          </div>

          {/* AI Buttons */}
          <div className="px-4 pb-3 space-y-1.5 relative z-20">
            <div className="flex gap-1.5">
              <button
                onClick={() => handleOpenAI("chatgpt")}
                className="ai-btn ai-btn-chatgpt flex-1"
              >
                <ExternalLink className="w-3 h-3" />
                ChatGPT
              </button>
              <button
                onClick={() => handleOpenAI("claude")}
                className="ai-btn ai-btn-claude flex-1"
              >
                <ExternalLink className="w-3 h-3" />
                Claude
              </button>
              <button
                onClick={() => handleOpenAI("gemini")}
                className="ai-btn ai-btn-gemini flex-1"
              >
                <ExternalLink className="w-3 h-3" />
                Gemini
              </button>
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => handleOpenAI("notebooklm")}
                className="ai-btn flex-1 bg-[#4285f4]/10 text-[#4285f4] hover:bg-[#4285f4]/20 border-[#4285f4]/30"
              >
                <ExternalLink className="w-3 h-3" />
                NotebookLM
              </button>
              <button
                onClick={() => handleOpenAI("perplexity")}
                className="ai-btn flex-1 bg-[#20b8cd]/10 text-[#20b8cd] hover:bg-[#20b8cd]/20 border-[#20b8cd]/30"
              >
                <ExternalLink className="w-3 h-3" />
                Perplexity
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/30 relative z-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleFavorite(prompt.id)}
              className={cn(
                "gap-1.5 h-8",
                favorite && "text-destructive"
              )}
            >
              <Heart className={cn("w-3.5 h-3.5", favorite && "fill-current")} />
              <span className="text-xs">{favorite ? "Salvo" : "Salvar"}</span>
            </Button>

            <div className="flex gap-1.5">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="gap-1.5 h-8"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span className="text-xs">{copied ? "Copiado" : "Copiar"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowModal(true)}
                className="h-8 text-xs"
              >
                Ver Completo
              </Button>
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