import { Search, X, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sections } from "@/data/prompts-data";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  selectedSection: number | null;
  onSectionChange: (value: number | null) => void;
  selectedEvidence: string | null;
  onEvidenceChange: (value: string | null) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
  resultCount: number;
  totalCount: number;
}

export function SearchBar({
  query,
  onQueryChange,
  selectedSection,
  onSectionChange,
  selectedEvidence,
  onEvidenceChange,
  onClear,
  hasActiveFilters,
  resultCount,
  totalCount,
}: SearchBarProps) {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar prompts por título, tag ou categoria..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-12 pr-12 h-12 text-base"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          Filtros:
        </div>

        {/* Section Filter */}
        <Select
          value={selectedSection?.toString() || "all"}
          onValueChange={(value) =>
            onSectionChange(value === "all" ? null : parseInt(value))
          }
        >
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue placeholder="Todas as seções" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as seções</SelectItem>
            {sections.map((section) => (
              <SelectItem key={section.number} value={section.number.toString()}>
                {section.number}. {section.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Evidence Filter */}
        <Select
          value={selectedEvidence || "all"}
          onValueChange={(value) =>
            onEvidenceChange(value === "all" ? null : value)
          }
        >
          <SelectTrigger className="w-[160px] h-9">
            <SelectValue placeholder="Nível de evidência" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os níveis</SelectItem>
            <SelectItem value="Alta">Alta</SelectItem>
            <SelectItem value="Média">Média</SelectItem>
            <SelectItem value="Emergente">Emergente</SelectItem>
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-9 gap-1.5 text-muted-foreground"
          >
            <X className="w-3.5 h-3.5" />
            Limpar
          </Button>
        )}

        {/* Results Count */}
        <div className="ml-auto">
          <Badge variant="secondary" className="font-mono">
            {resultCount} / {totalCount} prompts
          </Badge>
        </div>
      </div>
    </div>
  );
}
