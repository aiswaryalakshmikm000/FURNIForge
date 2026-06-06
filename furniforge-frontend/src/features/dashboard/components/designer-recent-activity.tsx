import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { AnimatedContainer } from "../../../shared/components/common/animated-container";

type Activity = {
  text: string;
  time: string;
};

type RecentActivityProps = {
  activities: Activity[];
};

export const RecentActivity = ({activities}: RecentActivityProps) => {
  return (
    <AnimatedContainer className="bg-card rounded-2xl p-6 shadow-warm border border-border">
      <h2 className="text-lg font-bold text-foreground font-display mb-4">Recent Activity</h2>

      <div className="space-y-3">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4 }}
            className="flex items-start gap-3 py-2 border-b border-border last:border-0 smooth-ease"
          >
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

            <div className="flex-1">
              <p className="text-sm text-foreground font-sans">
                {item.text}
              </p>

              <p className="text-xs text-muted-foreground font-sans flex items-center gap-1 mt-1">
                <Clock size={10} />
                {item.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedContainer>
  );
};