import { z } from "zod";
import { LeadSource, PackageType } from "../../../domain/enums/Lead";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const CreateLeadDTOSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100)
    .transform((val) => capitalizeWords(val)),
  email: z.string().trim().email(),
  phone: z
    .string()
    .min(10)
    .regex(/^\d{10}$/),
  location: z
    .string()
    .transform((val) => capitalizeWords(val))
    .optional(),
  source: z.nativeEnum(LeadSource),
  projectsInterestedIn: z.array(z.string()).min(1),
  packageType: z.nativeEnum(PackageType).optional(),
});

export type CreateLeadDTO = z.infer<typeof CreateLeadDTOSchema>;

export interface CreateLeadResponseDTO {
  id: string;
}
