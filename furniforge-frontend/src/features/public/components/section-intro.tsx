import { motion } from "framer-motion";

interface SectionIntroProps {
  tag?: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
}

export const SectionIntro = ({
  tag,
  title,
  description,
  theme = "dark",
}: SectionIntroProps) => {
  return (
    <div className="w-full mx-auto px-4 text-center flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-2"
      >
        {tag && (
          <span className="text-sm font-semibold text-accent uppercase tracking-wider font-sans">
            {tag}
          </span>
        )}

        <h1
          className={`text-4xl md:text-6xl font-bold mt-3 font-display leading-tight ${
            theme === "dark" ? "text-cream" : "text-foreground"
          }`}
        >
          {title}
        </h1>

        {description && (
          <p
            className={`text-base md:text-lg mt-6 font-sans max-w-2xl mx-auto ${
              theme === "dark"
                ? "text-cream/70"
                : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
};