import { useState } from "react";
import {
  SlidersHorizontal,
  Search,
  X,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FilterOption {
  key: string;
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (val: string) => void;
}

export interface SortOption {
  key: string;
  label: string;
}

interface Props {
  filters: FilterOption[];
  sortOptions?: SortOption[];
  sortValue?: string;
  onSortChange?: (v: string) => void;
  sortOrder?: "asc" | "desc";
  onSortOrderChange?: (value: "asc" | "desc") => void;
  search?: string;
  onSearchChange?: (v: string) => void;
  searchPlaceholder?: string;
  onReset?: () => void;
}

export const FilterSortDropdown = ({
  filters,
  sortOptions,
  sortValue,
  onSortChange,
  sortOrder,
  onSortOrderChange,
  search,
  onSearchChange,
  searchPlaceholder,
  onReset,
}: Props) => {
  const [open, setOpen] = useState(false);

  const activeCount =
    filters.filter((f) => f.value !== "All").length +
    (sortValue && sortValue !== "none" ? 1 : 0);

  const hasActiveFilters = activeCount > 0;

  const buttonStyle = (active: boolean) =>
    `px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
      active
        ? "gradient-rose text-accent-foreground shadow-rose"
        : "bg-muted text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div className="w-full space-y-3">
      {/* SEARCH + BUTTON */}
      <div className="flex gap-3 items-center">
        {onSearchChange && (
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="text"
              placeholder={searchPlaceholder || "Search..."}
              value={search || ""}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent font-sans shadow-warm"
            />
          </div>
        )}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`relative flex items-center gap-2 px-6 h-12 rounded-2xl border transition-all ${
            open
              ? "bg-accent text-accent-foreground border-accent"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* FILTER PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-card rounded-2xl border border-border p-6 shadow-warm">
              <div className="flex flex-wrap items-start gap-8">
                {filters.map((filter) => (
                  <div key={filter.key}>
                    <p className="text-xs uppercase mb-3 font-semibold text-muted-foreground font-sans tracking-wider">
                      {filter.label}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {filter.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => filter.onChange(opt.value)}
                          className={buttonStyle(filter.value === opt.value)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {sortOptions && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <p
                        className=" text-xs uppercase font-semibold text-muted-foreground font-sans tracking-wider "
                      >
                        Sort By
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          onSortOrderChange?.(
                            sortOrder === "asc" ? "desc" : "asc",
                          )
                        }
                        className="rounded-full font-semibold text-muted-foreground font-sans hover:text-accent-foreground transition-all  flex items-center justify-center "
                      >
                        {sortOrder === "asc" ? (
                          <ArrowUp size={16} />
                        ) : (
                          <ArrowDown size={16} />
                        )}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {sortOptions.map((s) => (
                        <button
                          key={s.key}
                          onClick={() => onSortChange?.(s.key)}
                          className={buttonStyle(sortValue === s.key)}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {hasActiveFilters && onReset && (
                  <button
                    onClick={onReset}
                    className="mt-4 flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    <X size={12} />
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
