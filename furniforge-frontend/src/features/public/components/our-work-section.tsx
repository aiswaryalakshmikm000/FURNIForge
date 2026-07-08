import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { SectionIntro } from "./section-intro";
import { WorkCard } from "./work-card";
import { PaginationControl } from "../../../shared/components/common/pagination-control";
import { EmptyState } from "../../../shared/components/common/EmptyState";
import { FilterSortDropdown } from "../../../shared/components/common/filter-sort-dropdown";
import wardrobeImg from "../../../assets/work-wardrobe-new.jpg";
import tvunitImg from "../../../assets/work-tvunit-new.jpg";
import deskImg from "../../../assets/work-desk-new.jpg";
import sofaImg from "../../../assets/work-sofa-new.jpg";
import bedImg from "../../../assets/work-bed-new.jpg";
import { usePagination } from "../hooks/use-pagination";

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

const COLORS = ["All", "Black", "White", "Grey", "Brown", "Beige", "Wood"] as const;
const TYPES = ["All", "Wardrobe", "TV Unit", "Office Desk", "Sofa", "Bed"] as const;

const SORT_OPTIONS = [
  { key: "price", label: "Price" },
  { key: "rating", label: "Rating" },
];

const projects: Project[] = [
  { id: 1, image: wardrobeImg, title: "Sliding Wardrobe — Master Bedroom", location: "Mumbai", rating: 4.8, review: "Absolutely loved the design.", client: "Priya M.", price: 185000, finish: "Laminate", color: "Brown", type: "Wardrobe" },
  { id: 2, image: tvunitImg, title: "Wall Mounted TV Unit", location: "Bangalore", rating: 4.9, review: "Exceeded expectations.", client: "Rahul S.", price: 95000, finish: "PU", color: "Grey", type: "TV Unit" },
  { id: 3, image: deskImg, title: "Ergonomic Office Desk Setup", location: "Pune", rating: 4.6, review: "Perfect for WFH.", client: "Arjun R.", price: 72000, finish: "Laminate", color: "White", type: "Office Desk" },
  { id: 4, image: sofaImg, title: "L-Shape Sofa with Ottoman", location: "Delhi", rating: 4.7, review: "Incredibly comfortable.", client: "Meena T.", price: 145000, finish: "Fabric", color: "Beige", type: "Sofa" },
  { id: 5, image: bedImg, title: "Platform Bed with Storage", location: "Gurgaon", rating: 4.9, review: "Dream bedroom realized.", client: "Vikash P.", price: 120000, finish: "Veneer", color: "Wood", type: "Bed" },
  { id: 6, image: wardrobeImg, title: "Walk-in Wardrobe", location: "Jaipur", rating: 4.5, review: "Luxury storage.", client: "Kavita D.", price: 320000, finish: "PU", color: "Brown", type: "Wardrobe" },
  { id: 7, image: tvunitImg, title: "Floating TV Console", location: "Chennai", rating: 4.7, review: "Clean and minimal.", client: "Deepa R.", price: 68000, finish: "Acrylic", color: "White", type: "TV Unit" },
  { id: 8, image: deskImg, title: "Executive Desk with Drawers", location: "Hyderabad", rating: 4.8, review: "Professional setup.", client: "Ravi K.", price: 85000, finish: "Laminate", color: "Grey", type: "Office Desk" },
  { id: 9, image: bedImg, title: "King-Size Upholstered Bed", location: "Thane", rating: 4.4, review: "Excellent craftsmanship.", client: "Anita S.", price: 155000, finish: "Fabric", color: "Beige", type: "Bed" },
];

export const OurWorkSection = () => {
  const [search, setSearch] = useState("");

  const [typeFilter, setTypeFilter] = useState("All");

  const [colorFilter, setColorFilter] = useState("All");

  const [sortKey, setSortKey] = useState<
    "none" | "price" | "rating"
  >("none");

  const [saved, setSaved] = useState<number[]>([]);

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.client?.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" || p.type === typeFilter;

      const matchesColor =
        colorFilter === "All" || p.color === colorFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesColor
      );
    });

    if (sortKey === "price") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    if (sortKey === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

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

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const clearAllFilters = () => {
    setTypeFilter("All");
    setColorFilter("All");
    setSortKey("none");
    setSearch("");
    setCurrentPage(1);
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

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* FILTERS */}
        <FilterSortDropdown
          search={search}
          onSearchChange={(v) => {
            setSearch(v);
            setCurrentPage(1);
          }}
          searchPlaceholder="Search by name, location or client..."
          filters={[
            {
              key: "type",
              label: "Type",
              options: TYPES.map((t) => ({
  label: t,
  value: t,
})),
              value: typeFilter,
              onChange: (v) => {
                setTypeFilter(v);
                setCurrentPage(1);
              },
            },
            {
              key: "color",
              label: "Color",
              options: COLORS.map((c) => ({
  label: c,
  value: c,
})),
              value: colorFilter,
              onChange: (v) => {
                setColorFilter(v);
                setCurrentPage(1);
              },
            },
          ]}
          sortOptions={SORT_OPTIONS}
          sortValue={sortKey}
          onSortChange={(v) =>
            setSortKey(v as "none" | "price" | "rating")
          }
          onReset={clearAllFilters}
        />

        {/* RESULTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {paginatedItems.map((project: Project) => (
            <WorkCard
              key={project.id}
              project={project}
              isSaved={saved.includes(project.id)}
              onSave={toggleSave}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {paginatedItems.length === 0 && (
          <EmptyState
            title="No projects found"
            description="We couldn't find any projects matching your filters."
            icon={
              <Search
                size={32}
                className="text-muted-foreground"
              />
            }
            action={
              <button
                onClick={clearAllFilters}
                className="mt-4 px-6 py-2.5 bg-accent text-accent-foreground rounded-2xl text-sm font-medium hover:bg-accent/90 transition"
              >
                Clear all filters
              </button>
            }
          />
        )}

        {/* PAGINATION */}
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