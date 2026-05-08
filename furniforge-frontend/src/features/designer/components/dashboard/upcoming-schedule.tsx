import { motion } from "framer-motion";
import {
  CalendarCheck,
  ArrowRight,
  Calculator,
  MessageSquare,
} from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "../../../../shared/components/ui/button";

type Schedule = {
  customer: string;
  type: string;
  date: string;
  time: string;
  deliverable: string;
};

type UpcomingScheduleProps = {
  schedules: Schedule[];
};

export const UpcomingSchedule = ({schedules}: UpcomingScheduleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-6 shadow-warm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-foreground font-display">
          Upcoming Schedule
        </h2>

        <Link to="/designer/schedule">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1"
          >
            View All
            <ArrowRight size={14} />
          </Button>
        </Link>
      </div>

      {/* Schedule List */}
      <div className="space-y-3">
        {schedules.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 border border-border smooth-ease"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <CalendarCheck
                size={18}
                className="text-accent"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground font-sans">
                {item.type}
              </p>

              <p className="text-xs text-muted-foreground font-sans">
                {item.customer} · {item.deliverable} · {item.date} at {item.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-border">
        <h3 className="text-sm font-bold text-foreground font-sans mb-3">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 gap-2">
          <Link to="/designer/calculator">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1"
            >
              <Calculator size={14} />
              Design Calculator
            </Button>
          </Link>

          <Link to="/designer/messages">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1"
            >
              <MessageSquare size={14} />
              Messages
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};