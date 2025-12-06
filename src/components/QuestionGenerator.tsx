import { useState } from "react";
import { HelpCircle, Loader2, CheckCircle, XCircle, RefreshCw, Sparkles } from "lucide-react";
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

const loadingMessages = [
  "Analisando o conteúdo...",
  "Identificando conceitos-chave...",
  "Criando questões...",
  "Elaborando alternativas...",
  "Finalizando quiz...",
];

export function QuestionGenerator({ promptTitle, promptContent }: QuestionGeneratorProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const generateQuestions = async () => {
    setIsLoading(true);
    setError(null);
    setQuestions([]);
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setLoadingMessage(0);

    // Rotate loading messages
    const interval = setInterval(() => {
      setLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

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
      clearInterval(interval);
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
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <Sparkles className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm font-medium">{loadingMessages[loadingMessage]}</p>
            <p className="text-xs text-muted-foreground">Isso pode levar alguns segundos...</p>
          </div>
          <div className="flex gap-1">
            {loadingMessages.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i <= loadingMessage ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      ) : questions.length === 0 ? (
        <>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Quiz Interativo</p>
              <p className="text-xs text-muted-foreground mt-1">
                Gere questões de múltipla escolha baseadas no conteúdo deste prompt para testar e reforçar seu conhecimento.
              </p>
            </div>
          </div>
          <Button
            onClick={generateQuestions}
            disabled={isLoading}
            className="w-full gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Gerar Questões
          </Button>
          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
              {error}
            </div>
          )}
        </>
      ) : (
        <div className="animate-fade-in">
          {/* Progress */}
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-muted-foreground">
              Questão {currentIndex + 1} de {questions.length}
            </span>
            <span className="font-medium text-primary">
              {score.correct}/{score.total} corretas
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-muted rounded-full mb-4 overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
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
                    "flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200",
                    showResult && i === currentQuestion.correct && "bg-emerald-500/10 border-emerald-500/50 scale-[1.02]",
                    showResult && selectedAnswer === i.toString() && i !== currentQuestion.correct && "bg-rose-500/10 border-rose-500/50",
                    !showResult && selectedAnswer === i.toString() && "border-primary bg-primary/5",
                    !showResult && "hover:bg-muted/50 cursor-pointer"
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
              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/30 animate-fade-in">
                <p className="text-sm font-medium text-primary mb-1">Explicação:</p>
                <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-4">
            {!showResult ? (
              <Button onClick={checkAnswer} disabled={!selectedAnswer} className="flex-1">
                Verificar Resposta
              </Button>
            ) : currentIndex < questions.length - 1 ? (
              <Button onClick={nextQuestion} className="flex-1">
                Próxima Questão
              </Button>
            ) : (
              <div className="flex-1 space-y-3">
                {/* Final Score */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
                  <p className="text-lg font-bold">Quiz Concluído!</p>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {score.correct}/{score.total}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {score.correct === score.total ? "Perfeito! Excelente domínio!" : 
                     score.correct >= score.total * 0.7 ? "Ótimo trabalho!" : 
                     "Continue praticando!"}
                  </p>
                </div>
                <Button onClick={generateQuestions} className="w-full gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Gerar Novas Questões
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
