import { Focus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFocusMode } from "@/contexts/FocusModeContext";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FocusModeToggle() {
  const { isFocusMode, toggleFocusMode } = useFocusMode();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={isFocusMode ? "default" : "ghost"}
          size="icon"
          onClick={toggleFocusMode}
          className={cn(
            "relative",
            isFocusMode && "bg-primary text-primary-foreground"
          )}
        >
          {isFocusMode ? (
            <X className="w-4 h-4" />
          ) : (
            <Focus className="w-4 h-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isFocusMode ? "Sair do Modo Foco" : "Modo Foco (Ctrl+Shift+F)"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
