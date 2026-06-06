import { z } from "zod";

export const designerFormSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters"),
  lastName: z.string().trim().optional(),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone must contain 10 digits"),
});

export type DesignerFormValues = z.infer<typeof designerFormSchema>;