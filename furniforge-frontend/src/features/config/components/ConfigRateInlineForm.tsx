import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";

import {
  configRateFormSchema,
  type ConfigRateFormValues,
} from "../validation/config-rate-form.validation";

import { ConfigUnit } from "../../../types/enums/config-type.enum";

interface Props {
  defaultValues?: ConfigRateFormValues;
  onSubmit: (
    values: ConfigRateFormValues
  ) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

const inputCls =
  "w-full min-w-0 rounded-lg border border-border bg-background px-2.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent";

export function ConfigRateInlineForm({
  defaultValues,
  onSubmit,
  onCancel,
  isLoading,
}: Props) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ConfigRateFormValues>({
    resolver: zodResolver(configRateFormSchema),
    mode: "onChange",
    defaultValues:
      defaultValues ?? {
        itemName: "",
        brand: "",
        rate: undefined,
        marginPercent: undefined,
        unit: ConfigUnit.SQFT,
      },
  });

  useEffect(() => {
    reset(
      defaultValues ?? {
        itemName: "",
        brand: "",
        rate: undefined,
        marginPercent: undefined,
        unit: ConfigUnit.SQFT,
      }
    );
  }, [defaultValues, reset]);

  const rate =
    Number(useWatch({ control, name: "rate" })) || 0;

  const margin =
    Number(
      useWatch({
        control,
        name: "marginPercent",
      })
    ) || 0;

  const finalRate =
    rate + (rate * margin) / 100;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full min-w-0 items-start gap-2 py-2"
    >
      {/* Item */}

      <div className="flex-1 min-w-0">
        <input
          {...register("itemName")}
          placeholder="Item name"
          className={inputCls}
        />

        {errors.itemName && (
          <p className="mt-1 text-xs text-destructive">
            {errors.itemName.message}
          </p>
        )}
      </div>

      {/* Brand */}

      <div className="w-24 shrink-0">
        <input
          {...register("brand")}
          placeholder="Brand"
          className={inputCls}
        />

        {errors.brand && (
          <p className="mt-1 text-xs text-destructive">
            {errors.brand.message}
          </p>
        )}
      </div>

      {/* Rate */}

      <div className="w-20 shrink-0">
        <input
          type="number"
          {...register("rate", {
            valueAsNumber: true,
          })}
          className={`${inputCls} text-right`}
        />

        {errors.rate && (
          <p className="mt-1 text-xs text-destructive">
            {errors.rate.message}
          </p>
        )}
      </div>

      {/* Margin */}

      <div className="w-16 shrink-0">
        <input
          type="number"
          {...register("marginPercent", {
            valueAsNumber: true,
          })}
          className={`${inputCls} text-right`}
        />

        {errors.marginPercent && (
          <p className="mt-1 text-xs text-destructive">
            {errors.marginPercent.message}
          </p>
        )}
      </div>

      {/* Unit */}

      <div className="w-24 shrink-0">
        <select
          {...register("unit")}
          className={inputCls}
        >
          {Object.values(ConfigUnit).map((unit) => (
            <option
              key={unit}
              value={unit}
            >
              {unit}
            </option>
          ))}
        </select>

        {errors.unit && (
          <p className="mt-1 text-xs text-destructive">
            {errors.unit.message}
          </p>
        )}
      </div>

      {/* Final */}

      <div className="flex w-20 shrink-0 items-center justify-end pt-2">
        <span className="text-sm font-bold text-accent">
          ₹{finalRate.toFixed(2)}
        </span>
      </div>

      {/* Actions */}

      <div className="flex w-20 shrink-0 justify-end gap-1 pt-1">
        <button
          type="submit"
          disabled={!isValid || isLoading}
          className="rounded-lg p-1.5 text-accent hover:bg-muted disabled:opacity-40"
        >
          {isLoading ? "..." : <Check size={14} />}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="rounded-lg p-1.5 hover:bg-muted"
        >
          <X size={14} />
        </button>
      </div>
    </form>
  );
}