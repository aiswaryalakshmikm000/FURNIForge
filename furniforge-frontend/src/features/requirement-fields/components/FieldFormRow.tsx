import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
import {
  FieldFormSchema,
  type FieldFormValues,
} from "../validation/field-form-validation";
import { FieldType } from "../../../types/enums/field-type.enum";

interface Props {
  initialData?: FieldFormValues;
  isLoading?: boolean;
  onSubmit: (data: FieldFormValues) => Promise<void>;
  onSuccess?: () => void;
  onCancel: () => void;
}

export function FieldFormRow({
  initialData,
  isLoading,
  onSubmit,
  onSuccess,
  onCancel,
}: Props) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldFormValues>({
    resolver: zodResolver(FieldFormSchema),
    mode: "onChange",
    defaultValues: initialData ?? {
      label: "",
      fieldType: FieldType.TEXT,
      options: "",
      defaultValue: "",
      isRequired: false,
    },
  });

  const optionTypes = [
    FieldType.SELECT,
    FieldType.MULTI_SELECT,
    FieldType.CHECKBOX,
    FieldType.RADIO,
  ];

  const selectedFieldType = useWatch({ control, name: "fieldType" });

  const showOptions =
    selectedFieldType && optionTypes.includes(selectedFieldType as FieldType);

  const submitHandler = async (data: FieldFormValues) => {
    await onSubmit(data);
    reset();
    onSuccess?.();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="px-6 py-6 border-b border-border bg-card"
    >
      <div className="grid grid-cols-12 gap-4 mb-2">
        <div className="col-span-4 text-xs text-muted-foreground">Label</div>

        <div className="col-span-2 text-xs text-muted-foreground">Type</div>

        <div className="col-span-2 text-xs text-muted-foreground">Options</div>

        <div className="col-span-2 text-xs text-muted-foreground">Default</div>

        <div className="col-span-2 text-xs text-muted-foreground text-right">
          Actions
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Label */}
        <div className="col-span-4">
          <input
            {...register("label")}
            placeholder="Field label"
            className="w-full h-12 rounded-xl border border-border px-4"
          />

          {errors.label && (
            <p className="mt-1 text-xs text-destructive">
              {errors.label.message}
            </p>
          )}
        </div>

        {/* Field Type */}
        <div className="col-span-2">
          <select
            {...register("fieldType")}
            className="w-full h-12 rounded-xl border border-border px-4"
          >
            {Object.values(FieldType).map((type) => (
              <option key={type} value={type}>
                {type.toLowerCase()}
              </option>
            ))}
          </select>

          {errors.fieldType && (
            <p className="mt-1 text-xs text-destructive">
              {errors.fieldType.message}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="col-span-2">
          <input
            {...register("options")}
            placeholder="Comma-separated"
            className="w-full h-12 rounded-xl border border-border px-4 disabled:opacity-50"
          />

          {errors.options && (
            <p className="mt-1 text-xs text-destructive">
              {errors.options.message}
            </p>
          )}

          {!errors.options && showOptions && (
            <p className="mt-1 text-xs text-amber-600">
              Enter comma-separated options.
            </p>
          )}

          {!errors.options && !showOptions && (
            <p className="mt-1 text-xs text-muted-foreground">
              Options not allowed
            </p>
          )}
        </div>

        {/* Default Value */}
        <div className="col-span-2">
          <input
            {...register("defaultValue")}
            placeholder="Default value"
            className="w-full h-12 rounded-xl border border-border px-4"
          />

          {errors.defaultValue && (
            <p className="mt-1 text-xs text-destructive">
              {errors.defaultValue.message}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="col-span-2 flex items-center justify-end gap-4 h-12">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" {...register("isRequired")} />
            Req
          </label>

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="text-green-600 disabled:opacity-50"
          >
            {isLoading ? "Saving..." : <Check size={18} />}
          </button>

          <button type="button" onClick={onCancel} className="text-destructive">
            <X size={18} />
          </button>
        </div>
      </div>
    </form>
  );
}
