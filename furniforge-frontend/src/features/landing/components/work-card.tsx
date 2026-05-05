import { motion } from "framer-motion";
import { Heart, MapPin, Star } from "lucide-react";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";
import { toast } from "sonner";
import { useSelector } from "react-redux";


interface WorkCardProps {
  project: {
    id: number;
    image: string;
    title: string;
    location: string;
    rating: number;
    price: number;
    type: string;
    finish?: string;
    review?: string;
    client?: string;
  };
  onSave?: (id: number) => void;
  isSaved?: boolean;
}

export const WorkCard = ({ project, onSave, isSaved }: WorkCardProps) => {
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    const handleSaveClick = () => {
    if (!isAuthenticated) {
      toast.error(ERROR_MESSAGES.AUTH.LOGIN_REQUIRED);
      return;
    }

    onSave?.(project.id);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all group"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* SAVE */}
        <button
          onClick={handleSaveClick}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isSaved
              ? "bg-accent text-accent-foreground shadow-rose"
              : "bg-card/80 backdrop-blur text-muted-foreground hover:text-accent"
          }`}
        >
          <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
        </button>

        {/* TAGS */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-card/80 backdrop-blur-sm text-foreground font-sans">
            {project.type}
          </span>
          {project.finish && (
            <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-card/80 backdrop-blur-sm text-foreground font-sans">
              {project.finish}
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-bold font-display leading-tight">
            {project.title}
          </h3>
          <span className="text-sm font-bold font-display whitespace-nowrap">
            ₹{(project.price / 1000).toFixed(0)}K
          </span>
        </div>

        {/* META */}
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            {project.rating}
          </div>

          <div className="flex items-center gap-1">
            <MapPin size={12} />
            {project.location}
          </div>
        </div>

        {project.review && (
          <p className="mt-3 text-xs italic text-muted-foreground line-clamp-2">
            "{project.review}"
          </p>
        )}

        {project.client && (
          <p className="text-xs text-muted-foreground mt-1">
            — {project.client}
          </p>
        )}
      </div>
    </motion.div>
  );
};
