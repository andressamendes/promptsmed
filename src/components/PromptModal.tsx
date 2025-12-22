import { useState, useMemo } from "react";
import { Copy, Check, ExternalLink, Star, FileText, FormInput } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prompt } from "@/data/prompts-data";
import { AI_CONFIGS, AI_LIST, AIProvider } from "@/data/ai-config";
import { useToast } from "@/hooks/use-toast";
import { usePromptEdits } from "@/hooks/use-prompt-edits";
import { parsePromptSections, highlightVariables } from "@/lib/format-prompt";
import { extractVariables } from "@/lib/prompt-variables";
import { InteractivePromptForm } from "@/components/InteractivePromptForm";
import { cn } from "@/lib/utils";

interface PromptModalProps {
  prompt: Prompt;
  open: boolean;
  onClose: () => void;
}

function HighlightedText({ text }: { text: string }) {
  const parts = highlightVariables(text);
  return (
    <>
      {parts.map((part, index) =>
        part.isVariable ? (
          <span
            key={index}
            className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded bg-primary/10 text-primary font-medium text-xs border border-primary/15"
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
    <div className="space-y-2.5">
      {sections.map((section, index) => {
        switch (section.type) {
          case "header":
            return (
              <div key={index} className="flex items-center gap-3 pt-5 pb-2 first:pt-0">
                <div className="w-1 h-5 bg-primary rounded-full flex-shrink-0" />
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                  {section.content}
                </h3>
              </div>
            );
          case "subheader":
            return (
              <div key={index} className="flex items-center gap-2 pt-3 pb-1">
                <h4 className="text-sm font-semibold text-foreground/90">
                  <HighlightedText text={section.content} />
                </h4>
              </div>
            );
          case "list":
            return (
              <div key={index} className="flex items-start gap-3 pl-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <HighlightedText text={section.content} />
                </p>
              </div>
            );
          case "numbered":
            return (
              <div key={index} className="flex items-start gap-3 pl-3">
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
            return <div key={index} className="border-t border-border/20 my-3" />;
          default:
            return (
              <p key={index} className="text-sm text-foreground/80 leading-relaxed pl-3">
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
  const [activeTab, setActiveTab] = useState<string>("form");
  const { toast } = useToast();
  const { getEditedPrompt, hasEdit } = usePromptEdits();
  
  const recommendedAI = prompt.aiRecommended;
  const currentPromptText = getEditedPrompt(prompt.id, prompt.prompt);
  const isModified = hasEdit(prompt.id);

  // Detecta se o prompt tem variáveis para mostrar a aba de formulário
  const variables = useMemo(() => extractVariables(currentPromptText), [currentPromptText]);
  const hasVariables = variables.length > 0;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    toast({ title: "Prompt copiado", description: "Cole na ferramenta de sua escolha." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (ai: AIProvider) => {
    const config = AI_CONFIGS[ai];
    await navigator.clipboard.writeText(currentPromptText);
    toast({ title: "Prompt copiado", description: `Abrindo ${config.name}...` });
    window.open(config.url, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 gap-0">
        {/* Compact Header */}
        <DialogHeader className="flex-shrink-0 px-6 py-4 border-b border-border/40">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1.5 block">
                {prompt.category}
                {isModified && (
                  <span className="ml-2 text-primary">(modificado)</span>
                )}
              </span>
              <DialogTitle className="text-lg font-semibold leading-snug">
                {prompt.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        {/* AI Buttons - Compact */}
        <div className="flex-shrink-0 px-6 py-3 border-b border-border/30 bg-muted/10">
          <div className="flex flex-wrap gap-2">
            {AI_LIST.map((ai) => {
              const isRecommended = ai.id === recommendedAI;
              return (
                <TooltipProvider key={ai.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenAI(ai.id)}
                        className={cn(
                          "gap-1.5 h-8 text-xs",
                          ai.colors.bg,
                          ai.colors.text,
                          ai.colors.border,
                          ai.colors.hover
                        )}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {ai.name}
                        {isRecommended && <Star className="w-3 h-3 fill-current" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">{ai.reason}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>

        {/* Main Content with Tabs */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          {hasVariables ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between px-6 py-2 bg-background/50 border-b border-border/20">
                <TabsList className="h-8">
                  <TabsTrigger value="form" className="text-xs gap-1.5 h-7 px-3">
                    <FormInput className="w-3.5 h-3.5" />
                    Preencher Campos
                  </TabsTrigger>
                  <TabsTrigger value="full" className="text-xs gap-1.5 h-7 px-3">
                    <FileText className="w-3.5 h-3.5" />
                    Ver Completo
                  </TabsTrigger>
                </TabsList>
                
                {activeTab === "full" && (
                  <Button size="sm" variant="default" onClick={handleCopy} className="h-7 text-xs gap-1.5">
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
                )}
              </div>

              <TabsContent value="form" className="flex-1 m-0 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="px-6 py-5">
                    <InteractivePromptForm 
                      promptId={prompt.id} 
                      promptTitle={prompt.title}
                      promptText={currentPromptText} 
                    />
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="full" className="flex-1 m-0 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="px-6 py-5">
                    <div className="bg-muted/20 rounded-xl border border-border/30 p-6">
                      <PromptContent text={currentPromptText} />
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          ) : (
            <>
              {/* Minimal Toolbar for prompts without variables */}
              <div className="flex items-center justify-end gap-2 px-6 py-2 bg-background/50">
                <Button size="sm" variant="default" onClick={handleCopy} className="h-7 text-xs gap-1.5">
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

              {/* Prompt Content - Full Focus */}
              <ScrollArea className="flex-1 min-h-0">
                <div className="px-6 py-5">
                  <div className="bg-muted/20 rounded-xl border border-border/30 p-6">
                    <PromptContent text={currentPromptText} />
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
