import { useState, useEffect } from "react";
import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const STORAGE_KEY = "promptlab-tasks";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Tarefas</h3>
        <span className="text-xs text-muted-foreground">
          {completedCount}/{tasks.length}
        </span>
      </div>

      {/* Add Task */}
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="h-8 text-sm"
        />
        <Button size="sm" onClick={addTask} className="h-8 px-2">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Task List */}
      <div className="space-y-2 max-h-[200px] overflow-y-auto scrollbar-thin">
        {tasks.length === 0 ? (
          <p className="text-xs text-muted-foreground text-center py-4">
            Nenhuma tarefa ainda
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "flex items-center gap-2 p-2 rounded-md border border-border/50 group transition-colors",
                task.completed && "bg-muted/30"
              )}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className="flex-shrink-0"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                ) : (
                  <Circle className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <span
                className={cn(
                  "flex-1 text-sm truncate",
                  task.completed && "line-through text-muted-foreground"
                )}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-3.5 h-3.5 text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Clear Completed */}
      {completedCount > 0 && (
        <button
          onClick={() => setTasks((prev) => prev.filter((t) => !t.completed))}
          className="text-xs text-muted-foreground hover:text-foreground mt-3 w-full text-center"
        >
          Limpar concluídas
        </button>
      )}
    </div>
  );
}
