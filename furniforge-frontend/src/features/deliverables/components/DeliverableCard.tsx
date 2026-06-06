import { Badge } from "../../../shared/components/ui/badge";
import type { DeliverableResponseDTO } from "../types/get-all-deliverables.type";

interface Props {
  deliverable: DeliverableResponseDTO;
}

export const DeliverableCard = ({ deliverable }: Props) => {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-warm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{deliverable.name}</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {deliverable.description}
          </p>
        </div>

        <Badge variant={deliverable.isActive ? "success" : "secondary"}>
          {deliverable.isActive ? "Active" : "Inactive"}
        </Badge>
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        Created: {new Date(deliverable.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};
