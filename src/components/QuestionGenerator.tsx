import { useState } from "react";
import { HelpCircle, Loader2, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuestionGeneratorProps {
  promptTitle: string;
  promptContent: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export function QuestionGenerator({ promptTitle, promptContent }: QuestionGeneratorProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const generateQuestions = async () => {
    setIsLoading(true);
    setError(null);
    setQuestions([]);
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/ai-tutor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "generate",
          context: { title: promptTitle, content: promptContent },
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Erro ao gerar questões");
      }

      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao processar");
    } finally {
      setIsLoading(false);
    }
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    const isCorrect = parseInt(selectedAnswer) === questions[currentIndex].correct;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="space-y-4">
      {questions.length === 0 ? (
        <>
          <p className="text-sm text-muted-foreground">
            Gere questões de múltipla escolha baseadas no conteúdo deste prompt para testar seu conhecimento.
          </p>
          <Button
            onClick={generateQuestions}
            disabled={isLoading}
            className="w-full gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Gerando questões...
              </>
            ) : (
              <>
                <HelpCircle className="w-4 h-4" />
                Gerar Questões
              </>
            )}
          </Button>
          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
              {error}
            </div>
          )}
        </>
      ) : (
        <>
          {/* Progress */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Questão {currentIndex + 1} de {questions.length}
            </span>
            <span className="font-medium text-primary">
              {score.correct}/{score.total} corretas
            </span>
          </div>

          {/* Question */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-sm mb-4">{currentQuestion.question}</p>

            <RadioGroup
              value={selectedAnswer || ""}
              onValueChange={setSelectedAnswer}
              disabled={showResult}
            >
              {currentQuestion.options.map((option, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg border transition-colors",
                    showResult && i === currentQuestion.correct && "bg-emerald-500/10 border-emerald-500/50",
                    showResult && selectedAnswer === i.toString() && i !== currentQuestion.correct && "bg-rose-500/10 border-rose-500/50",
                    !showResult && "hover:bg-muted/50"
                  )}
                >
                  <RadioGroupItem value={i.toString()} id={`option-${i}`} />
                  <Label htmlFor={`option-${i}`} className="text-sm flex-1 cursor-pointer">
                    {option}
                  </Label>
                  {showResult && i === currentQuestion.correct && (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  )}
                  {showResult && selectedAnswer === i.toString() && i !== currentQuestion.correct && (
                    <XCircle className="w-4 h-4 text-rose-500" />
                  )}
                </div>
              ))}
            </RadioGroup>

            {/* Explanation */}
            {showResult && (
              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm font-medium text-primary mb-1">Explicação:</p>
                <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {!showResult ? (
              <Button onClick={checkAnswer} disabled={!selectedAnswer} className="flex-1">
                Verificar Resposta
              </Button>
            ) : currentIndex < questions.length - 1 ? (
              <Button onClick={nextQuestion} className="flex-1">
                Próxima Questão
              </Button>
            ) : (
              <Button onClick={generateQuestions} className="flex-1 gap-2">
                <RefreshCw className="w-4 h-4" />
                Gerar Novas Questões
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
