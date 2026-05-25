import { useState } from "react";
import { Globe, Mail, MapPin, Phone, User } from "lucide-react";
import { formatEnumLabel } from "../../../../shared/utils/format-enum";
import { Badge } from "../../../../shared/components/ui/badge";
import type { LeadResponseDTO, LeadStatus } from "../../types/lead.type";
import { LeadAssignmentActions } from "./lead-assignment-actions";

interface Designer {
  id: string;
  name: string;
}

interface Props {
  lead: LeadResponseDTO;
  designers: Designer[];
  activeAssignLeadId: string | null;
  setActiveAssignLeadId: ( id: string | null ) => void;
  onConfirmAssign: (
    lead: LeadResponseDTO,
    designerId: string,
  ) => void;
}

const getStatusVariant = (
  status: LeadStatus,
): "success" | "warning" | "destructive" | "info" | "secondary" => {
  switch (status) {
    case "CONVERTED":
      return "success";

    case "PROPOSAL_SENT":
      return "warning";

    case "DESIGNING":
      return "info";

    case "ASSIGNED":
      return "secondary";

    case "LOST":
      return "destructive";

    case "UNASSIGNED":
    default:
      return "destructive";
  }
};

export const LeadCard = ({ lead, designers, activeAssignLeadId, setActiveAssignLeadId, onConfirmAssign }: Props) => {

  const [selectedDesigner, setSelectedDesigner] = useState("");

  const createdDate = new Date(lead.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const assigning = activeAssignLeadId === lead.id;

  const handleStartAssign = () => {
  setActiveAssignLeadId(lead.id);
};

  const handleCancelAssign = () => {
  setActiveAssignLeadId(null);
  setSelectedDesigner("");
};

  const handleConfirmAssign = () => {
    if (!selectedDesigner) return;
    onConfirmAssign(lead, selectedDesigner);
  };

  return (
    <div className="bg-card rounded-3xl border border-border shadow-warm p-6 transition-all hover:shadow-lg">
      {/* HEADER */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="h-10 w-10 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center border border-border">
            {lead.avatar ? (
              <img
                src={lead.avatar}
                alt={lead.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <User size={18} className="text-accent" />
            )}
          </div>

          <div>
            <h3 className="font-bold text-s text-foreground">{lead.name}</h3>

            <div className="flex flex-wrap items-center gap-3 mt-0.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Phone size={10} />
                {lead.phone}
              </span>

              <span className="flex items-center gap-1">
                <Mail size={10} />
                {lead.email}
              </span>

              {lead.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {lead.location}
                </span>
              )
              }
            </div>
          </div>
        </div>

        {/* badges */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" className="flex items-center gap-1  text-muted-foreground">
            <Globe size={8} />

            {formatEnumLabel(lead.source)}
          </Badge>

          <Badge variant={getStatusVariant(lead.status)} className="px-3 py-1 text-xs">
            {formatEnumLabel(lead.status)}
          </Badge>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 border-t border-border pt-5">
        <div className="flex items-start justify-between gap-4">
          {/* Left */}
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {lead.projectsInterestedIn.map((project) => (
                <Badge key={project} variant="default" className="px-2 py-0.5 text-xs text-accent bg-accent/10">
                  {project}
                </Badge>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              {lead.leadRegNo} • {createdDate}
            </p>

            {lead.assignedDesignerName && (
              <p className="mt-2 flex items-center gap-1 text-xs text-accent">
                <User size={10} />
                Assigned to: {lead.assignedDesignerName}
              </p>
            )}
          </div>

          {/* Right */}
          <LeadAssignmentActions
            assigning={assigning}
            selectedDesigner={selectedDesigner}
            designers={designers}
            onDesignerChange={setSelectedDesigner}
            onStartAssign={handleStartAssign}
            onCancelAssign={handleCancelAssign}
            onConfirmAssign={handleConfirmAssign}
            status={lead.status}
          />
        </div>
      </div>
    </div>
  );
};
