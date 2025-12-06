import { Shield, AlertTriangle, BookOpen, Lock, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const guidelines = [
  {
    icon: Brain,
    title: "Ferramenta complementar",
    text: "A IA auxilia o aprendizado, mas não substitui o estudo ativo e o raciocínio clínico próprio.",
  },
  {
    icon: BookOpen,
    title: "Validação obrigatória",
    text: "Sempre verifique informações com fontes científicas confiáveis antes de aplicar.",
  },
  {
    icon: Lock,
    title: "Privacidade de dados",
    text: "Nunca insira dados reais de pacientes em ferramentas de IA.",
  },
];

export function EthicsSection() {
  return (
    <section id="etica" className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    Uso Responsável de IA na Medicina
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Diretrizes éticas para estudantes
                  </p>
                </div>
              </div>

              {/* Guidelines Grid */}
              <div className="grid gap-4 mb-6">
                {guidelines.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                  >
                    <div className="p-1.5 rounded-lg bg-muted">
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning Box */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-medical-amber/10 border border-medical-amber/30">
                <AlertTriangle className="w-5 h-5 text-medical-amber flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-foreground mb-1">
                    Atenção
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A IA pode gerar informações incorretas ou desatualizadas. 
                    Sempre confirme com literatura primária e respeite as políticas 
                    acadêmicas da sua instituição.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
