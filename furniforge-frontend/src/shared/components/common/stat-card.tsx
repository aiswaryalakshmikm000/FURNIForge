import type { LucideIcon } from "lucide-react";
import { AnimatedContainer } from "./animated-container";

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
  delay
}: Props) => {
  return (
    <AnimatedContainer
      hover
      delay={delay}
      className="bg-card border border-border rounded-2xl p-5 shadow-warm"
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}
      >
        <Icon size={20} />
      </div>

      <h3 className="text-2xl font-bold text-foreground font-display">
        {value}
      </h3>

      <p className="text-xs text-muted-foreground font-sans mt-1">
        {title}
      </p>
    </AnimatedContainer>
  );
};