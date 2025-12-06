import { Brain, Sparkles, Target, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prompts, sections } from "@/data/prompts-data";

export function Hero() {
  const stats = [
    { value: prompts.length, label: "Prompts", icon: Sparkles },
    { value: sections.length, label: "Categorias", icon: Target },
    { value: "100%", label: "Gratuito", icon: BookOpen },
  ];

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center pt-20 pb-16 bg-pattern"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Baseado em Ciência Cognitiva
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up text-balance">
            Prompts Inteligentes para{" "}
            <span className="gradient-text">Estudantes de Medicina</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed">
            Biblioteca de prompts otimizados com técnicas de aprendizado 
            baseadas em evidências para maximizar sua retenção e desempenho acadêmico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in">
            <Button
              size="lg"
              className="gap-2 glow-primary"
              onClick={() =>
                document
                  .getElementById("prompts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Sparkles className="w-4 h-4" />
              Explorar Prompts
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() =>
                document
                  .getElementById("mentor")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Brain className="w-4 h-4" />
              Recomendação Personalizada
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 animate-fade-in">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-3xl md:text-4xl font-bold font-mono text-primary">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
