import { useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw, X, Copy, Check, ExternalLink, Clock, Brain, Coffee, Maximize2, Minimize2, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Prompt } from "@/data/prompts-data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface StudyModeProps {
  prompt: Prompt;
  open: boolean;
  onClose: () => void;
}

type TimerMode = "focus" | "break";

const FOCUS_OPTIONS = [15, 25, 45, 60];
const BREAK_OPTIONS = [5, 10, 15];

const getStoredDuration = (key: string, defaultValue: number): number => {
  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored, 10) : defaultValue;
};

const aiLinks = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/",
  gemini: "https://gemini.google.com/",
  notebooklm: "https://notebooklm.google.com/",
  perplexity: "https://www.perplexity.ai/",
};

const aiNames = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
  notebooklm: "NotebookLM",
  perplexity: "Perplexity",
};

export function StudyMode({ prompt, open, onClose }: StudyModeProps) {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [focusDuration, setFocusDuration] = useState(() => getStoredDuration("studyMode_focusDuration", 25));
  const [breakDuration, setBreakDuration] = useState(() => getStoredDuration("studyMode_breakDuration", 5));
  const [timeLeft, setTimeLeft] = useState(focusDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { toast } = useToast();

  const getCurrentDuration = useCallback((timerMode: TimerMode) => {
    return timerMode === "focus" ? focusDuration * 60 : breakDuration * 60;
  }, [focusDuration, breakDuration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const totalTime = getCurrentDuration(mode);
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(getCurrentDuration(mode));
  }, [mode, getCurrentDuration]);

  const switchMode = useCallback((newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(getCurrentDuration(newMode));
    setIsRunning(false);
  }, [getCurrentDuration]);

  const handleFocusDurationChange = (value: string) => {
    const duration = parseInt(value, 10);
    setFocusDuration(duration);
    localStorage.setItem("studyMode_focusDuration", value);
    if (mode === "focus") {
      setTimeLeft(duration * 60);
      setIsRunning(false);
    }
  };

  const handleBreakDurationChange = (value: string) => {
    const duration = parseInt(value, 10);
    setBreakDuration(duration);
    localStorage.setItem("studyMode_breakDuration", value);
    if (mode === "break") {
      setTimeLeft(duration * 60);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (mode === "focus") {
        setSessions((prev) => prev + 1);
        toast({ 
          title: "Sessão completa!", 
          description: `Você completou ${sessions + 1} sessões. Hora de uma pausa!` 
        });
        switchMode("break");
      } else {
        toast({ 
          title: "Pausa terminada!", 
          description: "Pronto para mais uma sessão de foco?" 
        });
        switchMode("focus");
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, mode, switchMode, sessions, toast]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    toast({ title: "Prompt copiado!", description: "Cole na ferramenta de sua escolha." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenAI = async (ai: keyof typeof aiLinks) => {
    await navigator.clipboard.writeText(prompt.prompt);
    toast({ title: "Prompt copiado!", description: `Abrindo ${aiNames[ai]}...` });
    window.open(aiLinks[ai], "_blank");
  };

  const handleClose = () => {
    if (isRunning) {
      const confirm = window.confirm("O timer está rodando. Deseja realmente sair?");
      if (!confirm) return;
    }
    setIsRunning(false);
    onClose();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background">
      {/* Header */}
      <div className="h-16 border-b border-border bg-card/50 backdrop-blur flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-3 h-3 rounded-full animate-pulse",
              isRunning ? (mode === "focus" ? "bg-primary" : "bg-accent") : "bg-muted"
            )} />
            <span className="text-sm font-medium">Modo de Estudo</span>
          </div>
          <Badge variant="outline" className="hidden sm:flex">{prompt.category}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="hidden md:flex"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn(
        "h-[calc(100vh-4rem)] flex flex-col lg:flex-row",
        isFullscreen && "lg:flex-col"
      )}>
        {/* Timer Panel */}
        <div className={cn(
          "flex-shrink-0 p-6 border-b lg:border-b-0 lg:border-r border-border bg-card/30",
          isFullscreen ? "lg:border-b lg:border-r-0" : "lg:w-80"
        )}>
          <div className={cn(
            "flex flex-col items-center",
            isFullscreen && "lg:flex-row lg:justify-center lg:gap-12"
          )}>
            {/* Timer Display */}
            <div className={cn("text-center", isFullscreen && "lg:order-2")}>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted/30"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className={cn(
                      "transition-all duration-1000",
                      mode === "focus" ? "text-primary" : "text-accent"
                    )}
                    strokeDasharray={553}
                    strokeDashoffset={553 - (553 * progress) / 100}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-mono font-bold tabular-nums">
                    {formatTime(timeLeft)}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">
                    {mode === "focus" ? "Foco" : "Pausa"}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className={cn(
              "mt-6 space-y-4",
              isFullscreen && "lg:mt-0 lg:order-1"
            )}>
              {/* Mode Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => switchMode("focus")}
                  className={cn(
                    "flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2",
                    mode === "focus"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Brain className="w-4 h-4" />
                  Foco
                </button>
                <button
                  onClick={() => switchMode("break")}
                  className={cn(
                    "flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2",
                    mode === "break"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Coffee className="w-4 h-4" />
                  Pausa
                </button>
              </div>

              {/* Timer Controls */}
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="lg" onClick={reset}>
                  <RotateCcw className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => setIsRunning(!isRunning)}
                  className={cn(
                    "min-w-[120px] gap-2",
                    mode === "break" && "bg-accent hover:bg-accent/90"
                  )}
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Iniciar
                    </>
                  )}
                </Button>
              </div>

              {/* Duration Settings */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-border">
                <Settings2 className="w-4 h-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Foco:</span>
                  <Select
                    value={focusDuration.toString()}
                    onValueChange={handleFocusDurationChange}
                    disabled={isRunning}
                  >
                    <SelectTrigger className="w-[70px] h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {FOCUS_OPTIONS.map((mins) => (
                        <SelectItem key={mins} value={mins.toString()}>
                          {mins} min
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Pausa:</span>
                  <Select
                    value={breakDuration.toString()}
                    onValueChange={handleBreakDurationChange}
                    disabled={isRunning}
                  >
                    <SelectTrigger className="w-[70px] h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BREAK_OPTIONS.map((mins) => (
                        <SelectItem key={mins} value={mins.toString()}>
                          {mins} min
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Sessions Counter */}
              <div className="text-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 inline mr-1" />
                {sessions} {sessions === 1 ? "sessão" : "sessões"} completas
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Panel */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{prompt.title}</h1>
              <p className="text-muted-foreground">{prompt.description}</p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado!" : "Copiar Prompt"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleOpenAI(prompt.aiRecommended)}
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir no {aiNames[prompt.aiRecommended]}
              </Button>
            </div>

            {/* Prompt Content */}
            <div className="relative rounded-xl bg-card border border-border overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                <span className="text-sm font-medium">Prompt</span>
                <Badge variant="secondary" className="text-xs">
                  {prompt.estimatedTime}
                </Badge>
              </div>
              <div className="p-4 md:p-6">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans text-foreground/90">
                  {prompt.prompt}
                </pre>
              </div>
            </div>

            {/* Tips */}
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                Dica de Estudo
              </h3>
              <p className="text-sm text-muted-foreground">
                Use os {focusDuration} minutos de foco para trabalhar com este prompt. 
                Copie-o para sua IA preferida e interaja ativamente. 
                Na pausa de {breakDuration} minutos, revise mentalmente o que aprendeu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}