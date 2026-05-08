export const TopClients = ({
  data,
}: any) => {
  return (
    <div className="space-y-3">
      {data.map((c: any, i: number) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 rounded-xl bg-muted/30"
        >
          <div>
            <p className="text-sm font-medium text-foreground font-sans">
              {c.name}
            </p>

            <p className="text-xs text-muted-foreground font-sans">
              {c.type} · {c.projects} project(s)
            </p>
          </div>

          <span className="text-sm font-bold text-accent font-display">
            {c.totalSpent}
          </span>
        </div>
      ))}
    </div>
  );
};