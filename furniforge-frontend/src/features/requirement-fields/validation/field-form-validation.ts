import { z } from "zod";
import { FieldType } from "../../../types/enums/field-type.enum";

const optionFields = [
  FieldType.SELECT,
  FieldType.MULTI_SELECT,
  FieldType.CHECKBOX,
  FieldType.RADIO,
];

export const FieldFormSchema = z
  .object({
    label: z.string().trim()
      .min(2, "Field label must be at least 2 characters")
      .max(50, "Field label cannot exceed 50 characters"),
    fieldType: z.nativeEnum(FieldType),
    options: z.string().trim().optional(),
    defaultValue: z.string().trim().optional(),
    isRequired: z.boolean(),
  })
  .superRefine((data, ctx) => {
    const isOptionField = optionFields.includes(data.fieldType);

    if (isOptionField && !data.options?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["options"],
        message: "Options are required for this field type",
      });
    }

    if (!isOptionField && data.options?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["options"],
        message: "Options are not allowed for this field type",
      });
    }
  });

export type FieldFormValues = z.infer<typeof FieldFormSchema>;