import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

type TargetData = {
  percentage: number;
  currentAmount: string;
  targetAmount: string;
};

type TargetProgressProps = {
  target: TargetData;
};

export const TargetProgress = ({
  target,
}: TargetProgressProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-card border border-border rounded-2xl p-5 shadow-warm col-span-2 smooth-ease"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp
            size={16}
            className="text-accent"
          />

          <span className="text-sm font-bold text-foreground font-sans">
            Target Achievement
          </span>
        </div>

        <span className="text-sm font-bold text-accent font-display">
          {target.percentage}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${target.percentage}%` }}
          transition={{ duration: 1 }}
          className="h-full rounded-full gradient-copper"
        />
      </div>

      <p className="text-xs text-muted-foreground font-sans mt-2">
        {target.currentAmount} / {target.targetAmount} this month
      </p>
    </motion.div>
  );
};