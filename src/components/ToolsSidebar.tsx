import { PomodoroTimer } from "./PomodoroTimer";
import { TaskList } from "./TaskList";
import { DailyGoals } from "./DailyGoals";
import { GamificationBanner } from "./GamificationBanner";
import { StudySchedule } from "./StudySchedule";
import { useFocusMode } from "@/contexts/FocusModeContext";
import { cn } from "@/lib/utils";

export function ToolsSidebar() {
  const { isFocusMode } = useFocusMode();

  return (
    <aside className={cn(
      "hidden xl:block w-80 flex-shrink-0 sticky top-20 h-fit space-y-4",
      isFocusMode && "xl:hidden"
    )}>
      <DailyGoals />
      <GamificationBanner />
      <PomodoroTimer />
      <TaskList />
      <StudySchedule />
    </aside>
  );
}
