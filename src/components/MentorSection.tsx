import { useState, useMemo } from "react";
import { Brain, Sparkles, Target, Lightbulb, ArrowRight, CheckCircle, RotateCcw, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prompts } from "@/data/prompts-data";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  text: string;
  icon: typeof Brain;
  options: { value: string; label: string; description: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Qual é o seu principal objetivo de estudo?",
    icon: Target,
    options: [
      { value: "prova", label: "Preparação para provas", description: "Foco em questões e revisão rápida" },
      { value: "retencao", label: "Melhorar retenção", description: "Memorização de longo prazo" },
      { value: "raciocinio", label: "Raciocínio clínico", description: "Desenvolver pensamento diagnóstico" },
      { value: "produtividade", label: "Produtividade", description: "Otimizar rotina de estudos" },
    ],
  },
  {
    id: 2,
    text: "Quanto tempo você tem disponível agora?",
    icon: Clock,
    options: [
      { value: "curto", label: "5 a 15 minutos", description: "Sessão rápida e objetiva" },
      { value: "medio", label: "15 a 30 minutos", description: "Sessão moderada" },
      { value: "longo", label: "Mais de 30 minutos", description: "Sessão aprofundada" },
    ],
  },
  {
    id: 3,
    text: "Qual é o seu nível de experiência com IA?",
    icon: Sparkles,
    options: [
      { value: "iniciante", label: "Iniciante", description: "Primeiros passos com prompts" },
      { value: "intermediario", label: "Intermediário", description: "Uso ocasional de IA" },
      { value: "avancado", label: "Avançado", description: "Uso frequente e estratégico" },
    ],
  },
];

// Sistema de pontuação inteligente para recomendações
const promptScoring: Record<string, { objective: string[]; time: string[]; level: string[] }> = {
  // Aprendizado Profundo
  "flashcards-anki": { objective: ["prova", "retencao"], time: ["curto", "medio"], level: ["iniciante", "intermediario"] },
  "dual-coding-visual": { objective: ["retencao"], time: ["medio", "longo"], level: ["intermediario", "avancado"] },
  "self-explanation": { objective: ["retencao", "raciocinio"], time: ["medio", "longo"], level: ["intermediario", "avancado"] },
  "concrete-examples": { objective: ["retencao"], time: ["curto", "medio"], level: ["iniciante", "intermediario"] },
  "knowledge-integration": { objective: ["raciocinio"], time: ["longo"], level: ["avancado"] },
  
  // Raciocínio Clínico
  "questoes-usmle": { objective: ["prova"], time: ["medio", "longo"], level: ["intermediario", "avancado"] },
  "casos-progressivos": { objective: ["raciocinio"], time: ["longo"], level: ["intermediario", "avancado"] },
  "metodo-socratico": { objective: ["raciocinio", "retencao"], time: ["medio", "longo"], level: ["intermediario"] },
  "tecnica-feynman": { objective: ["retencao", "raciocinio"], time: ["medio"], level: ["iniciante", "intermediario"] },
  
  // Retenção e Memória
  "revisao-espacada": { objective: ["prova", "retencao"], time: ["curto"], level: ["iniciante"] },
  "retrieval-practice": { objective: ["prova", "retencao"], time: ["curto", "medio"], level: ["iniciante", "intermediario"] },
  "priming-pretest": { objective: ["retencao"], time: ["curto"], level: ["iniciante"] },
  
  // Análise e Correção
  "error-pattern-analyzer": { objective: ["prova"], time: ["medio"], level: ["intermediario", "avancado"] },
  "metacognitive-journal": { objective: ["retencao", "produtividade"], time: ["medio"], level: ["avancado"] },
  
  // Desafio Cognitivo
  "interleaving-mixer": { objective: ["prova", "retencao"], time: ["medio", "longo"], level: ["intermediario", "avancado"] },
  "desirable-difficulties": { objective: ["retencao"], time: ["longo"], level: ["avancado"] },
  "pressure-simulator": { objective: ["prova"], time: ["medio", "longo"], level: ["avancado"] },
  
  // Rotina de Alta Performance
  "chronotype-optimizer": { objective: ["produtividade"], time: ["medio"], level: ["intermediario"] },
  "ultradian-architect": { objective: ["produtividade"], time: ["longo"], level: ["avancado"] },
  "energy-audit": { objective: ["produtividade"], time: ["medio"], level: ["intermediario", "avancado"] },
  
  // Hábitos e Consistência
  "pomodoro-protocol": { objective: ["produtividade"], time: ["curto"], level: ["iniciante"] },
  "habit-stacking": { objective: ["produtividade"], time: ["curto", "medio"], level: ["iniciante", "intermediario"] },
  "daily-non-negotiables": { objective: ["produtividade"], time: ["curto"], level: ["iniciante"] },
  "anti-procrastination": { objective: ["produtividade"], time: ["medio"], level: ["intermediario"] },
  
  // Otimização e Tracking
  "weekly-review": { objective: ["produtividade"], time: ["longo"], level: ["intermediario", "avancado"] },
  "context-switching-eliminator": { objective: ["produtividade"], time: ["curto", "medio"], level: ["intermediario"] },
};

export function MentorSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 250);
    } else {
      setTimeout(() => setShowResults(true), 250);
    }
  };

  const getRecommendedPrompts = useMemo(() => {
    const objective = answers[0];
    const time = answers[1];
    const level = answers[2];

    if (!objective || !time || !level) return [];

    // Calcular pontuação para cada prompt
    const scored = Object.entries(promptScoring).map(([id, criteria]) => {
      let score = 0;
      
      // Pontuação por objetivo (peso maior)
      if (criteria.objective.includes(objective)) score += 3;
      
      // Pontuação por tempo disponível
      if (criteria.time.includes(time)) score += 2;
      
      // Pontuação por nível
      if (criteria.level.includes(level)) score += 1;

      return { id, score };
    });

    // Ordenar por pontuação e pegar os 4 melhores
    const topIds = scored
      .filter(s => s.score >= 4) // Mínimo de compatibilidade
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(s => s.id);

    return topIds
      .map(id => prompts.find(p => p.id === id))
      .filter(Boolean);
  }, [answers]);

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
          <div className="text-center mb-8">
            <span className="medical-badge medical-badge-purple mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Mentor Inteligente
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Encontre o Prompt Ideal
            </h2>
            <p className="text-muted-foreground">
              Responda 3 perguntas e receba recomendações personalizadas para seu momento de estudo.
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-primary/10">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 pb-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {!showResults ? (
                <>
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="animate-fade-in" key={currentQuestion}>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      {(() => {
                        const Icon = questions[currentQuestion].icon;
                        return <Icon className="w-5 h-5 text-primary" />;
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
                            "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
                            "hover:border-primary hover:bg-primary/5 hover:shadow-sm",
                            answers[currentQuestion] === option.value
                              ? "border-primary bg-primary/10"
                              : "border-border"
                          )}
                        >
                          <div className="font-medium">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Results */
                <div className="animate-fade-in">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold">
                      Prompts Recomendados
                    </h3>
                  </div>

                  {getRecommendedPrompts.length > 0 ? (
                    <div className="space-y-3 mb-6">
                      {getRecommendedPrompts.map((prompt, index) => (
                        <a
                          key={prompt?.id}
                          href={`#${prompt?.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById("prompts");
                            element?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-lg border-2 transition-all group",
                            "hover:border-primary hover:bg-primary/5",
                            index === 0 ? "border-primary/30 bg-primary/5" : "border-border"
                          )}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              {index === 0 && (
                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                  Melhor opção
                                </span>
                              )}
                            </div>
                            <p className="font-medium mt-1">{prompt?.title}</p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {prompt?.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground mb-6">
                      Nenhum prompt encontrado para essa combinação.
                    </p>
                  )}

                  <Button onClick={reset} variant="outline" className="w-full gap-2">
                    <RotateCcw className="w-4 h-4" />
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
