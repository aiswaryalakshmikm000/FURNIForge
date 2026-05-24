import { z } from "zod";
import { LeadSource, PackageType } from "../../../domain/enums/Lead";

export const CreateLeadDTOSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().min(10).regex(/^\d{10}$/),
  location: z.string().trim().optional(),
  source: z.nativeEnum(LeadSource),
  projectsInterestedIn: z.array(z.string()).min(1),
  packageType: z.nativeEnum(PackageType).optional(),
});

export type CreateLeadDTO = z.infer<typeof CreateLeadDTOSchema>;