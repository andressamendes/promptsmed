import { Stethoscope, Github, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span className="font-semibold gradient-text">PromptLab MED</span>
          </div>

          {/* Credits */}
          <p className="text-sm text-muted-foreground text-center">
            Feito por estudantes, para estudantes{" "}
            <Heart className="w-3.5 h-3.5 inline text-destructive fill-destructive" />
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {currentYear} PromptLab MED
          </p>
        </div>
      </div>
    </footer>
  );
}
