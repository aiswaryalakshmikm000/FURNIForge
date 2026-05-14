import { z } from "zod";
import { LeadResponseDTO } from "./LeadResponseDTO";
import { LeadSource, LeadStatus } from "../../../domain/enums/Lead";

export const GetAllLeadsQuerySchema = z.object({

  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().trim().optional(),
  status: z.nativeEnum(LeadStatus).optional(),
  source: z.nativeEnum(LeadSource).optional(),
  deliverable: z.string().optional(),
  sortBy: z.enum(["createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type GetAllLeadsQueryDTO = z.infer <typeof GetAllLeadsQuerySchema>;


export interface GetAllLeadsResponseDTO {
  leads: LeadResponseDTO[];
  total: number;
  page: number;
  limit: number;
}