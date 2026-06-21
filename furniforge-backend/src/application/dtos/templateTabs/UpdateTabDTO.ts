import z from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const UpdateTabDTOSchema = z.object({
    name: z.string().min(2).max(50).transform(capitalizeWords),
    displayOrder: z.number().int().min(1),
})

export type UpdateTabDTO = z.infer <typeof UpdateTabDTOSchema>