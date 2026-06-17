import { z } from "zod";
import { FieldType } from "../../../domain/enums/FieldType";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const CreateFieldDTOSchema = z.object({
  tabId: z.string().uuid(),
  label: z.string().trim().min(1).transform(capitalizeWords),
  fieldType: z.nativeEnum(FieldType),
  options: z.string().trim().optional(),
  defaultValue: z.string().trim().transform(capitalizeWords).optional(),
  isRequired: z.boolean(),
});

export type CreateFieldDTO = z.infer<typeof CreateFieldDTOSchema>;