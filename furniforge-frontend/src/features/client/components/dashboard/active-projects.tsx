import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../core/config/constants/routes.constants";
import type { LucideIcon } from "lucide-react";

type Project = {
  id: string;
  title: string;
  type: string;
  status: string;
  progress: number;
  icon: LucideIcon;
};

type ActiveProjectsProps = {
  projects: Project[];
};

export const ActiveProjects = ({ projects }: ActiveProjectsProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold font-display">
          Active Projects
        </h2>

        <Link
          to={APP_ROUTES.CLIENT.PROJECTS}
          className="text-sm text-accent flex items-center gap-1 hover:underline"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="border border-border rounded-xl p-4"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <p.icon className="text-accent" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold font-display">
                    {p.title}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    {p.type}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full gradient-copper text-accent-foreground text-xs font-medium font-sans">
                {p.status}
              </span>
            </div>

            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent"
                style={{ width: `${p.progress}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>{p.type}</span>
              <span>{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};