import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../../../shared/components/ui/alert-dialog";
import { Button } from "../../../shared/components/ui/button";
import { Input } from "../../../shared/components/ui/input";
import { FormField } from "../../../shared/components/common/forms/form-field";
import { templateFormSchema, type TemplateFormValues } from "../validation/template-form.validation";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  isLoading?: boolean;
  initialData?: TemplateFormValues;
  onSubmit: (data: TemplateFormValues) => Promise<void> | void;
}

export function TemplateFormDialog({
  open,
  onOpenChange,
  mode,
  isLoading,
  initialData,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TemplateFormValues>({
    resolver: zodResolver(templateFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (!open) return;

    reset(
      initialData ?? {
        name: "",
        description: "",
      },
    );
  }, [open, initialData, reset]);

  const submitHandler = async (data: TemplateFormValues) => {
    await onSubmit(data);
    reset();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {mode === "create" ? "Add Template" : "Edit Template"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {mode === "create"
              ? "Create a new template"
              : "Update template details"}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <FormField
            label="Template Name"
            required
            error={errors.name?.message}
          >
            <Input {...register("name")} />
          </FormField>

          <FormField
            label="Description"
            required
            error={errors.description?.message}
          >
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
                  ? "Add Template"
                  : "Update Template"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
