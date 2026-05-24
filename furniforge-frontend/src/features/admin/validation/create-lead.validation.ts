import { z } from "zod";
import { LeadSource, PackageType } from "../types/lead.type";

export const createLeadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone must contain 10 digits"),
  location: z.string().trim().min(2, "Location required"),
  source: z.nativeEnum(LeadSource, { error: "Source required"}),
  packageType: z.nativeEnum(PackageType, {message: "Package required", }),
  projectsInterestedIn: z.array(z.string()).min(1, "Select at least one project"),
  designerId: z.string().optional(),
  notes: z.string().optional(),
});

export type CreateLeadFormValues = z.infer<typeof createLeadSchema>;
