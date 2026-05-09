import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: string;
};

export const QuickActionCard = ({
  icon: Icon,
  title,
  description,
  href,
  color,
}: Props) => {
  return (
    <Link
      to={href}
      className="block bg-card border border-border rounded-2xl p-5 hover:shadow-md transition"
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${color}`}
      >
        <Icon size={22} />
      </div>

      <h3 className="font-bold text-foreground font-display">
        {title}
      </h3>

      <p className="text-xs text-muted-foreground font-sans mt-1">
        {description}
      </p>
    </Link>
  );
};