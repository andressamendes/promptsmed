import { Sparkles, Target, Stethoscope } from "lucide-react";
import { prompts, sections } from "@/data/prompts-data";

export function Hero() {
  const stats = [
    { value: prompts.length, label: "Prompts", icon: Sparkles },
    { value: sections.length, label: "Categorias", icon: Target },
  ];

  return (
    <section id="hero" className="pt-24 pb-8">
      <div className="container">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Stethoscope className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium">Para futuros médicos</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Prompts Inteligentes para sua Jornada na Medicina
          </h1>
          <p className="text-muted-foreground mb-6">
            Prompts prontos com técnicas de aprendizado baseadas em evidências.
            Acelere seus estudos e domine o conteúdo médico.
          </p>

          <div className="flex items-center gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="w-4 h-4 text-primary" />
                <span className="font-semibold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
