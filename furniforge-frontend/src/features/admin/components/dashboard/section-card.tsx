import React from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

export const SectionCard = ({
  title,
  icon: Icon,
  iconColor,
  children,
  action,
}: Props) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-warm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground font-display flex items-center gap-2">
          {Icon && (
            <Icon
              size={18}
              className={iconColor}
            />
          )}

          {title}
        </h2>

        {action}
      </div>

      {children}
    </div>
  );
};