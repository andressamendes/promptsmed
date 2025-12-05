import { Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function EthicsSection() {
  return (
    <section id="etica" className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">
                  Ética e Uso Responsável de IA na Medicina
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A inteligência artificial é uma ferramenta complementar ao
                aprendizado em medicina, não um substituto. Use IA para clarificar
                conceitos, estruturar raciocínio clínico e otimizar estudos, mas
                sempre valide informações com fontes científicas confiáveis.
                Desenvolva pensamento crítico próprio antes de consultar IA. Nunca
                compartilhe dados de pacientes reais. Docentes e instituições podem
                ter políticas específicas sobre uso de IA - consulte e respeite
                diretrizes acadêmicas. A responsabilidade final pelo aprendizado e
                decisões clínicas é sempre sua.
              </p>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-medical-amber/10 border border-medical-amber/20">
                <AlertTriangle className="w-5 h-5 text-medical-amber flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Lembre-se:</strong> A IA pode
                  apresentar informações incorretas. Sempre verifique com fontes
                  primárias antes de usar em contextos acadêmicos ou clínicos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
