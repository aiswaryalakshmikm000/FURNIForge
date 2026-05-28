import { Mail, Phone, Star, Ban, CheckCircle} from "lucide-react";
import { Badge } from "../../../../shared/components/ui/badge";
import { Button } from "../../../../shared/components/ui/button";
import type { DesignerResponseDTO } from "../../types/get-all-designers.type";

interface Props {
  designer: DesignerResponseDTO;
  onToggleBlock: (
    designer: DesignerResponseDTO
  ) => void;
}

export const DesignerCard = ({
  designer,
  onToggleBlock,
}: Props) => {
  const initials =
    `${designer.firstName[0]}${designer.lastName[0]}`;

      const createdDate = new Date(designer.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className=" bg-card rounded-2xl p-5 shadow-warm border border-border "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className=" w-12 h-12 rounded-full gradient-rose flex items-center justify-center text-accent-foreground font-bold font-display "
          >
            {initials}
          </div>

          <div>
            <h3
              className=" font-bold text-foreground font-display text-sm "
            >
              {designer.firstName}
              {" "}
              {designer.lastName}

              <span
                className="
                text-xs text-muted-foreground font-sans font-normal "
              >
                -{designer.designerRegNo} . {createdDate}
              </span>
            </h3>

            <div
              className=" flex items-center gap-3 text-xs text-muted-foreground mt-1 "
            >
              <span className="flex items-center gap-1">
                <Phone size={10} />
                {designer.phone}
              </span>

              <span className="flex items-center gap-1">
                <Mail size={10} />
                {designer.email}
              </span>
            </div>

            <div
              className=" flex items-center gap-3 text-xs text-muted-foreground mt-1 "
            >
              <span>
                {designer.projectCount} projects
              </span>

              <span>
                Revenue ₹
                {designer.totalRevenue.toLocaleString()}
              </span>

              <span
                className="flex items-center gap-1"
              >
                <Star
                  size={10}
                  className="fill-yellow-500 text-yellow-500"
                />

                {designer.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant={
              designer.isBlocked
                ? "destructive"
                : "success"
            }
          >
            {designer.isBlocked
              ? "Blocked"
              : "Active"}
          </Badge>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              onToggleBlock(designer)
            }
          >
            {designer.isBlocked ? (
              <CheckCircle
                size={14}
                className="text-green-600"
              />
            ) : (
              <Ban
                size={14}
                className="text-yellow-600"
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};