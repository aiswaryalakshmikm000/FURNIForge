import { z } from "zod";
import { FieldType } from "../../../domain/enums/FieldType";

export const CreateFieldDTOSchema = z.object({
  tabId: z.string().uuid(),
  label: z.string().trim().min(1),
  fieldType: z.nativeEnum(FieldType),
  options: z.string().trim().optional(),
  defaultValue: z.string().trim().optional(),
  isRequired: z.boolean(),
});

export type CreateFieldDTO = z.infer<typeof CreateFieldDTOSchema>;