import z from "zod";
import { DesignerResponseDTO } from "./DesignerResponseDTO";

export const GetAllDesignersQuerySchema  = z.object({

  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  status: z.enum([ "ACTIVE",  "BLOCKED" , "INACTIVE"]).optional(),
  sortBy: z.enum(["rating", "revenue", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type GetAllDesignersQueryDTO = z.infer <typeof GetAllDesignersQuerySchema>;

export interface GetAllDesignersResponseDTO {
  designers: DesignerResponseDTO[];
  total: number;
  page: number;
  limit: number;
}