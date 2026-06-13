import z from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const TemplateTabFormDTOSchema = z.object({
  templateId: z.string().uuid(),
  name: z.string().min(2).max(50).transform(capitalizeWords),
  displayOrder: z.number().int().min(1),
});

export type TemplateTabFormDTO = z.infer<typeof TemplateTabFormDTOSchema>;