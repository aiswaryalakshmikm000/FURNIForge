import { LeadStatus } from "./lead.type";

export interface AssignDesignerDTO {
  designerId: string;
}

export interface AssignDesignerResponseDTO {
  leadId: string;
  designerId: string;
  designerName: string;
  status: LeadStatus;
  assignedAt: string;
}