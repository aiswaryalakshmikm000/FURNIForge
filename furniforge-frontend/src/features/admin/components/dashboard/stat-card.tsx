import type { LucideIcon } from "lucide-react";
import { AnimatedContainer } from "../../../../shared/components/common/animated-container";

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
    <AnimatedContainer
      delay={delay}
      hover={true}
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
    </AnimatedContainer>
  );
};