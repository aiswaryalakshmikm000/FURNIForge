export const PendingPayments = ({
  data,
}: any) => {
  return (
    <div className="space-y-3">
      {data.map((p: any, i: number) => (
        <div
          key={i}
          className={`flex items-center justify-between p-4 rounded-xl ${
            p.overdue
              ? "bg-destructive/5 border border-destructive/20"
              : "bg-muted/30"
          }`}
        >
          <div>
            <p className="text-sm font-medium text-foreground font-sans">
              {p.client} — {p.project}
            </p>

            <p className="text-xs text-muted-foreground font-sans">
              {p.stage} · Due: {p.dueDate}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-foreground font-display">
              {p.amount}
            </span>

            {p.overdue && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold badge-overdue font-sans">
                Overdue
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};