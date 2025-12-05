import { useState } from "react";
import { Brain, Sparkles, Target, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prompts } from "@/data/prompts-data";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  text: string;
  icon: typeof Brain;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Qual seu principal objetivo de estudo?",
    icon: Target,
    options: [
      { value: "prova", label: "Preparação para prova" },
      { value: "retencao", label: "Melhorar retenção" },
      { value: "raciocinio", label: "Desenvolver raciocínio clínico" },
      { value: "produtividade", label: "Aumentar produtividade" },
    ],
  },
  {
    id: 2,
    text: "Quanto tempo você tem disponível?",
    icon: Lightbulb,
    options: [
      { value: "5min", label: "5-10 minutos" },
      { value: "15min", label: "15-30 minutos" },
      { value: "1h", label: "1 hora ou mais" },
    ],
  },
  {
    id: 3,
    text: "Qual seu nível de experiência com prompts?",
    icon: Sparkles,
    options: [
      { value: "iniciante", label: "Iniciante - nunca usei" },
      { value: "intermediario", label: "Intermediário - uso às vezes" },
      { value: "avancado", label: "Avançado - uso frequentemente" },
    ],
  },
];

const recommendations: Record<string, string[]> = {
  "prova-iniciante": ["flashcards-anki", "questoes-usmle", "revisao-espacada"],
  "prova-intermediario": ["questoes-usmle", "casos-progressivos", "error-pattern-analyzer"],
  "prova-avancado": ["interleaving-mixer", "pressure-simulator", "desirable-difficulties"],
  "retencao-iniciante": ["flashcards-anki", "concrete-examples", "priming-pretest"],
  "retencao-intermediario": ["dual-coding-visual", "retrieval-practice", "self-explanation"],
  "retencao-avancado": ["knowledge-integration", "interleaving-mixer", "metacognitive-journal"],
  "raciocinio-iniciante": ["tecnica-feynman", "metodo-socratico", "casos-progressivos"],
  "raciocinio-intermediario": ["casos-progressivos", "metodo-socratico", "error-pattern-analyzer"],
  "raciocinio-avancado": ["knowledge-integration", "pressure-simulator", "metacognitive-journal"],
  "produtividade-iniciante": ["pomodoro-protocol", "habit-stacking", "daily-non-negotiables"],
  "produtividade-intermediario": ["ultradian-architect", "chronotype-optimizer", "anti-procrastination"],
  "produtividade-avancado": ["energy-audit", "context-switching-eliminator", "weekly-review"],
};

export function MentorSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getRecommendedPrompts = () => {
    const objective = answers[0] || "retencao";
    const level = answers[2] || "iniciante";
    const key = `${objective}-${level}`;
    const recommendedIds = recommendations[key] || recommendations["retencao-iniciante"];
    return recommendedIds
      .map((id) => prompts.find((p) => p.id === id))
      .filter(Boolean);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="mentor" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="medical-badge medical-badge-purple mb-4">Mentor IA</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Encontre o Prompt Ideal
            </h2>
            <p className="text-muted-foreground">
              Responda algumas perguntas e receba recomendações personalizadas.
            </p>
          </div>

          <Card className="overflow-hidden">
            {/* Avatar */}
            <div className="flex justify-center pt-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>

            <CardContent className="p-6">
              {!showResults ? (
                <>
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      Pergunta {currentQuestion + 1} de {questions.length}
                    </p>
                  </div>

                  {/* Question */}
                  <div className="animate-fade-in" key={currentQuestion}>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      {(() => {
                        const Icon = questions[currentQuestion].icon;
                        return <Icon className="w-6 h-6 text-primary" />;
                      })()}
                      <h3 className="text-lg font-semibold text-center">
                        {questions[currentQuestion].text}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(option.value)}
                          className={cn(
                            "w-full p-4 text-left rounded-lg border transition-all duration-200",
                            "hover:border-primary hover:bg-primary/5",
                            answers[currentQuestion] === option.value
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Results */
                <div className="animate-fade-in">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <h3 className="text-lg font-semibold">
                      Prompts Recomendados para Você
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    {getRecommendedPrompts().map((prompt) => (
                      <a
                        key={prompt?.id}
                        href={`#${prompt?.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById("prompts");
                          element?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                      >
                        <div>
                          <p className="font-medium">{prompt?.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {prompt?.category}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>

                  <Button onClick={reset} variant="outline" className="w-full">
                    Recomeçar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
