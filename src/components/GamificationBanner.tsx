import { useState } from "react";
import { Flame, Trophy, X, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGamification } from "@/hooks/use-gamification";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function GamificationBanner() {
  const { streak, badges, allBadges, newBadge, dismissBadgeNotification } =
    useGamification();
  const [showBadges, setShowBadges] = useState(false);

  const getStreakMessage = () => {
    if (streak === 0) return "Comece sua sequência de estudos!";
    if (streak === 1) return "Primeiro dia, futuro(a) médico(a)!";
    if (streak < 7) return "Continue firme nos estudos!";
    if (streak < 30) return "Excelente dedicação, futuro(a) médico(a)!";
    return "Você é um exemplo de disciplina!";
  };

  return (
    <>
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" />
            Seu Progresso
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs gap-1"
            onClick={() => setShowBadges(!showBadges)}
          >
            Ver conquistas
            {showBadges ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </Button>
        </div>

        {/* Streak Display */}
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
          <div className="p-2 rounded-full bg-orange-500/20">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-foreground">{streak}</p>
            <p className="text-xs text-muted-foreground">
              {streak === 1 ? "dia de estudo" : "dias consecutivos"}
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-2">
          {getStreakMessage()}
        </p>

        {/* Badges Grid */}
        {showBadges && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {allBadges.map((badge) => {
              const isUnlocked = badges.find((b) => b.id === badge.id);
              return (
                <div
                  key={badge.id}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg border text-center transition-all",
                    isUnlocked
                      ? "bg-primary/10 border-primary/30"
                      : "bg-muted/30 border-border opacity-50"
                  )}
                >
                  <span className="text-xl mb-1">{badge.icon}</span>
                  <span className="text-[10px] font-medium leading-tight">
                    {badge.name}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats */}
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>
            {badges.length}/{allBadges.length} conquistas
          </span>
        </div>
      </div>

      {/* New Badge Modal */}
      <Dialog open={!!newBadge} onOpenChange={dismissBadgeNotification}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Nova Conquista Desbloqueada!
            </DialogTitle>
          </DialogHeader>
          {newBadge && (
            <div className="flex flex-col items-center py-6">
              <div className="text-6xl mb-4 animate-bounce">{newBadge.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {newBadge.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {newBadge.description}
              </p>
              <p className="text-xs text-primary mt-3">
                Continue assim, futuro(a) médico(a)!
              </p>
              <Button className="mt-6" onClick={dismissBadgeNotification}>
                Continuar Estudando
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
