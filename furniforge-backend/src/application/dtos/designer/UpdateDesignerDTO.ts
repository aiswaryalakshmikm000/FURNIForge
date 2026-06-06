import { z } from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const UpdateDesignerDTOSchema = z.object({
  firstName: z.string().trim().min(2).transform(capitalizeWords),
  lastName: z
    .string()
    .trim()
    .optional()
    .transform((val) => (val ? capitalizeWords(val) : "")),
  phone: z.string().regex(/^\d{10}$/),
});

export type UpdateDesignerDTO = z.infer<typeof UpdateDesignerDTOSchema>;
