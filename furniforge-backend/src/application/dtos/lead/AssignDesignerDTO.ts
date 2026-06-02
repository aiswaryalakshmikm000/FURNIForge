import { z } from "zod";
import { LeadStatus } from "../../../domain/enums/Lead";

export const AssignDesignerSchema = z.object({
  designerId: z.uuid(),
});

export type AssignDesignerDTO = z.infer<typeof AssignDesignerSchema>;

export interface AssignDesignerResponseDTO {
  leadId: string;
  designerId: string;
  designerName: string;
  status: LeadStatus;
  assignedAt: Date;
}
