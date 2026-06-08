import { z } from "zod";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const DeliverableFormDTOSchema = z.object({
  name: z.string().trim().min(2).max(50).transform(capitalizeWords),
  description: z.string().trim().min(10).max(300),
  icon: z.string().trim().min(1),
});

export type DeliverableFormDTO = z.infer<typeof DeliverableFormDTOSchema>;