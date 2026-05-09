import { Badge } from "../../../../shared/components/ui/badge";
import { ListCard } from "../../../../shared/components/common/list-card";


type Payment = {
  client: string;
  project: string;
  amount: string;
  dueDate: string;
  stage: string
  overdue: boolean;
};

type Props = {
  data: Payment[];
};

export const PendingPayments = ({
  data,
}: Props) => {
  return (
    <div className="space-y-3">
      {data.map((p: Payment, i: number) => (
        <ListCard
          key={i}
          className={
            p.overdue
              ? "bg-destructive/5 border border-destructive/20"
              : ""
          }
          title={`${p.client} — ${p.project}`}
        subtitle={`${p.stage} · Due: ${p.dueDate}`}
        rightContent={
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-accent font-display">
              {p.amount}
            </span>

            {p.overdue && (
              <Badge variant="destructive">
                Overdue
              </Badge>
            )}
          </div>
        }
        />
      ))}
    </div>
  );
};