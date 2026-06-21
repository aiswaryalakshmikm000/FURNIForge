import z from "zod";
import { RequirementFieldTabDTO } from "./RequirementFieldTabDTO";

export const GetTabsByTemplateQuerySchema = z.object({
  templateId: z.string().uuid(),
});

export type GetTabsByTemplateQueryDTO = z.infer<typeof GetTabsByTemplateQuerySchema>;

export interface GetTabsByTemplateResponseDTO {
  tabs: RequirementFieldTabDTO[];
}