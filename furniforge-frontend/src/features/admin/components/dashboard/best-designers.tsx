export const BestDesigners = ({
  data,
}: any) => {
  return (
    <div className="space-y-3">
      {data.map((d: any, i: number) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 rounded-xl bg-muted/30"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full gradient-copper flex items-center justify-center text-accent-foreground text-xs font-bold">
              {d.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </div>

            <div>
              <p className="text-sm font-medium text-foreground font-sans">
                {d.name}
              </p>

              <p className="text-xs text-muted-foreground font-sans">
                {d.projects} projects · ⭐{" "}
                {d.rating}
              </p>
            </div>
          </div>

          <span className="text-sm font-bold text-foreground font-display">
            {d.revenue}
          </span>
        </div>
      ))}
    </div>
  );
};