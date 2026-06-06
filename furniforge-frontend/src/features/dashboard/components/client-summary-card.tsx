type Summary = {
  label: string;
  value: string;
};

type SummaryCardProps = {
  summary: Summary[];
};

export const SummaryCard = ({ summary }: SummaryCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">

      <h2 className="text-xl font-bold font-display mb-5">
        Summary
      </h2>

      <div className="space-y-3">
        {summary.map((s, i) => (
          <div
            key={s.label}
            className={`flex justify-between items-center py-2 ${
              i !== summary.length - 1
                ? "border-b border-border"
                : ""
            }`}
          >
            <span className="text-sm text-muted-foreground">
              {s.label}
            </span>

            <span className="text-sm font-bold font-display font-rupee">
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};