import { useState } from "react";
import { Copy, Check, X, ExternalLink, Clock, BarChart3, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Prompt } from "@/data/prompts-data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface PromptModalProps {
  prompt: Prompt;
  open: boolean;
  onClose: () => void;
}

const aiLinks = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
};

const aiNames = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
};

export function PromptModal({ prompt, open, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast({
      title: "Prompt copiado!",
      description: "Cole na IA de sua escolha.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (ai: "chatgpt" | "claude" | "gemini") => {
    await navigator.clipboard.writeText(prompt.prompt);
    toast({
      title: "Prompt copiado!",
      description: `Cole no ${aiNames[ai]}.`,
    });
    window.open(aiLinks[ai], "_blank");
  };

  // Format prompt with syntax highlighting
  const formatPrompt = (text: string) => {
    return text
      .replace(/^# (.+)$/gm, '<span class="role"># $1</span>')
      .replace(/^## (.+)$/gm, '<span class="task">## $1</span>')
      .replace(/^### (.+)$/gm, '<span class="format">### $1</span>')
      .replace(/\[([^\]]+)\]/g, '<span class="var">[$1]</span>')
      .replace(/^- /gm, '<span class="rule">- </span>')
      .replace(/^\d+\. /gm, '<span class="rule">$& </span>');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="outline" className="mb-2">
                {prompt.category}
              </Badge>
              <DialogTitle className="text-xl">{prompt.title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Description */}
          <p className="text-muted-foreground mb-4">{prompt.description}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4" />
              {prompt.estimatedTime}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <BarChart3 className="w-4 h-4" />
              Evidência: {prompt.evidenceLevel}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Tag className="w-4 h-4" />
              {prompt.difficulty}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {prompt.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Prompt Content */}
          <div className="code-block whitespace-pre-wrap text-sm max-h-[300px] overflow-y-auto custom-scrollbar">
            <div
              dangerouslySetInnerHTML={{ __html: formatPrompt(prompt.prompt) }}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex-shrink-0 pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleCopy} className="gap-2 flex-1">
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copiado!" : "Copiar Prompt"}
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => handleOpenAI("chatgpt")}
                className="gap-1.5 flex-1 sm:flex-none text-[#10a37f] border-[#10a37f]/30 hover:bg-[#10a37f]/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                ChatGPT
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOpenAI("claude")}
                className="gap-1.5 flex-1 sm:flex-none text-[#cc785c] border-[#cc785c]/30 hover:bg-[#cc785c]/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Claude
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOpenAI("gemini")}
                className="gap-1.5 flex-1 sm:flex-none text-[#8e8ea0] border-[#8e8ea0]/30 hover:bg-[#8e8ea0]/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Gemini
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
