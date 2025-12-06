import { useState, useEffect, useCallback } from "react";
import { Copy, Check, ExternalLink, Clock, BarChart3, Tag, Sparkles, FileText, Lightbulb, Star, Info, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Prompt } from "@/data/prompts-data";
import { useToast } from "@/hooks/use-toast";
import { usePromptNotes } from "@/hooks/use-prompt-notes";
import { cn } from "@/lib/utils";
import { ExplanationCorrector } from "./ExplanationCorrector";
import { QuestionGenerator } from "./QuestionGenerator";

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
  chatgpt: "Melhor para: listas estruturadas, flashcards, cronogramas, saídas formatadas e tarefas rápidas com formato definido.",
  claude: "Melhor para: raciocínio complexo, casos clínicos, análise profunda, tutoria socrática e conteúdo longo com nuances.",
  gemini: "Melhor para: descrições visuais, conteúdo multimodal, integração com Google e pesquisa de informações.",
  notebooklm: "Melhor para: geração de podcasts, análise de documentos, síntese de múltiplas fontes e conteúdo em áudio.",
  perplexity: "Melhor para: busca de evidências atualizadas, pesquisa científica, informações em tempo real e referências.",
};

// Syntax highlighting component
function HighlightedPrompt({ text }: { text: string }) {
  const lines = text.split('\n');
  
  const getLineType = (line: string) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) return 'h1';
    if (trimmed.startsWith('## ')) return 'h2';
    if (trimmed.startsWith('### ')) return 'h3';
    if (trimmed.startsWith('- ')) return 'list';
    if (/^\d+\.\s/.test(trimmed)) return 'numbered';
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) return 'bold';
    if (trimmed === '') return 'empty';
    return 'text';
  };

  const highlightVariables = (text: string) => {
    const parts = text.split(/(\[[^\]]+\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span
            key={index}
            className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded bg-primary/20 text-primary font-medium text-xs border border-primary/30"
          >
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
            <span className="text-lg font-bold text-primary">
              {trimmed.replace(/^# /, '')}
            </span>
          </div>
        );
      case 'h2':
        return (
          <div key={index} className="flex items-center gap-2 mt-3 mb-1.5">
            <div className="w-0.5 h-5 bg-accent rounded-full" />
            <span className="text-base font-semibold text-accent-foreground">
              {highlightVariables(trimmed.replace(/^## /, ''))}
            </span>
          </div>
        );
      case 'h3':
        return (
          <div key={index} className="flex items-center gap-2 mt-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              {highlightVariables(trimmed.replace(/^### /, ''))}
            </span>
          </div>
        );
      case 'list':
        return (
          <div key={index} className="flex items-start gap-2 ml-4 my-0.5">
            <span className="text-primary mt-1.5 text-xs">●</span>
            <span className="text-sm text-foreground/90">
              {highlightVariables(trimmed.replace(/^- /, ''))}
            </span>
          </div>
        );
      case 'numbered':
        const match = trimmed.match(/^(\d+)\.\s(.*)$/);
        if (match) {
          return (
            <div key={index} className="flex items-start gap-2 ml-4 my-0.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                {match[1]}
              </span>
              <span className="text-sm text-foreground/90">
                {highlightVariables(match[2])}
              </span>
            </div>
          );
        }
        return null;
      case 'bold':
        return (
          <div key={index} className="my-1">
            <span className="text-sm font-semibold text-foreground">
              {highlightVariables(trimmed.replace(/^\*\*|\*\*$/g, ''))}
            </span>
          </div>
        );
      case 'empty':
        return <div key={index} className="h-2" />;
      default:
        return (
          <div key={index} className="my-0.5">
            <span className="text-sm text-foreground/80 leading-relaxed">
              {highlightVariables(line)}
            </span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-0">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
}

export function PromptModal({ prompt, open, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("prompt");
  const { toast } = useToast();
  const { getNote, setNote, deleteNote, hasNote } = usePromptNotes();
  const [noteContent, setNoteContent] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  
  const recommendedAI = prompt.aiRecommended;
  const aiStyle = aiColors[recommendedAI];

  // Load note when modal opens
  useEffect(() => {
    if (open) {
      setNoteContent(getNote(prompt.id));
      setActiveTab("prompt");
    }
  }, [open, prompt.id, getNote]);

  // Debounced auto-save for notes
  const saveNote = useCallback((content: string) => {
    if (content.trim()) {
      setNote(prompt.id, content);
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2000);
    }
  }, [prompt.id, setNote]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (noteContent !== getNote(prompt.id)) {
        saveNote(noteContent);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [noteContent, prompt.id, getNote, saveNote]);

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

  const handleDeleteNote = () => {
    deleteNote(prompt.id);
    setNoteContent("");
    toast({
      title: "Nota removida",
      description: "Sua anotação foi excluída.",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'iniciante':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'intermediário':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'avançado':
        return 'bg-rose-500/10 text-rose-600 border-rose-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader className="flex-shrink-0 pb-4 border-b border-border/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="outline" className="text-xs">
                  {prompt.category}
                </Badge>
                <Badge className={cn("text-xs border", getDifficultyColor(prompt.difficulty))}>
                  {prompt.difficulty}
                </Badge>
                {hasNote(prompt.id) && (
                  <Badge variant="secondary" className="text-xs">
                    Com notas
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-xl font-semibold leading-tight">
                {prompt.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="grid w-full grid-cols-4 shrink-0">
            <TabsTrigger value="prompt">Prompt</TabsTrigger>
            <TabsTrigger value="notes">Notas</TabsTrigger>
            <TabsTrigger value="explain">Explicação</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto custom-scrollbar py-4">
            <TabsContent value="prompt" className="m-0 space-y-4">
              {/* Descrição */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prompt.description}
                </p>
              </div>

              {/* IA Recomendada */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border cursor-help",
                      aiStyle.bg, aiStyle.border
                    )}>
                      <Star className={cn("w-5 h-5 flex-shrink-0", aiStyle.text)} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={cn("font-semibold text-sm", aiStyle.text)}>
                            Melhor IA: {aiNames[recommendedAI]}
                          </span>
                          <Info className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Clique para abrir com o prompt copiado
                        </p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleOpenAI(recommendedAI)}
                        className={cn("gap-1.5 h-8", aiStyle.bg, aiStyle.text, aiStyle.hover, "border", aiStyle.border)}
                        variant="outline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Abrir {aiNames[recommendedAI]}
                      </Button>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="text-sm">{aiReasons[recommendedAI]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

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
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Conteúdo do Prompt */}
              <div className="relative">
                <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-xl opacity-50" />
                <div className="relative rounded-xl bg-card/80 backdrop-blur border border-border/50 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/30">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Prompt
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleCopy}
                      className="h-7 text-xs gap-1.5"
                    >
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
                  </div>
                  <div className="p-4 max-h-[300px] overflow-y-auto custom-scrollbar">
                    <HighlightedPrompt text={prompt.prompt} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="m-0 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Suas anotações sobre este prompt
                  </label>
                  {noteSaved && (
                    <span className="text-xs text-emerald-500 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Salvo automaticamente
                    </span>
                  )}
                </div>
                <Textarea
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="Adicione suas anotações, insights e observações sobre este prompt..."
                  className="min-h-[200px] text-sm resize-none"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{noteContent.length} caracteres</span>
                  {noteContent.trim() && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive gap-1"
                      onClick={handleDeleteNote}
                    >
                      <Trash2 className="w-3 h-3" />
                      Limpar nota
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="explain" className="m-0">
              <ExplanationCorrector
                promptTitle={prompt.title}
                promptContent={prompt.prompt}
              />
            </TabsContent>

            <TabsContent value="quiz" className="m-0">
              <QuestionGenerator
                promptTitle={prompt.title}
                promptContent={prompt.prompt}
              />
            </TabsContent>
          </div>
        </Tabs>

        {/* Rodapé com ações */}
        <DialogFooter className="flex-shrink-0 pt-4 border-t border-border/50">
          <div className="flex flex-col gap-3 w-full">
            <Button onClick={handleCopy} className="gap-2 w-full h-11">
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copiado!" : "Copiar Prompt"}
            </Button>
            <div className="grid grid-cols-5 gap-2">
              {(["chatgpt", "claude", "gemini", "notebooklm", "perplexity"] as const).map((ai) => {
                const style = aiColors[ai];
                const isRecommended = ai === recommendedAI;
                return (
                  <Button
                    key={ai}
                    variant="outline"
                    onClick={() => handleOpenAI(ai)}
                    className={cn(
                      "gap-1 h-10 text-xs relative",
                      style.text, style.border, style.hover,
                      isRecommended && "ring-2 ring-offset-2 ring-offset-background",
                      isRecommended && ai === "chatgpt" && "ring-[#10a37f]",
                      isRecommended && ai === "claude" && "ring-[#cc785c]",
                      isRecommended && ai === "gemini" && "ring-[#8e8ea0]",
                      isRecommended && ai === "notebooklm" && "ring-[#4285f4]",
                      isRecommended && ai === "perplexity" && "ring-[#20b8cd]"
                    )}
                  >
                    {isRecommended && (
                      <Star className="w-3 h-3 absolute -top-1 -right-1 fill-current" />
                    )}
                    <ExternalLink className="w-3 h-3" />
                    <span className="hidden sm:inline">{aiNames[ai]}</span>
                    <span className="sm:hidden">{aiNames[ai].slice(0, 3)}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
