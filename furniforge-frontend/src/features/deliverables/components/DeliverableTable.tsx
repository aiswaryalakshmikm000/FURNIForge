import { Pencil, Trash2, Archive } from "lucide-react";
import type { DeliverableResponseDTO } from "../types/get-all-deliverables.type";
import { StatusToggle } from "../../../shared/components/ui/statusToggle";

interface Props {
  deliverables: DeliverableResponseDTO[];
  onEdit: (deliverable: DeliverableResponseDTO) => void;
  onToggleStatus: (deliverable: DeliverableResponseDTO) => void;
  onSoftDelete: (deliverable: DeliverableResponseDTO) => void;
  onDelete: (deliverable: DeliverableResponseDTO) => void;
}

export const DeliverableTable = ({
  deliverables,
  onEdit,
  onToggleStatus,
  onSoftDelete,
  onDelete,
}: Props) => {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[60px_120px_2fr_60px_120px_90px] gap-4 px-6 py-3 border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
        <span>Icon</span>
        <span>Name</span>
        <span>Description</span>
        <span>Created</span>
        <span className="text-center">Status</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      {deliverables.map((deliverable) => (
        <div
          key={deliverable.id}
          className="grid grid-cols-[60px_120px_2fr_60px_120px_90px] gap-4 px-6 py-4 border-b border-border last:border-0 items-center hover:bg-muted/20 transition-colors"
        >
          {/* Icon */}
          <div className="flex items-center">
            <span className="text-2xl">{deliverable.icon}</span>
          </div>

          {/* Name */}
          <div>
            <p className="font-medium text-foreground truncate">
              {deliverable.name}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {deliverable.description}
          </p>

          {/* Created Date */}
          <p className="text-xs text-muted-foreground">
            {new Date(deliverable.createdAt).toLocaleDateString()}
          </p>

          {/* Status */}
          <div className="flex justify-center">
            <StatusToggle
              isActive={deliverable.isActive}
              onClick={() => onToggleStatus(deliverable)}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end items-center gap-1">
            <button
              onClick={() => onEdit(deliverable)}
              className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-accent transition-colors"
              title="Edit"
            >
              <Pencil size={15} />
            </button>

            <button
              onClick={() => onSoftDelete(deliverable)}
              className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-amber-500 transition-colors"
              title="Soft Delete"
            >
              <Archive size={15} />
            </button>

            <button
              onClick={() => onDelete(deliverable)}
              className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-destructive transition-colors"
              title="Permanent Delete"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
