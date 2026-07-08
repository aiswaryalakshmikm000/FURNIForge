import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type QuickAction = {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
  color: string;
};

type QuickActionsProps = {
  actions: QuickAction[];
};

export const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {actions.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            to={item.href}
            className="block bg-card border border-border rounded-2xl p-5 hover:shadow-md transition"
          >
            <div
              className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3`}
            >
              <item.icon size={22} />
            </div>

            <h3 className="font-bold text-foreground font-display">
              {item.label}
            </h3>

            <p className="text-xs text-muted-foreground font-sans mt-1">
              {item.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};