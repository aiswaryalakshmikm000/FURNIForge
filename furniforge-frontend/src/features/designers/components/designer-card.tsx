import { Mail, Phone, Star, Ban, CheckCircle, Edit, Trash2 } from "lucide-react";
import { Badge } from "../../../shared/components/ui/badge";
import { Button } from "../../../shared/components/ui/button";
import type { DesignerResponseDTO } from "../types/get-all-designers.type";
import type { DesignerCommandResponseDTO } from "../types/designer-form.type";

interface DesignerCardProps {
  designer: DesignerResponseDTO;
  onEdit: (designer: DesignerResponseDTO) => void;
  onDelete: (designer: DesignerResponseDTO) => void;
  onToggleBlock: (designer: DesignerCommandResponseDTO) => void | Promise<void>;
}

export const DesignerCard = ({
  designer,
  onEdit,
  onDelete,
  onToggleBlock,
}: DesignerCardProps) => {
  const initials = `${designer.firstName?.[0] ?? ""}${designer.lastName?.[0] ?? ""}`;

  const createdDate = new Date(designer.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const status = designer.isBlocked
  ? "Blocked"
  : designer.isVerified
    ? "Active"
    : "Pending";

const badgeVariant =
  designer.isBlocked
    ? "destructive"
    : !designer.isVerified
      ? "secondary"
      : "success";

  return (
    <div className="bg-card rounded-3xl border border-border shadow-warm p-6 transition-all hover:shadow-lg">

      {/* HEADER */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

        {/* LEFT */}
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-full gradient-rose flex items-center justify-center font-bold text-white">
            {initials}
          </div>

          <div>
            <h3 className="font-bold text-sm text-foreground">
              {designer.firstName} {designer.lastName}
            </h3>

            {/* SAME STYLE AS LEAD REG NO + DATE */}
            <p className="text-xs text-muted-foreground mt-0.5">
              {designer.designerRegNo} • {createdDate}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Phone size={10} />
                {designer.phone}
              </span>

              <span className="flex items-center gap-1">
                <Mail size={10} />
                {designer.email}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
              <span>{designer.projectCount} projects</span>
              <span>Revenue: ₹{designer.totalRevenue?.toLocaleString()}</span>

              <span className="flex items-center gap-1">
                <Star size={10} className="text-yellow-500 fill-yellow-500" />
                {designer.rating}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT ACTIONS (same pattern as LeadCard) */}
        <div className="flex flex-wrap items-center gap-2">

          <Badge variant={badgeVariant}>
            {status}
          </Badge>

          <Button variant="outline" size="sm" onClick={() => onEdit(designer)}>
            <Edit size={14} />
          </Button>

          <Button variant="outline" size="sm" onClick={() => onToggleBlock(designer)}>
            {designer.isBlocked ? (
              <CheckCircle size={14} className="text-green-600" />
            ) : (
              <Ban size={14} className="text-yellow-600" />
            )}
          </Button>

          <Button variant="outline" size="sm" onClick={() => onDelete(designer)}>
            <Trash2 size={14} className="text-red-500" />
          </Button>
        </div>

      </div>
    </div>
  );
};