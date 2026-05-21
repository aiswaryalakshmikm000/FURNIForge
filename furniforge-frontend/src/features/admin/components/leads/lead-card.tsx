import {
  Globe,
  MapPin,
  Phone,
  UserPlus,
} from "lucide-react";

import type { LeadResponseDTO } from "../../types/lead.type";

interface Props {
  lead: LeadResponseDTO;

  onConfirmAssign: () => void;
}

export const LeadCard = ({
  lead,
  onConfirmAssign,
}: Props) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-warm border border-border">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-bold">
            {lead.name}
          </h3>

          <div className="flex gap-3 text-sm text-muted-foreground mt-1">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              {lead.phone}
            </span>

            {lead.location && (
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {lead.location}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <span className="px-2 py-1 rounded-full bg-muted text-xs">
            <Globe size={10} className="inline mr-1" />
            {lead.source}
          </span>

          <span className="px-2 py-1 rounded-full bg-accent/10 text-xs">
            {lead.status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {lead.projectsInterestedIn.map((project) => (
          <span
            key={project}
            className="px-2 py-1 rounded-full bg-accent/10 text-xs"
          >
            {project}
          </span>
        ))}
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        {lead.leadRegNo}
      </div>
    </div>
  );
};