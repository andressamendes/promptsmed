import { Target, Clock, Check, Settings } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDailyGoals } from "@/hooks/use-daily-goals";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function DailyGoals() {
  const {
    goals,
    promptsProgress,
    studyProgress,
    setPromptsTarget,
    setStudyMinutesTarget,
  } = useDailyGoals();

  const [showSettings, setShowSettings] = useState(false);

  const isPromptsComplete = goals.promptsCompleted >= goals.promptsTarget;
  const isStudyComplete = goals.studyMinutesCompleted >= goals.studyMinutesTarget;

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <Target className="w-4 h-4 text-primary" />
          Metas do Dia
        </h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={() => setShowSettings(!showSettings)}
        >
          <Settings className="w-3.5 h-3.5" />
        </Button>
      </div>

      {showSettings ? (
        <div className="space-y-3">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">
              Meta de prompts
            </label>
            <Input
              type="number"
              min={1}
              max={50}
              value={goals.promptsTarget}
              onChange={(e) => setPromptsTarget(Number(e.target.value))}
              className="h-8 text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">
              Meta de estudo (min)
            </label>
            <Input
              type="number"
              min={5}
              max={480}
              step={5}
              value={goals.studyMinutesTarget}
              onChange={(e) => setStudyMinutesTarget(Number(e.target.value))}
              className="h-8 text-sm"
            />
          </div>
          <Button
            size="sm"
            className="w-full h-8 text-xs"
            onClick={() => setShowSettings(false)}
          >
            Salvar
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Prompts Goal */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-muted-foreground">Prompts</span>
              <span
                className={cn(
                  "text-xs font-medium",
                  isPromptsComplete ? "text-accent" : "text-foreground"
                )}
              >
                {isPromptsComplete && <Check className="w-3 h-3 inline mr-1" />}
                {goals.promptsCompleted}/{goals.promptsTarget}
              </span>
            </div>
            <Progress
              value={promptsProgress}
              className={cn("h-2", isPromptsComplete && "[&>div]:bg-accent")}
            />
          </div>

          {/* Study Time Goal */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Estudo
              </span>
              <span
                className={cn(
                  "text-xs font-medium",
                  isStudyComplete ? "text-accent" : "text-foreground"
                )}
              >
                {isStudyComplete && <Check className="w-3 h-3 inline mr-1" />}
                {goals.studyMinutesCompleted}/{goals.studyMinutesTarget}min
              </span>
            </div>
            <Progress
              value={studyProgress}
              className={cn("h-2", isStudyComplete && "[&>div]:bg-accent")}
            />
          </div>

          {/* Status Message */}
          <p className="text-xs text-muted-foreground text-center">
            {isPromptsComplete && isStudyComplete
              ? "Parabéns! Metas concluídas!"
              : "Continue assim!"}
          </p>
        </div>
      )}
    </div>
  );
}
