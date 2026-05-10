type Props = {
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  className?: string;
};

export const ListCard = ({
  title,
  subtitle,
  rightContent,
  leftContent,
  bottomContent,
  className,
}: Props) => {
  return (
    <div
      className={`p-4 rounded-xl bg-muted/30 border border-border space-y-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {leftContent}

          <div>
            <p className="text-sm font-medium text-foreground">
              {title}
            </p>

            {subtitle && (
              <p className="text-xs text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="shrink-0">
          {rightContent}
        </div>
      </div>

      {bottomContent}
    </div>
  );
};