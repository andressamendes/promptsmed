import { useState, useEffect } from "react";
import { Calendar, Plus, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface StudyBlock {
  id: string;
  dayOfWeek: number;
  startHour: number;
  duration: number;
  subject: string;
  color: string;
}

const STORAGE_KEY = "promptlab-schedule";

const DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const HOURS = Array.from({ length: 16 }, (_, i) => i + 6);

const COLORS = [
  "bg-primary/30 border-primary/50",
  "bg-accent/30 border-accent/50",
  "bg-medical-purple/30 border-medical-purple/50",
  "bg-medical-amber/30 border-medical-amber/50",
  "bg-emerald-500/30 border-emerald-500/50",
];

export function StudySchedule() {
  const [blocks, setBlocks] = useState<StudyBlock[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [showAdd, setShowAdd] = useState(false);
  const [newBlock, setNewBlock] = useState({
    dayOfWeek: 1,
    startHour: 8,
    duration: 60,
    subject: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
  }, [blocks]);

  const addBlock = () => {
    if (!newBlock.subject.trim()) return;
    const block: StudyBlock = {
      id: Date.now().toString(),
      ...newBlock,
      color: COLORS[blocks.length % COLORS.length],
    };
    setBlocks((prev) => [...prev, block]);
    setNewBlock({ dayOfWeek: 1, startHour: 8, duration: 60, subject: "" });
    setShowAdd(false);
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const getBlocksForDay = (day: number) =>
    blocks.filter((b) => b.dayOfWeek === day);

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          Cronograma Semanal
        </h3>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs gap-1"
          onClick={() => setShowAdd(!showAdd)}
        >
          <Plus className="w-3 h-3" />
          Adicionar
        </Button>
      </div>

      {/* Add Form */}
      {showAdd && (
        <div className="mb-4 p-3 bg-muted/30 rounded-lg space-y-3">
          <Input
            placeholder="Matéria/Tema"
            value={newBlock.subject}
            onChange={(e) =>
              setNewBlock((prev) => ({ ...prev, subject: e.target.value }))
            }
            className="h-8 text-sm"
          />
          <div className="grid grid-cols-3 gap-2">
            <Select
              value={newBlock.dayOfWeek.toString()}
              onValueChange={(v) =>
                setNewBlock((prev) => ({ ...prev, dayOfWeek: Number(v) }))
              }
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DAYS.map((day, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={newBlock.startHour.toString()}
              onValueChange={(v) =>
                setNewBlock((prev) => ({ ...prev, startHour: Number(v) }))
              }
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {HOURS.map((h) => (
                  <SelectItem key={h} value={h.toString()}>
                    {h}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={newBlock.duration.toString()}
              onValueChange={(v) =>
                setNewBlock((prev) => ({ ...prev, duration: Number(v) }))
              }
            >
              <SelectTrigger className="h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30min</SelectItem>
                <SelectItem value="60">1h</SelectItem>
                <SelectItem value="90">1h30</SelectItem>
                <SelectItem value="120">2h</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="sm" className="w-full h-8 text-xs" onClick={addBlock}>
            Adicionar Bloco
          </Button>
        </div>
      )}

      {/* Week View */}
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((day, i) => (
          <div key={i} className="text-center">
            <span className="text-[10px] font-medium text-muted-foreground uppercase">
              {day}
            </span>
            <div className="mt-1 min-h-[60px] space-y-1">
              {getBlocksForDay(i).map((block) => (
                <div
                  key={block.id}
                  className={cn(
                    "p-1.5 rounded border text-[10px] leading-tight relative group",
                    block.color
                  )}
                >
                  <button
                    onClick={() => removeBlock(block.id)}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <X className="w-2 h-2" />
                  </button>
                  <p className="font-medium truncate">{block.subject}</p>
                  <p className="text-muted-foreground flex items-center gap-0.5">
                    <Clock className="w-2 h-2" />
                    {block.startHour}h
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {blocks.length === 0 && (
        <p className="text-xs text-muted-foreground text-center mt-2">
          Adicione blocos de estudo ao seu cronograma
        </p>
      )}
    </div>
  );
}
