import z from "zod";
import { RequirementFieldTemplateDTO } from "./RequirementFieldTemplateDTO";

export const GetTemplatesByDeliverableQuerySchema = z.object({
  deliverableId: z.string().uuid(),
});

export type GetTemplatesByDeliverableQueryDTO = z.infer<typeof GetTemplatesByDeliverableQuerySchema>;




export interface GetTemplatesByDeliverableResponseDTO {
  templates: RequirementFieldTemplateDTO[];
}