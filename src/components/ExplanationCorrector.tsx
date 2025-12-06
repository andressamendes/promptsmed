import { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface CorrectionResult {
  correct: string[];
  inaccuracies: string[];
  errors: string[];
  suggestions: string[];
}

interface ExplanationCorrectorProps {
  promptTitle: string;
  promptContent: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export function ExplanationCorrector({ promptTitle, promptContent }: ExplanationCorrectorProps) {
  const [explanation, setExplanation] = useState("");
  const [result, setResult] = useState<CorrectionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeExplanation = async () => {
    if (!explanation.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/ai-tutor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "correct",
          explanation,
          context: { title: promptTitle, content: promptContent },
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Erro ao analisar explicação");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao processar");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">
          Explique este conceito com suas palavras:
        </label>
        <Textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          placeholder="Digite sua explicação do conceito abordado no prompt..."
          className="min-h-[100px] text-sm"
        />
      </div>

      <Button
        onClick={analyzeExplanation}
        disabled={!explanation.trim() || isLoading}
        className="w-full gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Analisando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Verificar Explicação
          </>
        )}
      </Button>

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-3">
          {/* Correct Points */}
          {result.correct.length > 0 && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-medium text-sm text-emerald-600">Pontos Corretos</span>
              </div>
              <ul className="space-y-1">
                {result.correct.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Inaccuracies */}
          {result.inaccuracies.length > 0 && (
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span className="font-medium text-sm text-amber-600">Imprecisões</span>
              </div>
              <ul className="space-y-1">
                {result.inaccuracies.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Errors */}
          {result.errors.length > 0 && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span className="font-medium text-sm text-rose-600">Erros Conceituais</span>
              </div>
              <ul className="space-y-1">
                {result.errors.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          {result.suggestions.length > 0 && (
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm text-primary">Sugestões de Melhoria</span>
              </div>
              <ul className="space-y-1">
                {result.suggestions.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
