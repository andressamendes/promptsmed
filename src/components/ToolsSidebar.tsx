import { PomodoroTimer } from "./PomodoroTimer";
import { TaskList } from "./TaskList";

export function ToolsSidebar() {
  return (
    <aside className="hidden xl:block w-80 flex-shrink-0 sticky top-20 h-fit space-y-4">
      <PomodoroTimer />
      <TaskList />
    </aside>
  );
}
