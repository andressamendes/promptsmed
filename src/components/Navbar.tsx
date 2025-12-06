import { useState, useEffect } from "react";
import { Moon, Sun, Heart, Menu, X, Stethoscope, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useFavorites } from "@/hooks/use-favorites";
import { FocusModeToggle } from "@/components/FocusModeToggle";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onFavoritesClick: () => void;
}

export function Navbar({ onFavoritesClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { count: favoritesCount } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#prompts", label: "Prompts" },
    { href: "#ferramentas", label: "Ferramentas" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-2 glass border-b border-border"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Stethoscope className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold gradient-text">PromptLab MED</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/guia-ias"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Guia IAs
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <FocusModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={onFavoritesClick}
              className="relative"
            >
              <Heart className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold bg-destructive text-destructive-foreground rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <FocusModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-border animate-fade-in">
          <div className="container py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/guia-ias"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  <Sparkles className="w-4 h-4" />
                  Guia IAs
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    onFavoritesClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  <Heart className="w-4 h-4" />
                  Favoritos ({favoritesCount})
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
