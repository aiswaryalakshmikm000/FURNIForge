import z from "zod";
import { PaginationMeta } from "../../../shared/utils/paginate";
import { DeliverableResponseDTO } from "./DeliverableResponseDTO";

export const GetAllDeliverablesQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  sortBy: z.enum(["name", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type GetAllDeliverablesQueryDTO = z.infer< typeof GetAllDeliverablesQuerySchema >;

export interface GetAllDeliverablesResponseDTO extends PaginationMeta {
  deliverables: DeliverableResponseDTO[];
}



