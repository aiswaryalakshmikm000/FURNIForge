import { z } from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const CreateTemplateDTOSchema = z.object({
  deliverableId: z.string().uuid(),
  name: z.string().trim().min(2).max(50).transform(capitalizeWords),
  description: z.string().trim().min(10).max(300),
});

export type CreateTemplateDTO = z.infer<typeof CreateTemplateDTOSchema>;