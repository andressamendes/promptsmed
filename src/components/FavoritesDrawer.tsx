import { Heart, X, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { prompts } from "@/data/prompts-data";
import { PromptCard } from "./PromptCard";

interface FavoritesDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function FavoritesDrawer({ open, onClose }: FavoritesDrawerProps) {
  const { favorites, clearFavorites, count } = useFavorites();

  const favoritePrompts = prompts.filter((p) => favorites.includes(p.id));

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-destructive fill-destructive" />
            Meus Favoritos ({count})
          </SheetTitle>
        </SheetHeader>

        {favoritePrompts.length > 0 ? (
          <>
            <div className="space-y-4">
              {favoritePrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button
                variant="outline"
                className="w-full gap-2 text-destructive hover:text-destructive"
                onClick={clearFavorites}
              >
                <Trash2 className="w-4 h-4" />
                Limpar todos os favoritos
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">
              Nenhum prompt favoritado ainda
            </p>
            <p className="text-sm text-muted-foreground">
              Clique no coração nos cards para salvar seus prompts favoritos.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
