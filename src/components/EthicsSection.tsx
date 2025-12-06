import { Shield, AlertTriangle, BookOpen, Lock, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const guidelines = [
  {
    icon: Brain,
    title: "IA é ferramenta, não muleta",
    text: "Use para acelerar, não para substituir seu raciocínio. O aprendizado real acontece na sua cabeça.",
  },
  {
    icon: BookOpen,
    title: "Sempre confira as fontes",
    text: "IA erra. Antes de confiar, valide com livros-texto, artigos e fontes que você conhece.",
  },
  {
    icon: Lock,
    title: "Nada de dados de pacientes",
    text: "Nunca cole informações reais de pacientes em nenhuma IA. Privacidade não é opcional.",
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
                    Use com Responsabilidade
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Algumas coisas importantes antes de usar
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
                    Importante
                  </p>
                  <p className="text-sm text-muted-foreground">
                    IA pode gerar informações erradas ou desatualizadas. 
                    Sempre confira com a literatura e respeite as regras da sua faculdade sobre uso de IA.
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
