import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Brain, FileText, Stethoscope } from "lucide-react";

const mentorOptions = [
  {
    id: "revisao",
    icon: BookOpen,
    label: "Revisão",
    description: "Revisar conteúdos para provas",
  },
  {
    id: "resumos",
    icon: FileText,
    label: "Resumos",
    description: "Criar resumos e fichamentos",
  },
  {
    id: "casos",
    icon: Stethoscope,
    label: "Casos Clínicos",
    description: "Estudar casos clínicos",
  },
  {
    id: "memorizar",
    icon: Brain,
    label: "Memorização",
    description: "Técnicas de memorização",
  },
];

export function MentorSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const getRecommendation = (id: string) => {
    const recommendations: Record<string, string[]> = {
      revisao: ["Flashcards Inteligentes", "Perguntas de Revisão", "Mapas Mentais"],
      resumos: ["Resumo Estruturado", "Fichamento Acadêmico", "Síntese de Artigos"],
      casos: ["Análise de Caso Clínico", "Diagnóstico Diferencial", "Conduta Terapêutica"],
      memorizar: ["Mnemônicos", "Associações Visuais", "Repetição Espaçada"],
    };
    return recommendations[id] || [];
  };

  return (
    <section id="mentor" className="py-12">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Mentor</h2>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">
              O que você precisa agora?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {mentorOptions.map((option) => (
                <Button
                  key={option.id}
                  variant={selected === option.id ? "default" : "outline"}
                  className="h-auto py-3 flex flex-col gap-1"
                  onClick={() => setSelected(option.id)}
                >
                  <option.icon className="w-4 h-4" />
                  <span className="text-sm">{option.label}</span>
                </Button>
              ))}
            </div>

            {selected && (
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  Prompts sugeridos:
                </p>
                <div className="flex flex-wrap gap-2">
                  {getRecommendation(selected).map((prompt) => (
                    <span
                      key={prompt}
                      className="text-xs px-3 py-1.5 bg-secondary rounded-full"
                    >
                      {prompt}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
