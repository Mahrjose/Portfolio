"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

export default function ProjectsPagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex justify-center items-center gap-2 mt-6"
      aria-label="Project pagination"
    >
      {/* Prev Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Prev
      </Button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;
        return (
          <Button
            key={page}
            size="sm"
            variant={isActive ? "default" : "outline"}
            onClick={() => setCurrentPage(page)}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </Button>
        );
      })}

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </nav>
  );
}
