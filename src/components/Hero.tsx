import { Sparkles, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Prompts para Medicina
          </h1>
          <p className="text-muted-foreground mb-6">
            Prompts prontos com técnicas de aprendizado que funcionam. 
            Escolha, copie e use na IA que preferir.
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
