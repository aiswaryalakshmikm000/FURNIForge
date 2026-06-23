import { z } from "zod";

export const tabFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tab name must be at least 2 characters")
    .max(50, "Tab name cannot exceed 50 characters"),

  displayOrder: z
    .number()
    .int("Display order must be a whole number")
    .min(1, "Display order must be at least 1"),
});

export type TabFormValues = z.infer<typeof tabFormSchema>;