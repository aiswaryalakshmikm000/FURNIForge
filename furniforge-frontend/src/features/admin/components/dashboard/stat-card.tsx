import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
  delay?: number;
};

export const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  delay = 0,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-card rounded-2xl p-5 shadow-warm border border-border"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className={color} />

        <p className="text-xs text-muted-foreground font-sans">
          {title}
        </p>
      </div>

      <p className={`text-xl font-bold font-display ${color}`}>
        {value}
      </p>
    </motion.div>
  );
};