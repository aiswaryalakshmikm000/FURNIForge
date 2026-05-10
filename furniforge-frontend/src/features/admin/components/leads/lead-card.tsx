import {
  Globe,
  MapPin,
  Phone,
  User,
  UserPlus,
} from "lucide-react";

import type { Lead } from "../../types/lead.type";

import { LeadAssignmentActions } from "./lead-assignment-actions";

interface Props {
  lead: Lead;

  designers: string[];

  assigning: boolean;
  selectedDesigner: string;

  onDesignerChange: (value: string) => void;
  onStartAssign: () => void;
  onCancelAssign: () => void;
  onConfirmAssign: () => void;
}

const statusColors: Record<string, string> = {
  Unassigned: "badge-overdue",
  Assigned: "badge-confirmed",
};

export const LeadCard = ({
  lead,
  designers,
  assigning,
  selectedDesigner,
  onDesignerChange,
  onStartAssign,
  onCancelAssign,
  onConfirmAssign,
}: Props) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-warm border border-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <UserPlus size={18} className="text-accent" />
          </div>

          <div>
            <h3 className="font-bold text-sm">
              {lead.name}
            </h3>

            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
              <span className="flex items-center gap-1">
                <Phone size={10} />
                {lead.phone}
              </span>

              <span className="flex items-center gap-1">
                <MapPin size={10} />
                {lead.location}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <span className="px-2 py-1 rounded-full text-xs bg-muted flex items-center gap-1">
            <Globe size={10} />
            {lead.source}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs ${statusColors[lead.status]}`}
          >
            {lead.status}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-1">
            {lead.types.map((type) => (
              <span
                key={type}
                className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs"
              >
                {type}
              </span>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            {lead.id} · {lead.date}
          </p>

          {lead.assignedTo && (
            <p className="text-xs text-accent mt-1 flex items-center gap-1">
              <User size={10} />
              Assigned to: {lead.assignedTo}
            </p>
          )}
        </div>

        <LeadAssignmentActions
          assigning={assigning}
          selectedDesigner={selectedDesigner}
          designers={designers}
          onDesignerChange={onDesignerChange}
          onStartAssign={onStartAssign}
          onCancelAssign={onCancelAssign}
          onConfirmAssign={onConfirmAssign}
          status={lead.status}
        />
      </div>
    </div>
  );
};