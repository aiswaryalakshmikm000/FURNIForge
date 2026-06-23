import { z } from "zod";
import { FieldType } from "../../../domain/enums/FieldType";
import { capitalizeWords } from "../../../shared/utils/formatName";

export const CreateFieldDTOSchema = z
  .object({
    tabId: z.string().uuid(),
    label: z.string().trim().min(1).transform(capitalizeWords),
    fieldType: z.nativeEnum(FieldType),
    options: z.string().trim().transform((value) => value
          .split(",")
          .map((option) => capitalizeWords(option.trim()))
          .filter(Boolean)).optional(),
    defaultValue: z.string().trim().transform(capitalizeWords).optional(),
    isRequired: z.boolean(),
  })
  .superRefine((data, ctx) => {
    const optionBasedFields = [
      FieldType.SELECT,
      FieldType.MULTI_SELECT,
      FieldType.CHECKBOX,
      FieldType.RADIO,
    ];

    const isOptionField = optionBasedFields.includes(data.fieldType);

    const options = data.options ?? [];

    if (isOptionField && options.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["options"],
        message: "Options are required for this field type",
      });
    }

    if (!isOptionField && options.length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["options"],
        message: "Options are not allowed for this field type",
      });
    }

    if (
      data.defaultValue &&
      isOptionField &&
      !options.includes(data.defaultValue)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["defaultValue"],
        message: "Default value must exist in the options",
      });
    }
  });

export type CreateFieldDTO = z.infer<typeof CreateFieldDTOSchema>;