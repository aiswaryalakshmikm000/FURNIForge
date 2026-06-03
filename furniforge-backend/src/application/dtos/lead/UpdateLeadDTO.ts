import { z } from "zod";
import { LeadSource, PackageType } from "../../../domain/enums/Lead";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const UpdateLeadDTOSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100)
    .transform((val) => capitalizeWords(val)),
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
  packageType: z.nativeEnum(PackageType),
});

export type UpdateLeadFDTO = z.infer<typeof UpdateLeadDTOSchema>;
