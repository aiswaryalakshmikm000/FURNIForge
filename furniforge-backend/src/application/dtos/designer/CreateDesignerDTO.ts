import { z } from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const CreateDesignerDTOSchema = z.object({
  firstName: z.string().trim().min(2).transform(capitalizeWords),
  lastName: z
    .string()
    .trim()
    .optional()
    .transform((val) => (val ? capitalizeWords(val) : "")),
  email: z.string().trim().email(),
  phone: z.string().regex(/^\d{10}$/),
});
export type CreateDesignerDTO = z.infer<typeof CreateDesignerDTOSchema>;


export interface CreateDesignerResponseDTO {
  id: string;
}
