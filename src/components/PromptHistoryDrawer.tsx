import { useState } from "react";
import { History, Copy, Check, Trash2, Clock, X, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { usePromptHistory, PromptHistoryItem } from "@/hooks/use-prompt-history";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diffMs = now - timestamp;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Agora";
  if (diffMins < 60) return `${diffMins}min atrás`;
  if (diffHours < 24) return `${diffHours}h atrás`;
  if (diffDays < 7) return `${diffDays}d atrás`;
  
  return new Date(timestamp).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

function HistoryItemCard({ 
  item, 
  onCopy, 
  onDelete 
}: { 
  item: PromptHistoryItem; 
  onCopy: (text: string) => void;
  onDelete: (id: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const variableCount = Object.keys(item.variables).length;

  const handleCopy = () => {
    onCopy(item.generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group p-4 rounded-lg border border-border/50 bg-card hover:bg-muted/30 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground truncate">
            {item.promptTitle}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatRelativeTime(item.createdAt)}
            </span>
            <Badge variant="secondary" className="text-[10px] h-4 px-1.5">
              {variableCount} {variableCount === 1 ? "campo" : "campos"}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(item.id)}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Preview of variables used */}
      <div className="flex flex-wrap gap-1 mt-2">
        {Object.entries(item.variables).slice(0, 3).map(([key, value]) => (
          <span 
            key={key}
            className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/15 max-w-[120px] truncate"
            title={`${key}: ${value}`}
          >
            {value}
          </span>
        ))}
        {Object.keys(item.variables).length > 3 && (
          <span className="text-[10px] text-muted-foreground">
            +{Object.keys(item.variables).length - 3}
          </span>
        )}
      </div>

      {/* Preview of generated text */}
      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
        {item.generatedText.slice(0, 150)}...
      </p>
    </div>
  );
}

export function PromptHistoryDrawer() {
  const { history, removeFromHistory, clearHistory, getHistoryCount } = usePromptHistory();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast({
      title: "Prompt copiado",
      description: "Pronto para colar na IA de sua escolha.",
    });
  };

  const handleDelete = (id: string) => {
    removeFromHistory(id);
    toast({
      title: "Removido do histórico",
    });
  };

  const handleClearAll = () => {
    clearHistory();
    toast({
      title: "Histórico limpo",
      description: "Todos os prompts foram removidos.",
    });
  };

  const count = getHistoryCount();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          title="Histórico de prompts"
        >
          <History className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b border-border/40">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 text-base">
              <History className="w-4 h-4" />
              Histórico de Prompts
            </SheetTitle>
            {count > 0 && (
              <Badge variant="secondary" className="text-xs">
                {count} {count === 1 ? "item" : "itens"}
              </Badge>
            )}
          </div>
        </SheetHeader>

        {count === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-1">
              Nenhum prompt gerado
            </h3>
            <p className="text-xs text-muted-foreground max-w-[200px]">
              Os prompts que você gerar aparecerão aqui para acesso rápido.
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-3">
                {history.map(item => (
                  <HistoryItemCard
                    key={item.id}
                    item={item}
                    onCopy={handleCopy}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-border/40">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-muted-foreground hover:text-destructive hover:border-destructive"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-2" />
                    Limpar histórico
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Limpar histórico?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta ação não pode ser desfeita. Todos os {count} prompts salvos serão removidos permanentemente.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleClearAll}
                      className="bg-destructive hover:bg-destructive/90"
                    >
                      Limpar tudo
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
