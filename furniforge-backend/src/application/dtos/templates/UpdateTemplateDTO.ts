import z from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const UpdateTemplateDTOSchema = z.object({
  name: z.string().trim().min(2).max(50).transform(capitalizeWords),
  description: z.string().trim().min(10).max(300),
});

export type UpdateTemplateDTO = z.infer<typeof UpdateTemplateDTOSchema>;