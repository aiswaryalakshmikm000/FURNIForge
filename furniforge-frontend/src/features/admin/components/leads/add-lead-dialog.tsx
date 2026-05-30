import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle} from "../../../../shared/components/ui/alert-dialog";
import { Button } from "../../../../shared/components/ui/button";
import { Input } from "../../../../shared/components/ui/input";
import { FormField } from "../../../../shared/components/common/forms/form-field";
import { Select } from "../../../../shared/components/common/forms/select";
import { CheckboxGroup } from "../../../../shared/components/common/forms/checkbox-group";
import { createLeadSchema, type CreateLeadFormValues} from "../../validation/create-lead.validation";
import { LeadSource , PackageType} from "../../types/lead.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  deliverables: string[];
  onAddLead: (lead: CreateLeadFormValues) => void | Promise<void>;
}

export const AddLeadDialog = ({ open, onOpenChange, deliverables, onAddLead }: Props) => {
  
  const { register, control, handleSubmit, reset, formState: { errors, isValid, isSubmitting } } = useForm<CreateLeadFormValues>({
    resolver: zodResolver(createLeadSchema), mode: "onChange",
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

  const submitHandler = async (data: CreateLeadFormValues) => {
    await onAddLead(data);
    reset();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Lead Manually</AlertDialogTitle>

          <AlertDialogDescription>Enter lead details</AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Name" required error={errors.name?.message}>
              <Input {...register("name")} placeholder="Full Name" />
            </FormField>

            <FormField label="Email" required error={errors.email?.message}>
              <Input {...register("email")} placeholder="example@gmail.com" />
            </FormField>

            <FormField label="Phone" required error={errors.phone?.message}>
              <Input {...register("phone")} placeholder="9876543210" />
            </FormField>

            <FormField label="Location" error={errors.location?.message}>
              <Input {...register("location")} placeholder="Kochi" />
            </FormField>

            <FormField label="Lead Source" error={errors.source?.message}>
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
                    <option value="BASIC">Basic</option>

                    <option value="STANDARD">Standard</option>

                    <option value="PREMIUM">Premium</option>
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

            <Button type="submit" variant="copper" disabled={!isValid || isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Lead"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
