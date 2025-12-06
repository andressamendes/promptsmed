import { useState } from "react";
import { Copy, Check, ExternalLink, Clock, BarChart3, Tag, Sparkles, FileText, Star, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Prompt } from "@/data/prompts-data";
import { useToast } from "@/hooks/use-toast";
import { useConfetti } from "@/hooks/use-confetti";
import { cn } from "@/lib/utils";
import { StudyMode } from "./StudyMode";

interface PromptModalProps {
  prompt: Prompt;
  open: boolean;
  onClose: () => void;
}

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

const aiColors = {
  chatgpt: { text: "text-[#10a37f]", bg: "bg-[#10a37f]/10", border: "border-[#10a37f]/30", hover: "hover:bg-[#10a37f]/20" },
  claude: { text: "text-[#cc785c]", bg: "bg-[#cc785c]/10", border: "border-[#cc785c]/30", hover: "hover:bg-[#cc785c]/20" },
  gemini: { text: "text-[#8e8ea0]", bg: "bg-[#8e8ea0]/10", border: "border-[#8e8ea0]/30", hover: "hover:bg-[#8e8ea0]/20" },
  notebooklm: { text: "text-[#4285f4]", bg: "bg-[#4285f4]/10", border: "border-[#4285f4]/30", hover: "hover:bg-[#4285f4]/20" },
  perplexity: { text: "text-[#20b8cd]", bg: "bg-[#20b8cd]/10", border: "border-[#20b8cd]/30", hover: "hover:bg-[#20b8cd]/20" },
};

const aiReasons: Record<string, string> = {
  chatgpt: "Melhor para: listas estruturadas, flashcards, cronogramas e tarefas rápidas.",
  claude: "Melhor para: raciocínio complexo, casos clínicos, tutoria socrática.",
  gemini: "Melhor para: descrições visuais, conteúdo multimodal, mapas conceituais.",
  notebooklm: "Melhor para: geração de podcasts, síntese de documentos em áudio.",
  perplexity: "Melhor para: busca de evidências atualizadas, pesquisa científica.",
};

function HighlightedPrompt({ text }: { text: string }) {
  const lines = text.split('\n');
  
  const getLineType = (line: string) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) return 'h1';
    if (trimmed.startsWith('## ')) return 'h2';
    if (trimmed.startsWith('### ')) return 'h3';
    if (trimmed.startsWith('- ')) return 'list';
    if (/^\d+\.\s/.test(trimmed)) return 'numbered';
    if (trimmed === '') return 'empty';
    return 'text';
  };

  const highlightVariables = (text: string) => {
    const parts = text.split(/(\[[^\]]+\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span key={index} className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded bg-primary/20 text-primary font-medium text-xs border border-primary/30">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  const renderLine = (line: string, index: number) => {
    const type = getLineType(line);
    const trimmed = line.trim();

    switch (type) {
      case 'h1':
        return (
          <div key={index} className="flex items-center gap-2 mt-4 mb-2 first:mt-0">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <span className="text-lg font-bold text-primary">{trimmed.replace(/^# /, '')}</span>
          </div>
        );
      case 'h2':
        return (
          <div key={index} className="flex items-center gap-2 mt-3 mb-1.5">
            <div className="w-0.5 h-5 bg-accent rounded-full" />
            <span className="text-base font-semibold text-accent-foreground">{highlightVariables(trimmed.replace(/^## /, ''))}</span>
          </div>
        );
      case 'h3':
        return (
          <div key={index} className="flex items-center gap-2 mt-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{highlightVariables(trimmed.replace(/^### /, ''))}</span>
          </div>
        );
      case 'list':
        return (
          <div key={index} className="flex items-start gap-2 ml-4 my-0.5">
            <span className="text-primary mt-1.5 text-xs">●</span>
            <span className="text-sm text-foreground/90">{highlightVariables(trimmed.replace(/^- /, ''))}</span>
          </div>
        );
      case 'numbered':
        const match = trimmed.match(/^(\d+)\.\s(.*)$/);
        if (match) {
          return (
            <div key={index} className="flex items-start gap-2 ml-4 my-0.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">{match[1]}</span>
              <span className="text-sm text-foreground/90">{highlightVariables(match[2])}</span>
            </div>
          );
        }
        return null;
      case 'empty':
        return <div key={index} className="h-2" />;
      default:
        return (
          <div key={index} className="my-0.5">
            <span className="text-sm text-foreground/80 leading-relaxed">{highlightVariables(line)}</span>
          </div>
        );
    }
  };

  return <div className="space-y-0">{lines.map((line, index) => renderLine(line, index))}</div>;
}

export function PromptModal({ prompt, open, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  const [studyModeOpen, setStudyModeOpen] = useState(false);
  const { toast } = useToast();
  const { fireSuccessConfetti } = useConfetti();
  const recommendedAI = prompt.aiRecommended;
  const aiStyle = aiColors[recommendedAI];

  const handleCopy = async (event?: React.MouseEvent) => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    fireSuccessConfetti(event);
    toast({ title: "Prompt copiado!", description: "Cole na ferramenta de sua escolha." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenStudyMode = () => {
    onClose();
    setTimeout(() => setStudyModeOpen(true), 100);
  };

  const handleOpenAI = async (ai: keyof typeof aiLinks, event?: React.MouseEvent) => {
    await navigator.clipboard.writeText(prompt.prompt);
    fireSuccessConfetti(event);
    toast({ title: "Prompt copiado!", description: `Abrindo ${aiNames[ai]}...` });
    window.open(aiLinks[ai], "_blank");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'iniciante': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'intermediário': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'avançado': return 'bg-rose-500/10 text-rose-600 border-rose-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-4 border-b border-border/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="outline" className="text-xs">{prompt.category}</Badge>
                <Badge className={cn("text-xs border", getDifficultyColor(prompt.difficulty))}>{prompt.difficulty}</Badge>
              </div>
              <DialogTitle className="text-xl font-semibold leading-tight">{prompt.title}</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {/* Metadados */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/30">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{prompt.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/30">
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Evidência: {prompt.evidenceLevel}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {prompt.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                <Tag className="w-3 h-3 mr-1" />{tag}
              </Badge>
            ))}
          </div>

          {/* Abrir com IA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={handleOpenStudyMode}
              className="col-span-2 sm:col-span-3 gap-2 bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
            >
              <BookOpen className="w-4 h-4" />
              Iniciar Modo de Estudo
            </Button>
            {(Object.keys(aiLinks) as Array<keyof typeof aiLinks>).map((ai) => (
              <TooltipProvider key={ai}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleOpenAI(ai, e)}
                      className={cn("gap-1.5 h-9", aiColors[ai].bg, aiColors[ai].text, aiColors[ai].border, aiColors[ai].hover)}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {aiNames[ai]}
                      {ai === recommendedAI && <Star className="w-3 h-3 fill-current" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p className="text-xs max-w-xs">{aiReasons[ai]}</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          {/* Conteúdo do Prompt */}
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-xl opacity-50" />
            <div className="relative rounded-xl bg-card/80 backdrop-blur border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/30">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Prompt</span>
                <Button size="sm" variant="ghost" onClick={(e) => handleCopy(e)} className="h-7 text-xs gap-1.5">
                  {copied ? <><Check className="w-3.5 h-3.5" />Copiado</> : <><Copy className="w-3.5 h-3.5" />Copiar</>}
                </Button>
              </div>
              <div className="p-4 max-h-[300px] overflow-y-auto">
                <HighlightedPrompt text={prompt.prompt} />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      
      <StudyMode 
        prompt={prompt} 
        open={studyModeOpen} 
        onClose={() => setStudyModeOpen(false)} 
      />
    </Dialog>
  );
}
