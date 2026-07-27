import { z } from "zod";
import { ConfigUnit } from "../../../domain/enums/Config";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const UpdateConfigRateDTOSchema = z.object({
  itemName: z.string().trim().min(2).max(100).transform(capitalizeWords),
  brand: z.string().trim().min(2).max(100).transform(capitalizeWords),
  rate: z.coerce.number().positive(),
  marginPercent: z.coerce.number().min(0).max(100),
  unit: z.nativeEnum(ConfigUnit),
});

export type UpdateConfigRateDTO = z.infer<typeof UpdateConfigRateDTOSchema>;
