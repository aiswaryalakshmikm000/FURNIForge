import { z } from "zod";
import { ConfigUnit } from "../../../types/enums/config-type.enum";

export const configRateFormSchema = z.object({
  itemName: z
    .string()
    .trim()
    .min(2, "Item name must be at least 2 characters")
    .max(100, "Item name cannot exceed 100 characters"),

  brand: z
    .string()
    .trim()
    .min(2, "Brand must be at least 2 characters")
    .max(100, "Brand cannot exceed 100 characters"),

  rate: z.number().positive("Rate must be greater than 0"),

  marginPercent: z
    .number()
    .min(0, "Minimum margin is 0%")
    .max(100, "Maximum margin is 100%"),

  unit: z.nativeEnum(ConfigUnit, {
    error: "Unit is required",
  }),
});

export type ConfigRateFormValues = z.infer<typeof configRateFormSchema>;

