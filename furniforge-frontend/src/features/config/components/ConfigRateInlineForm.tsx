import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Check, X } from "lucide-react";

import {
  configRateFormSchema,
  type ConfigRateFormValues,
} from "../validation/config-rate-form.validation";

import { ConfigUnit } from "../../../types/enums/config-type.enum";

interface Props {
  onSubmit: (data: ConfigRateFormValues) => Promise<void>;

  onCancel: () => void;

  isLoading?: boolean;
}

const inputCls = `
px-2.5
py-2
rounded-lg
border
border-border
bg-background
text-sm
focus:outline-none
focus:ring-2
focus:ring-accent
`;

export function ConfigRateInlineForm({ onSubmit, onCancel, isLoading }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ConfigRateFormValues>({
    resolver: zodResolver(configRateFormSchema),
    mode: "onChange",
    defaultValues: {
      itemName: "",
      brand: "",
      rate: 0,
      marginPercent: 30,
      unit: ConfigUnit.SQFT,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
flex
items-start
gap-2
w-full
"
    >
      <div className="flex-1">
        <input
          {...register("itemName")}
          placeholder="Item name"
          className={`${inputCls} w-full`}
        />

        {errors.itemName && (
          <p className="text-xs text-destructive mt-1">
            {errors.itemName.message}
          </p>
        )}
      </div>

      <div className="w-24">
        <input
          {...register("brand")}
          placeholder="Brand"
          className={`${inputCls} w-full`}
        />

        {errors.brand && (
          <p className="text-xs text-destructive mt-1">
            {errors.brand.message}
          </p>
        )}
      </div>

      <div className="w-20">
        <input
          type="number"
          {...register("rate")}
          className={`${inputCls} w-full text-right`}
        />
      </div>

      <div className="w-16">
        <input
          type="number"
          {...register("marginPercent")}
          className={`${inputCls} w-full text-right`}
        />
      </div>

      <select {...register("unit")} className={`${inputCls} w-24`}>
        {Object.values(ConfigUnit).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>

      <div className="w-20 flex justify-end gap-1">
        <button
          type="submit"
          disabled={!isValid || isLoading}
          className="
p-1.5
rounded-lg
text-accent
hover:bg-muted
disabled:opacity-40
"
        >
          {isLoading ? "..." : <Check size={14} />}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="
p-1.5
rounded-lg
hover:bg-muted
"
        >
          <X size={14} />
        </button>
      </div>
    </form>
  );
}
