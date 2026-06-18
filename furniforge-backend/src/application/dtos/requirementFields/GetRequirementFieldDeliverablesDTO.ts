
import { RequirementFieldDeliverableDTO } from "./RequirementFieldDeliverableDTO";
import z from "zod";

export const GetRequirementFieldDeliverablesQuerySchema = z.object({
  search: z.string().optional(),
});

export type GetRequirementFieldDeliverablesQueryDTO = z.infer<typeof GetRequirementFieldDeliverablesQuerySchema>;




export interface GetRequirementFieldDeliverablesResponseDTO {
  deliverables: RequirementFieldDeliverableDTO[];
}