import { useState } from "react";
import { Copy, Check, ExternalLink, Clock, BarChart3, Tag, Star, Pencil, RotateCcw, X, Save } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Prompt } from "@/data/prompts-data";
import { useToast } from "@/hooks/use-toast";
import { usePromptEdits } from "@/hooks/use-prompt-edits";
import { parsePromptSections, highlightVariables } from "@/lib/format-prompt";
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
  chatgpt: "Listas estruturadas, flashcards, cronogramas e tarefas rapidas.",
  claude: "Raciocinio complexo, casos clinicos, tutoria socratica.",
  gemini: "Descricoes visuais, conteudo multimodal, mapas conceituais.",
  notebooklm: "Geracao de podcasts, sintese de documentos em audio.",
  perplexity: "Busca de evidencias atualizadas, pesquisa cientifica.",
};

function HighlightedText({ text }: { text: string }) {
  const parts = highlightVariables(text);
  return (
    <>
      {parts.map((part, index) =>
        part.isVariable ? (
          <span
            key={index}
            className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded bg-primary/15 text-primary font-medium text-xs border border-primary/20"
          >
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </>
  );
}

function PromptContent({ text }: { text: string }) {
  const sections = parsePromptSections(text);

  return (
    <div className="space-y-3">
      {sections.map((section, index) => {
        switch (section.type) {
          case "header":
            return (
              <div key={index} className="flex items-center gap-3 pt-4 pb-2 first:pt-0">
                <div className="w-1 h-5 bg-primary rounded-full flex-shrink-0" />
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                  {section.content}
                </h3>
              </div>
            );
          case "subheader":
            return (
              <div key={index} className="flex items-center gap-2 pt-3 pb-1">
                <div className="w-0.5 h-4 bg-muted-foreground/40 rounded-full flex-shrink-0" />
                <h4 className="text-sm font-semibold text-foreground/90">
                  <HighlightedText text={section.content} />
                </h4>
              </div>
            );
          case "list":
            return (
              <div key={index} className="flex items-start gap-3 pl-4">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <HighlightedText text={section.content} />
                </p>
              </div>
            );
          case "numbered":
            return (
              <div key={index} className="flex items-start gap-3 pl-4">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground text-xs font-medium flex-shrink-0 mt-0.5">
                  {section.level}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <HighlightedText text={section.content} />
                </p>
              </div>
            );
          case "code":
            return (
              <pre key={index} className="bg-muted/50 rounded-lg p-3 text-xs font-mono text-foreground/80 overflow-x-auto border border-border/30">
                {section.content}
              </pre>
            );
          case "divider":
            return <div key={index} className="border-t border-border/30 my-2" />;
          default:
            return (
              <p key={index} className="text-sm text-foreground/80 leading-relaxed pl-4">
                <HighlightedText text={section.content} />
              </p>
            );
        }
      })}
    </div>
  );
}

export function PromptModal({ prompt, open, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const { toast } = useToast();
  const { saveEdit, resetEdit, getEditedPrompt, hasEdit } = usePromptEdits();
  
  const recommendedAI = prompt.aiRecommended;
  const aiStyle = aiColors[recommendedAI];
  const currentPromptText = getEditedPrompt(prompt.id, prompt.prompt);
  const isModified = hasEdit(prompt.id);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    toast({ title: "Prompt copiado", description: "Cole na ferramenta de sua escolha." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (ai: keyof typeof aiLinks) => {
    await navigator.clipboard.writeText(currentPromptText);
    toast({ title: "Prompt copiado", description: `Abrindo ${aiNames[ai]}...` });
    window.open(aiLinks[ai], "_blank");
  };

  const handleStartEdit = () => {
    setEditText(currentPromptText);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    saveEdit(prompt.id, editText);
    setIsEditing(false);
    toast({ title: "Prompt salvo", description: "Suas alteracoes foram salvas localmente." });
  };

  const handleResetEdit = () => {
    resetEdit(prompt.id);
    setIsEditing(false);
    toast({ title: "Prompt restaurado", description: "Prompt original restaurado." });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "iniciante":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "intermediario":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "avancado":
        return "bg-rose-500/10 text-rose-600 border-rose-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="flex-shrink-0 p-6 pb-4 border-b border-border/50">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="outline" className="text-xs font-medium">
                  {prompt.category}
                </Badge>
                <Badge className={cn("text-xs border", getDifficultyColor(prompt.difficulty))}>
                  {prompt.difficulty}
                </Badge>
                {isModified && (
                  <Badge variant="secondary" className="text-xs">
                    Modificado
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-xl font-semibold leading-tight pr-8">
                {prompt.title}
              </DialogTitle>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{prompt.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="w-4 h-4" />
              <span>Evidencia: {prompt.evidenceLevel}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {prompt.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        {/* AI Buttons */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-border/30 bg-muted/20">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-medium">
            Abrir em
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {(Object.keys(aiLinks) as Array<keyof typeof aiLinks>).map((ai) => (
              <TooltipProvider key={ai}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenAI(ai)}
                      className={cn(
                        "gap-1.5 h-9 text-xs",
                        aiColors[ai].bg,
                        aiColors[ai].text,
                        aiColors[ai].border,
                        aiColors[ai].hover
                      )}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {aiNames[ai]}
                      {ai === recommendedAI && <Star className="w-3 h-3 fill-current" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">{aiReasons[ai]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-3 bg-muted/30 border-b border-border/30">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Prompt
            </span>
            <div className="flex items-center gap-2">
              {isEditing ? (
                <>
                  <Button size="sm" variant="ghost" onClick={handleCancelEdit} className="h-7 text-xs gap-1.5">
                    <X className="w-3.5 h-3.5" />
                    Cancelar
                  </Button>
                  <Button size="sm" variant="default" onClick={handleSaveEdit} className="h-7 text-xs gap-1.5">
                    <Save className="w-3.5 h-3.5" />
                    Salvar
                  </Button>
                </>
              ) : (
                <>
                  {isModified && (
                    <Button size="sm" variant="ghost" onClick={handleResetEdit} className="h-7 text-xs gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5" />
                      Restaurar
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" onClick={handleStartEdit} className="h-7 text-xs gap-1.5">
                    <Pencil className="w-3.5 h-3.5" />
                    Editar
                  </Button>
                  <Button size="sm" variant="ghost" onClick={handleCopy} className="h-7 text-xs gap-1.5">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copiar
                      </>
                    )}
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Prompt Text */}
          <ScrollArea className="flex-1 min-h-0">
            <div className="p-6">
              {isEditing ? (
                <Textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="min-h-[400px] font-mono text-sm resize-none"
                  placeholder="Digite o prompt..."
                />
              ) : (
                <div className="rounded-lg bg-card/50 border border-border/30 p-5">
                  <PromptContent text={currentPromptText} />
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
