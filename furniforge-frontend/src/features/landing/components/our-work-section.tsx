import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionIntro } from "./section-intro";
import { WorkCard } from "./work-card";
import { PaginationControl } from "../../../shared/components/common/PaginationControl";
import { usePagination } from "../../../shared/hooks/use-pagination";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { WorkFilters } from "./work-filters";

import wardrobeImg from "../../../assets/work-wardrobe-new.jpg";
import tvunitImg from "../../../assets/work-tvunit-new.jpg";
import deskImg from "../../../assets/work-desk-new.jpg";
import sofaImg from "../../../assets/work-sofa-new.jpg";
import bedImg from "../../../assets/work-bed-new.jpg";

interface Project {
  id: number;
  image: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  color: string;
  type: string;
  finish: string;
  review: string;
  client: string;
}

const TYPES = [ "All", "Wardrobe", "TV Unit", "Office Desk", "Sofa", "Bed"] as const;
const COLORS = [ "All", "Black", "White", "Grey", "Brown", "Beige", "Wood"] as const;
const SORT_OPTIONS: { label: string; value: "none" | "price" | "rating" }[] = [
  { label: "Default", value: "none" },
  { label: "Price", value: "price" },
  { label: "Rating", value: "rating" },
];

const projects: Project[] = [
  {
    id: 1,
    image: wardrobeImg,
    title: "Sliding Wardrobe — Master Bedroom",
    location: "Mumbai",
    rating: 4.8,
    price: 185000,
    color: "Brown",
    type: "Wardrobe",
    finish: "Laminate",
    review: "Absolutely loved the design.",
    client: "Priya M.",
  },
  {
    id: 2,
    image: tvunitImg,
    title: "Wall Mounted TV Unit",
    location: "Bangalore",
    rating: 4.9,
    price: 95000,
    color: "Grey",
    type: "TV Unit",
    finish: "PU",
    review: "Exceeded expectations.",
    client: "Rahul S.",
  },
  {
    id: 3,
    image: deskImg,
    title: "Ergonomic Office Desk Setup",
    location: "Pune",
    rating: 4.6,
    price: 72000,
    color: "White",
    type: "Office Desk",
    finish: "Laminate",
    review: "Perfect for WFH.",
    client: "Arjun R.",
  },
  {
    id: 4,
    image: sofaImg,
    title: "L-Shape Sofa with Ottoman",
    location: "Delhi",
    rating: 4.7,
    price: 145000,
    color: "Beige",
    type: "Sofa",
    finish: "Fabric",
    review: "Incredibly comfortable.",
    client: "Meena T.",
  },
  {
    id: 5,
    image: bedImg,
    title: "Platform Bed with Storage",
    location: "Gurgaon",
    rating: 4.9,
    price: 120000,
    color: "Wood",
    type: "Bed",
    finish: "Veneer",
    review: "Dream bedroom realized.",
    client: "Vikash P.",
  },
];

export const OurWorkSection = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("All");
  const [sortKey, setSortKey] = useState<"none" | "price" | "rating">("none");
  const [showFilters, setShowFilters] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.client?.toLowerCase().includes(search.toLowerCase());

      const matchesType = typeFilter === "All" || p.type === typeFilter;
      const matchesColor = colorFilter === "All" || p.color === colorFilter;

      return matchesSearch && matchesType && matchesColor;
    });

    if (sortKey === "price") list = [...list].sort((a, b) => b.price - a.price);
    if (sortKey === "rating")
      list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [search, typeFilter, colorFilter, sortKey]);

  const {
    currentPage,
    totalPages,
    paginatedItems,
    setCurrentPage,
    totalItems,
    itemsPerPage,
  } = usePagination<Project>(filtered, 6);

  const hasActiveFilters = typeFilter !== "All" || colorFilter !== "All" || sortKey !== "none";

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const toggleFilterPanel = () => setShowFilters((prev) => !prev);

  const clearAllFilters = () => {
    setTypeFilter("All");
    setColorFilter("All");
    setSortKey("none");
    setSearch("");
    setShowFilters(false);
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 gradient-espresso">
        <SectionIntro
          tag="Portfolio"
          title="Our Furniture Projects"
          description="Browse our completed custom furniture projects and save your favourites as references."
        />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* SEARCH + FILTER BUTTON */}
        <div className="flex gap-3 mb-6 items-center">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, location or client..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent font-sans shadow-warm"
            />
          </div>

          <button
            onClick={toggleFilterPanel}
            className={`flex items-center gap-2 px-6 h-12 rounded-2xl border transition-all ${
              showFilters || hasActiveFilters
                ? "bg-accent text-accent-foreground border-accent"
                : "border-border hover:bg-muted"
            }`}
          >
            <SlidersHorizontal size={16} />
            Filters
            {hasActiveFilters && ( <div className="w-2 h-2 rounded-full bg-white" />)}
          </button>
        </div>

        {/* COLLAPSIBLE FILTERS */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <WorkFilters
                types={TYPES}
                colors={COLORS}
                type={typeFilter}
                color={colorFilter}
                setType={setTypeFilter}
                setColor={setColorFilter}
                clear={clearAllFilters}
                sortOptions={SORT_OPTIONS}
                sortKey={sortKey}
                setSortKey={setSortKey}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* RESULTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((project) => (
            <WorkCard  key={project.id}  project={project}
              isSaved={saved.includes(project.id)}
              onSave={toggleSave}
            />
          ))}
        </div>

        {paginatedItems.length === 0 && (
          <EmptyState  title="No projects found"
            description="We couldn't find any projects matching your filters."
            icon={<Search size={32} className="text-muted-foreground" />}
            action={
              <button onClick={clearAllFilters}
                className="mt-4 px-6 py-2.5 bg-accent text-accent-foreground rounded-2xl text-sm font-medium hover:bg-accent/90 transition">
                Clear all filters
              </button>
            }
          />
        )}

        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};
