import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../../../shared/components/ui/alert-dialog";
import { Button } from "../../../shared/components/ui/button";
import { Input } from "../../../shared/components/ui/input";
import { FormField } from "../../../shared/components/common/forms/form-field";
import { deliverableFormSchema, type DeliverableFormValues } from "../validation/deliverable-form.validation";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  isLoading?: boolean;
  initialData?: DeliverableFormValues;
  onSubmit: (data: DeliverableFormValues) => void | Promise<void>;
}

export const DeliverableFormDialog = ({
  open,
  onOpenChange,
  mode,
  isLoading,
  initialData,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid } } = useForm<DeliverableFormValues>({
    resolver: zodResolver(deliverableFormSchema),
    mode: "onChange",
    defaultValues: {
      icon: "",
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (open) {
      reset(
        initialData ?? {
          icon: "",
          name: "",
          description: "",
        },
      );
    }
  }, [open, initialData, reset]);

  const submitHandler = async (data: DeliverableFormValues) => {
    await onSubmit(data);

    reset();

    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {mode === "create" ? "Add Deliverable" : "Edit Deliverable"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {mode === "create"
              ? "Enter deliverable details"
              : "Update deliverable details"}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <FormField label="Icon" required error={errors.icon?.message}>
            <Input {...register("icon")} />
          </FormField>

          <FormField label="Name" required error={errors.name?.message}>
            <Input {...register("name")} />
          </FormField>

          <FormField
            label="Description" required error={errors.description?.message}>
            <Input {...register("description")} />
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
                  ? "Add Deliverable"
                  : "Update Deliverable"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
