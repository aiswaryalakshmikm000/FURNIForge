import { type LeadResponseDTO } from "./lead.type";
import { LeadStatus, LeadSource } from "./lead.type";

export interface GetAllLeadsQueryDTO {
  page?: number;
  search?: string;
  status?: LeadStatus;
  source?: LeadSource;
  deliverable?: string;
  sortOrder?: "asc" | "desc";
}

export interface GetAllLeadsResponseDTO {
  leads: LeadResponseDTO[];
  total: number;
  page: number;
  limit: number;
}
