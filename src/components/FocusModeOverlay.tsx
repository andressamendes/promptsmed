import { X, Focus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFocusMode } from "@/contexts/FocusModeContext";

export function FocusModeOverlay() {
  const { isFocusMode, disableFocusMode } = useFocusMode();

  if (!isFocusMode) return null;

  return (
    <div className="fixed top-4 right-4 z-[100]">
      <Button
        variant="outline"
        size="sm"
        onClick={disableFocusMode}
        className="gap-2 bg-background/80 backdrop-blur-sm border-border shadow-lg"
      >
        <Focus className="w-4 h-4" />
        Sair do Modo Foco
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}
