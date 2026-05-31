import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../../../../shared/components/ui/alert-dialog";
import { Button } from "../../../../shared/components/ui/button";
import { Input } from "../../../../shared/components/ui/input";
import { FormField } from "../../../../shared/components/common/forms/form-field";
import { Select } from "../../../../shared/components/common/forms/select";
import { CheckboxGroup } from "../../../../shared/components/common/forms/checkbox-group";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { leadFormSchema, type LeadFormValues } from "../../validation/lead-form.validation";
import { LeadSource, PackageType } from "../../types/lead.type";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  deliverables: string[];
  isLoading?: boolean;
  initialData?: LeadFormValues;
  onSubmit: (data: LeadFormValues) => void | Promise<void>;
}

export const LeadFormDialog = ({
  open, onOpenChange, mode, deliverables, isLoading, initialData, onSubmit,
}: Props) => {
  const { register, control, handleSubmit, reset, formState: { errors, isValid } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema), mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      source: LeadSource.EXTERNAL,
      packageType: PackageType.BASIC,
      projectsInterestedIn: [],
    },
  });

  useEffect(() => {
    if (open) {
      reset(
        initialData ?? {
          name: "",
          email: "",
          phone: "",
          location: "",
          source: LeadSource.EXTERNAL,
          packageType: PackageType.BASIC,
          projectsInterestedIn: [],
        },
      );
    }
  }, [open, initialData, reset]);

  const submitHandler = async (data: LeadFormValues) => {
    await onSubmit(data);
    reset();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {mode === "create" ? "Add Lead" : "Edit Lead"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {mode === "create" ? "Enter lead details" : "Update lead details"}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Name" required error={errors.name?.message}>
              <Input {...register("name")} />
            </FormField>

            <FormField label="Email" required error={errors.email?.message}>
              <Input
                {...register("email")}
                disabled={mode === "edit"}
                className={
                  mode === "edit" ? "cursor-not-allowed opacity-60" : ""
                }
              />
            </FormField>

            <FormField label="Phone" required error={errors.phone?.message}>
              <Input {...register("phone")} />
            </FormField>

            <FormField label="Location" error={errors.location?.message}>
              <Input {...register("location")} />
            </FormField>

            <FormField label="Source" error={errors.source?.message}>
              <Controller
                control={control}
                name="source"
                render={({ field }) => (
                  <Select {...field}>
                    <option value={LeadSource.EXTERNAL}>External</option>
                    <option value={LeadSource.REFERRAL}>Referral</option>
                  </Select>
                )}
              />
            </FormField>

            <FormField label="Package Type" error={errors.packageType?.message}>
              <Controller
                control={control}
                name="packageType"
                render={({ field }) => (
                  <Select {...field}>
                    <option value={PackageType.BASIC}>Basic</option>
                    <option value={PackageType.STANDARD}>Standard</option>
                    <option value={PackageType.PREMIUM}>Premium</option>
                  </Select>
                )}
              />
            </FormField>
          </div>

          <FormField
            label="Projects Interested In"
            required
            error={errors.projectsInterestedIn?.message}
          >
            <Controller
              control={control}
              name="projectsInterestedIn"
              render={({ field }) => (
                <CheckboxGroup
                  options={deliverables}
                  values={field.value}
                  onChange={(value) => {
                    const exists = field.value.includes(value);
                    field.onChange(
                      exists
                        ? field.value.filter((v) => v !== value)
                        : [...field.value, value],
                    );
                  }}
                />
              )}
            />
          </FormField>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="copper"
              disabled={!isValid || isLoading}
            >
              {isLoading
                ? mode === "create"
                  ? "Adding..."
                  : "Updating..."
                : mode === "create"
                  ? "Add Lead"
                  : "Update Lead"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
