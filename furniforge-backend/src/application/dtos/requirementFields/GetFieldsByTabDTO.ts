import z from "zod";
import { RequirementFieldFieldDTO } from "./RequirementFieldFieldsDTO";

export const GetFieldsByTabQuerySchema = z.object({
  tabId: z.string().uuid(),
});

export type GetFieldsByTabQueryDTO = z.infer<typeof GetFieldsByTabQuerySchema>;

export interface GetFieldsByTabResponseDTO {
  fields: RequirementFieldFieldDTO[];
}