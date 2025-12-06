import { Target, Clock, Check, Settings, Stethoscope } from "lucide-react";
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
  const allComplete = isPromptsComplete && isStudyComplete;

  const getMotivationalMessage = () => {
    if (allComplete) return "Metas concluídas! Orgulho de você, futuro(a) médico(a)!";
    if (isPromptsComplete || isStudyComplete) return "Quase lá! Continue firme!";
    return "Bora conquistar o dia, estudante!";
  };

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
              Meta de prompts por dia
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
              Meta de estudo (minutos)
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
            Salvar Metas
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Prompts Goal */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-muted-foreground">Prompts estudados</span>
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
                Tempo de estudo
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
          <div className={cn(
            "flex items-center gap-2 p-2 rounded-lg text-center",
            allComplete ? "bg-accent/10" : "bg-muted/30"
          )}>
            <Stethoscope className={cn("w-4 h-4", allComplete ? "text-accent" : "text-muted-foreground")} />
            <p className="text-xs text-muted-foreground flex-1">
              {getMotivationalMessage()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
