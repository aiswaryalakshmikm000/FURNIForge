import { ListCard } from "../../../../shared/components/common/list-card";

type Designer = {
  name: string;
  projects: number;
  revenue: string;
  rating: number;
};

type Props = {
  data: Designer[];
};

export const BestDesigners = ({ data }: Props) => {
  return (
    <div className="space-y-3">
      {data.map((d: Designer, i: number) => (
        <ListCard
          key={i}
          title={d.name}
          subtitle={`${d.projects} projects · ⭐ ${d.rating}`}
          leftContent={
            <div className="w-9 h-9 rounded-full gradient-copper flex items-center justify-center text-accent-foreground text-xs font-bold">
              {d.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </div>
          }
          rightContent={
            <span className="text-sm font-bold text-accent font-display">
              {d.revenue}
            </span>
          }
        />
      ))}
    </div>
  );
};
