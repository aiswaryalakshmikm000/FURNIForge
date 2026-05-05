import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
}

export const PaginationControl = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: PaginationControlProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
      {/* Info Text */}
      <div className="text-sm text-muted-foreground font-sans mb-4 sm:mb-0">
        {totalItems && itemsPerPage && (
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1}–{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} projects
          </span>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-xl h-9 px-3"
        >
          <ChevronLeft size={16} />
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-xl text-sm font-medium ${
                currentPage === page 
                  ? "bg-accent text-accent-foreground shadow-sm" 
                  : ""
              }`}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-xl h-9 px-3"
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};