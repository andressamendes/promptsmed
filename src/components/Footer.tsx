import { Stethoscope } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border mt-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">PromptLab MED</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Feito por Andressa Mendes (Acadêmica de Medicina - Afya Guanambi) • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
