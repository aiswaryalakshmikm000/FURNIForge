import { ListCard } from "../../../../shared/components/common/list-card";

type Client = {
  name: string;
  totalSpent: string;
  projects: number;
  type: string;
};

type Props = {
  data: Client[];
};

export const TopClients = ({ data }: Props) => {
  return (
    <div className="space-y-3">
      {data.map((c: Client, i: number) => (
        <ListCard
          key={i}
          title={c.name}
          subtitle={`${c.type} · ${c.projects} project(s)`}
          rightContent={
            <span className="text-sm font-bold text-accent font-display">
              {c.totalSpent} 
            </span>
          }
        />
      ))}
    </div>
  );
};
