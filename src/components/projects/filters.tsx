"use client";

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  search: string;
  setSearch: (s: string) => void;
  sortOrder: string;
  setSortOrder: (o: string) => void;
};

export default function ProjectsFilters({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
}: Props) {
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "az", label: "A → Z" },
    { value: "za", label: "Z → A" },
  ];

  const currentLabel =
    sortOptions.find((opt) => opt.value === sortOrder)?.label || "Sort";

  return (
    <section
      className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-4"
      aria-labelledby="project-filters"
    >
      {/* Search */}
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="relative w-full sm:max-w-xs"
        aria-label="Search projects"
      >
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <input
          type="text"
          id="project-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, type, or tech..."
          className="w-full px-4 py-2 pr-10 border rounded-lg bg-background text-sm border-muted focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Search input"
        />
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
      </form>

      {/* Sort */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="min-w-[10rem] sm:w-50 justify-between truncate"
            aria-label={`Sort projects by: ${currentLabel}`}
          >
            Sort: {currentLabel}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setSortOrder(option.value)}
              aria-label={`Sort by ${option.label}`}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}
