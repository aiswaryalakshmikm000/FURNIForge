import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../../../../shared/components/ui/alert-dialog";
import { Button } from "../../../../shared/components/ui/button";
import { Input } from "../../../../shared/components/ui/input";
import { FormField } from "../../../../shared/components/common/forms/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { designerFormSchema, type DesignerFormValues } from "../../validation/designer-form.validation";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  isLoading?: boolean;
  initialData?: DesignerFormValues;
  onSubmit: (
    data: DesignerFormValues,
  ) => void | Promise<void>;
}

export const DesignerFormDialog = ({ open, onOpenChange, mode, isLoading, initialData, onSubmit }: Props) => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<DesignerFormValues>({
    resolver: zodResolver(designerFormSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  useEffect(() => {
    if (open) {
      reset(
        initialData ?? {
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
        },
      );
    }
  }, [open, initialData, reset]);

  const submitHandler = async ( data: DesignerFormValues ) => {
    await onSubmit(data);
    reset();
    onOpenChange(false);
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {mode === "create" ? "Add Designer" : "Edit Designer"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {mode === "create" ? "Enter designer details" : "Update designer details"}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="First Name"
              required
              error={errors.firstName?.message}
            >
            <Input {...register("firstName")} />
            </FormField>

            <FormField
              label="Last Name"
              error={errors.lastName?.message}
            >
              <Input {...register("lastName")} />
            </FormField>

            <FormField
              label="Phone"
              required
              error={errors.phone?.message}
            >
              <Input {...register("phone")} />
            </FormField>

            <FormField
              label="Email"
              required
              error={errors.email?.message}
            >
              <Input
                {...register("email")}
                disabled={mode === "edit"}
                className={ mode === "edit" ? "cursor-not-allowed opacity-60" : ""}
              />
            </FormField>
          </div>

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
                  ? "Creating..."
                  : "Updating..."
                : mode === "create"
                  ? "Create Designer"
                  : "Update Designer"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};