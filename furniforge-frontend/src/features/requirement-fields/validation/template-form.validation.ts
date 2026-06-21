import { z } from "zod";

export const templateFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(300, "Description cannot exceed 300 characters"),
});

export type TemplateFormValues = z.infer<typeof templateFormSchema>;
