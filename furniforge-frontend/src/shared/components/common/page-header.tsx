type Props = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export const PageHeader = ({
  title,
  description,
  action,
}: Props) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground font-display">
          {title}
        </h1>

        {description && (
          <p className="text-muted-foreground font-sans mt-1">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
};