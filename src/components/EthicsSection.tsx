import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const guidelines = [
  "Não substitua avaliação clínica por respostas de IA.",
  "Nunca insira dados reais de pacientes em prompts.",
  "Verifique informações em fontes confiáveis.",
  "Use IA como ferramenta de estudo, não como diagnóstico.",
];

export function EthicsSection() {
  return (
    <section id="etica" className="py-12">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-semibold">Uso Ético</h2>
        </div>

        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">{guideline}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
