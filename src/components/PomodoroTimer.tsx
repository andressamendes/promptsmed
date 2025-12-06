import { useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw, Coffee, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TimerMode = "focus" | "break";

const TIMER_PRESETS = {
  focus: 25 * 60,
  break: 5 * 60,
};

export function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [timeLeft, setTimeLeft] = useState(TIMER_PRESETS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = ((TIMER_PRESETS[mode] - timeLeft) / TIMER_PRESETS[mode]) * 100;

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(TIMER_PRESETS[mode]);
  }, [mode]);

  const switchMode = useCallback((newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(TIMER_PRESETS[newMode]);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (mode === "focus") {
        setSessions((prev) => prev + 1);
        switchMode("break");
      } else {
        switchMode("focus");
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, mode, switchMode]);

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Pomodoro</h3>
        <span className="text-xs text-muted-foreground">
          {sessions} sessões
        </span>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-1 mb-4">
        <button
          onClick={() => switchMode("focus")}
          className={cn(
            "flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5",
            mode === "focus"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          <Brain className="w-3 h-3" />
          Foco
        </button>
        <button
          onClick={() => switchMode("break")}
          className={cn(
            "flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5",
            mode === "break"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          <Coffee className="w-3 h-3" />
          Pausa
        </button>
      </div>

      {/* Timer Display */}
      <div className="relative mb-4">
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-1000",
              mode === "focus" ? "bg-primary" : "bg-accent"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-3">
          <span className="text-4xl font-mono font-bold tabular-nums">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={reset}
          className="gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </Button>
        <Button
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className={cn(
            "gap-1.5 min-w-[80px]",
            mode === "break" && "bg-accent hover:bg-accent/90"
          )}
        >
          {isRunning ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              Pausar
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              Iniciar
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
