import { useState, useMemo, useCallback, useEffect } from "react";
import { Copy, Check, Sparkles, ChevronRight, RotateCcw, AlertCircle, CloudOff, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { usePromptHistory } from "@/hooks/use-prompt-history";
import {
  extractVariables,
  replaceVariables,
  countFilledVariables,
  PromptVariable,
} from "@/lib/prompt-variables";
import { cn } from "@/lib/utils";

const STORAGE_KEY_PREFIX = "medprompts-form-";

interface InteractivePromptFormProps {
  promptId: string;
  promptTitle: string;
  promptText: string;
  onGeneratedPrompt?: (text: string) => void;
}

interface FieldError {
  hasError: boolean;
  message: string;
}

interface SavedFormData {
  values: Record<string, string>;
  savedAt: number;
}

function getStorageKey(promptId: string): string {
  return `${STORAGE_KEY_PREFIX}${promptId}`;
}

function loadSavedValues(promptId: string): Record<string, string> {
  try {
    const saved = localStorage.getItem(getStorageKey(promptId));
    if (saved) {
      const data: SavedFormData = JSON.parse(saved);
      // Dados expiram após 7 dias
      const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - data.savedAt < sevenDaysMs) {
        return data.values;
      }
      // Remove dados expirados
      localStorage.removeItem(getStorageKey(promptId));
    }
  } catch {
    // Ignora erros de parse
  }
  return {};
}

function saveValues(promptId: string, values: Record<string, string>): void {
  try {
    const hasAnyValue = Object.values(values).some(v => v.trim());
    if (hasAnyValue) {
      const data: SavedFormData = {
        values,
        savedAt: Date.now(),
      };
      localStorage.setItem(getStorageKey(promptId), JSON.stringify(data));
    } else {
      // Remove se não há valores
      localStorage.removeItem(getStorageKey(promptId));
    }
  } catch {
    // Ignora erros de storage (quota, etc)
  }
}

function clearSavedValues(promptId: string): void {
  try {
    localStorage.removeItem(getStorageKey(promptId));
  } catch {
    // Ignora erros
  }
}

export function InteractivePromptForm({
  promptId,
  promptTitle,
  promptText,
  onGeneratedPrompt,
}: InteractivePromptFormProps) {
  const { toast } = useToast();
  const { addToHistory } = usePromptHistory();
  const [values, setValues] = useState<Record<string, string>>(() => loadSavedValues(promptId));
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, FieldError>>({});
  const [copied, setCopied] = useState(false);
  const [showGenerated, setShowGenerated] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [hasSavedData, setHasSavedData] = useState(() => Object.keys(loadSavedValues(promptId)).length > 0);

  const variables = useMemo(() => extractVariables(promptText), [promptText]);
  const { filled, total } = countFilledVariables(variables, values);
  const allFilled = filled === total && total > 0;

  // Salva automaticamente quando valores mudam
  useEffect(() => {
    saveValues(promptId, values);
    setHasSavedData(Object.values(values).some(v => v.trim()));
  }, [promptId, values]);

  const generatedPrompt = useMemo(() => {
    return replaceVariables(promptText, values);
  }, [promptText, values]);

  // Validação de campo individual
  const validateField = useCallback((variable: PromptVariable, value: string): FieldError => {
    const trimmedValue = value.trim();
    
    if (!trimmedValue) {
      return { hasError: true, message: "Campo obrigatório" };
    }
    
    if (trimmedValue.length < 2) {
      return { hasError: true, message: "Mínimo de 2 caracteres" };
    }
    
    if (trimmedValue.length > 2000) {
      return { hasError: true, message: "Máximo de 2000 caracteres" };
    }
    
    return { hasError: false, message: "" };
  }, []);

  // Valida todos os campos
  const validateAllFields = useCallback((): boolean => {
    const newErrors: Record<string, FieldError> = {};
    let hasAnyError = false;

    variables.forEach(variable => {
      const value = values[variable.name] || "";
      const fieldError = validateField(variable, value);
      newErrors[variable.name] = fieldError;
      if (fieldError.hasError) {
        hasAnyError = true;
      }
    });

    setErrors(newErrors);
    return !hasAnyError;
  }, [variables, values, validateField]);

  const handleValueChange = useCallback((variable: PromptVariable, value: string) => {
    setValues(prev => ({ ...prev, [variable.name]: value }));
    setShowGenerated(false);
    
    // Valida em tempo real se já foi tocado ou tentou submeter
    if (touched[variable.name] || attemptedSubmit) {
      const fieldError = validateField(variable, value);
      setErrors(prev => ({ ...prev, [variable.name]: fieldError }));
    }
  }, [touched, attemptedSubmit, validateField]);

  const handleBlur = useCallback((variable: PromptVariable) => {
    setTouched(prev => ({ ...prev, [variable.name]: true }));
    const value = values[variable.name] || "";
    const fieldError = validateField(variable, value);
    setErrors(prev => ({ ...prev, [variable.name]: fieldError }));
  }, [values, validateField]);

  const handleGenerate = useCallback(() => {
    setAttemptedSubmit(true);
    
    const isValid = validateAllFields();
    
    if (!isValid) {
      // Encontra o primeiro campo com erro para focar
      const firstErrorField = variables.find(v => errors[v.name]?.hasError || !values[v.name]?.trim());
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField.id);
        element?.focus();
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      toast({
        title: "Campos incompletos",
        description: "Preencha todos os campos corretamente antes de gerar o prompt.",
        variant: "destructive",
      });
      return;
    }
    
    setShowGenerated(true);
    onGeneratedPrompt?.(generatedPrompt);
    
    // Salva no histórico
    addToHistory(promptId, promptTitle, generatedPrompt, values);
    
    toast({
      title: "Prompt gerado",
      description: "Seu prompt personalizado está pronto para copiar.",
    });
  }, [validateAllFields, variables, errors, values, generatedPrompt, onGeneratedPrompt, promptId, promptTitle, addToHistory, toast]);

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
    setTouched({});
    setErrors({});
    setShowGenerated(false);
    setAttemptedSubmit(false);
    clearSavedValues(promptId);
    setHasSavedData(false);
    toast({
      title: "Campos limpos",
      description: "Todos os dados foram removidos.",
    });
  }, [promptId, toast]);

  const isTextArea = (variable: PromptVariable): boolean => {
    const textAreaFields = ['NOTAS', 'TRECHO', 'QUESTAO', 'TEXTO', 'CONTEUDO'];
    return textAreaFields.some(field => 
      variable.name.toUpperCase().includes(field)
    );
  };

  const getFieldState = (variable: PromptVariable): 'idle' | 'valid' | 'error' => {
    const value = values[variable.name] || "";
    const fieldError = errors[variable.name];
    const isTouched = touched[variable.name] || attemptedSubmit;
    
    if (!isTouched && !value.trim()) return 'idle';
    if (fieldError?.hasError) return 'error';
    if (value.trim()) return 'valid';
    return 'idle';
  };

  if (variables.length === 0) {
    return null;
  }

  const errorCount = Object.values(errors).filter(e => e.hasError).length;
  const emptyCount = variables.filter(v => !values[v.name]?.trim()).length;
  const pendingCount = attemptedSubmit ? (errorCount + emptyCount) : emptyCount;

  return (
    <div className="space-y-6">
      {/* Header com progresso */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            allFilled ? "bg-green-500/10" : "bg-primary/10"
          )}>
            {allFilled ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Sparkles className="w-4 h-4 text-primary" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
              Personalize o Prompt
              {hasSavedData && filled > 0 && !allFilled && (
                <span className="inline-flex items-center gap-1 text-xs font-normal text-muted-foreground">
                  <Cloud className="w-3 h-3" />
                  <span className="hidden sm:inline">Rascunho salvo</span>
                </span>
              )}
            </h3>
            <p className="text-xs text-muted-foreground">
              {allFilled 
                ? "Todos os campos preenchidos. Pronto para gerar!" 
                : hasSavedData && filled > 0
                  ? "Continue de onde parou"
                  : "Preencha os campos obrigatórios abaixo"
              }
            </p>
          </div>
        </div>
        <Badge 
          variant={allFilled ? "default" : pendingCount > 0 && attemptedSubmit ? "destructive" : "secondary"}
          className={cn(
            "text-xs transition-colors",
            allFilled && "bg-green-500 hover:bg-green-600"
          )}
        >
          {filled}/{total} campos
        </Badge>
      </div>

      {/* Aviso de campos pendentes após tentativa de submit */}
      {attemptedSubmit && pendingCount > 0 && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 animate-in fade-in-50 slide-in-from-top-2">
          <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
          <p className="text-xs text-destructive">
            {pendingCount === 1 
              ? "1 campo precisa de atenção" 
              : `${pendingCount} campos precisam de atenção`
            }
          </p>
        </div>
      )}

      {/* Formulário de campos */}
      <div className="space-y-5">
        {variables.map((variable, index) => {
          const fieldState = getFieldState(variable);
          const fieldError = errors[variable.name];
          const isTouched = touched[variable.name] || attemptedSubmit;
          const showError = isTouched && fieldError?.hasError;
          
          return (
            <div key={variable.id} className="space-y-2">
              <Label 
                htmlFor={variable.id}
                className={cn(
                  "text-sm font-medium flex items-center gap-2 transition-colors",
                  showError && "text-destructive"
                )}
              >
                <span className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors",
                  fieldState === 'valid' && "bg-green-500/20 text-green-600",
                  fieldState === 'error' && "bg-destructive/20 text-destructive",
                  fieldState === 'idle' && "bg-muted text-muted-foreground"
                )}>
                  {fieldState === 'valid' ? (
                    <Check className="w-3 h-3" />
                  ) : fieldState === 'error' ? (
                    <AlertCircle className="w-3 h-3" />
                  ) : (
                    index + 1
                  )}
                </span>
                {variable.label}
                <span className="text-destructive">*</span>
              </Label>
              <p className={cn(
                "text-xs pl-7 transition-colors",
                showError ? "text-destructive" : "text-muted-foreground"
              )}>
                {showError ? fieldError.message : variable.description}
              </p>
              {isTextArea(variable) ? (
                <Textarea
                  id={variable.id}
                  value={values[variable.name] || ""}
                  onChange={(e) => handleValueChange(variable, e.target.value)}
                  onBlur={() => handleBlur(variable)}
                  placeholder={variable.placeholder}
                  className={cn(
                    "min-h-[100px] text-sm resize-none ml-7 transition-colors",
                    fieldState === 'valid' && "border-green-500/50 focus-visible:ring-green-500/20",
                    fieldState === 'error' && "border-destructive focus-visible:ring-destructive/20"
                  )}
                  aria-invalid={showError}
                  aria-describedby={showError ? `${variable.id}-error` : undefined}
                />
              ) : (
                <Input
                  id={variable.id}
                  value={values[variable.name] || ""}
                  onChange={(e) => handleValueChange(variable, e.target.value)}
                  onBlur={() => handleBlur(variable)}
                  placeholder={variable.placeholder}
                  className={cn(
                    "text-sm ml-7 transition-colors",
                    fieldState === 'valid' && "border-green-500/50 focus-visible:ring-green-500/20",
                    fieldState === 'error' && "border-destructive focus-visible:ring-destructive/20"
                  )}
                  aria-invalid={showError}
                  aria-describedby={showError ? `${variable.id}-error` : undefined}
                />
              )}
              {showError && (
                <p 
                  id={`${variable.id}-error`}
                  className="text-xs text-destructive pl-7 flex items-center gap-1 animate-in fade-in-50 slide-in-from-top-1"
                  role="alert"
                >
                  <AlertCircle className="w-3 h-3" />
                  {fieldError.message}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Botões de ação */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/30">
        <Button
          onClick={handleGenerate}
          className={cn(
            "flex-1 gap-2 transition-all",
            allFilled && "bg-green-600 hover:bg-green-700"
          )}
        >
          {allFilled ? (
            <Check className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
          {allFilled ? "Gerar Prompt" : `Preencher ${total - filled} campo${total - filled > 1 ? 's' : ''}`}
        </Button>
        {Object.keys(values).length > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground"
            title="Limpar todos os campos"
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
          <ScrollArea className="h-[200px] rounded-lg border border-green-500/30 bg-green-500/5">
            <pre className="p-4 text-sm text-foreground/90 whitespace-pre-wrap font-sans leading-relaxed">
              {generatedPrompt}
            </pre>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
