import z from "zod";
import type { DesignerResponseDTO } from "./DesignerResponseDTO";
import { PaginationMeta } from "../../../shared/utils/paginate";

export const GetAllDesignersQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  status: z.enum(["ACTIVE", "BLOCKED", "PENDING"]).optional(),
  sortBy: z
    .enum(["rating", "projects", "revenue", "createdAt"])
    .default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type GetAllDesignersQueryDTO = z.infer<
  typeof GetAllDesignersQuerySchema
>;

export interface GetAllDesignersResponseDTO extends PaginationMeta {
  designers: DesignerResponseDTO[];
}
