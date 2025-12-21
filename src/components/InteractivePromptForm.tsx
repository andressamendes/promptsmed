import { useState, useMemo, useCallback } from "react";
import { Copy, Check, Sparkles, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  extractVariables,
  replaceVariables,
  countFilledVariables,
  PromptVariable,
} from "@/lib/prompt-variables";
import { cn } from "@/lib/utils";

interface InteractivePromptFormProps {
  promptText: string;
  onGeneratedPrompt?: (text: string) => void;
}

export function InteractivePromptForm({
  promptText,
  onGeneratedPrompt,
}: InteractivePromptFormProps) {
  const { toast } = useToast();
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [showGenerated, setShowGenerated] = useState(false);

  const variables = useMemo(() => extractVariables(promptText), [promptText]);
  const { filled, total } = countFilledVariables(variables, values);
  const allFilled = filled === total && total > 0;

  const generatedPrompt = useMemo(() => {
    return replaceVariables(promptText, values);
  }, [promptText, values]);

  const handleValueChange = useCallback((variableName: string, value: string) => {
    setValues(prev => ({ ...prev, [variableName]: value }));
    setShowGenerated(false);
  }, []);

  const handleGenerate = useCallback(() => {
    if (!allFilled) {
      toast({
        title: "Campos incompletos",
        description: "Preencha todos os campos antes de gerar o prompt.",
        variant: "destructive",
      });
      return;
    }
    setShowGenerated(true);
    onGeneratedPrompt?.(generatedPrompt);
  }, [allFilled, generatedPrompt, onGeneratedPrompt, toast]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    toast({
      title: "Prompt copiado",
      description: "Prompt personalizado pronto para usar.",
    });
    setTimeout(() => setCopied(false), 2000);
  }, [generatedPrompt, toast]);

  const handleReset = useCallback(() => {
    setValues({});
    setShowGenerated(false);
  }, []);

  const isTextArea = (variable: PromptVariable): boolean => {
    const textAreaFields = ['NOTAS', 'TRECHO', 'QUESTAO', 'TEXTO', 'CONTEUDO'];
    return textAreaFields.some(field => 
      variable.name.toUpperCase().includes(field)
    );
  };

  if (variables.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header com progresso */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Personalize o Prompt
            </h3>
            <p className="text-xs text-muted-foreground">
              Preencha os campos para gerar automaticamente
            </p>
          </div>
        </div>
        <Badge 
          variant={allFilled ? "default" : "secondary"}
          className="text-xs"
        >
          {filled}/{total} campos
        </Badge>
      </div>

      {/* Formulário de campos */}
      <div className="space-y-4">
        {variables.map((variable, index) => (
          <div key={variable.id} className="space-y-2">
            <Label 
              htmlFor={variable.id}
              className="text-sm font-medium flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                {index + 1}
              </span>
              {variable.label}
              {values[variable.name]?.trim() && (
                <Check className="w-3.5 h-3.5 text-green-500" />
              )}
            </Label>
            <p className="text-xs text-muted-foreground pl-7">
              {variable.description}
            </p>
            {isTextArea(variable) ? (
              <Textarea
                id={variable.id}
                value={values[variable.name] || ""}
                onChange={(e) => handleValueChange(variable.name, e.target.value)}
                placeholder={variable.placeholder}
                className="min-h-[100px] text-sm resize-none ml-7"
              />
            ) : (
              <Input
                id={variable.id}
                value={values[variable.name] || ""}
                onChange={(e) => handleValueChange(variable.name, e.target.value)}
                placeholder={variable.placeholder}
                className="text-sm ml-7"
              />
            )}
          </div>
        ))}
      </div>

      {/* Botões de ação */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/30">
        <Button
          onClick={handleGenerate}
          disabled={!allFilled}
          className="flex-1 gap-2"
        >
          <ChevronRight className="w-4 h-4" />
          Gerar Prompt
        </Button>
        {Object.keys(values).length > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="text-muted-foreground"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Prompt gerado */}
      {showGenerated && allFilled && (
        <div className="space-y-3 pt-4 border-t border-border/30 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Prompt Gerado
            </h4>
            <Button
              variant="default"
              size="sm"
              onClick={handleCopy}
              className="gap-1.5"
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
          <ScrollArea className="h-[200px] rounded-lg border border-border/50 bg-muted/20">
            <pre className="p-4 text-sm text-foreground/90 whitespace-pre-wrap font-sans leading-relaxed">
              {generatedPrompt}
            </pre>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
