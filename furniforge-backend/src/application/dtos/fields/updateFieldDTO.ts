import { z } from "zod";
import { FieldType } from "../../../domain/enums/FieldType";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const UpdateFieldDTOSchema = z.object({
  label: z.string().trim().min(1).transform(capitalizeWords),
  fieldType: z.nativeEnum(FieldType),
  options: z.string().trim().optional(),
  defaultValue: z.string().trim().transform(capitalizeWords).optional(),
  isRequired: z.boolean(),
});

export type UpdateFieldDTO = z.infer<typeof UpdateFieldDTOSchema>;