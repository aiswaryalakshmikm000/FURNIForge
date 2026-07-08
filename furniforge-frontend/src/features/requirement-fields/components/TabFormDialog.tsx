import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../shared/components/ui/alert-dialog";
import {
  tabFormSchema,
  type TabFormValues,
} from "../validation/tab-form.validation";
import { FormField } from "../../../shared/components/common/forms/form-field";
import { Input } from "../../../shared/components/ui/input";
import { Button } from "../../../shared/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  isLoading?: boolean;
  initialData?: TabFormValues;
  onSubmit: (data: TabFormValues) => Promise<void> | void;
}

export function TabFormDialog({
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
  } = useForm<TabFormValues>({
    resolver: zodResolver(tabFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      displayOrder: 1,
    },
  });

  useEffect(() => {
    if (!open) return;

    reset(
      initialData ?? {
        name: "",
        displayOrder: 1,
      },
    );
  }, [open,  initialData, reset]);

  const submitHandler = async (data: TabFormValues) => {
    await onSubmit(data);
    reset();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {mode === "create" ? "Add Progress Tab" : "Edit Progress Tab"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {mode === "create"
              ? "Create a new tab for this template."
              : "Update tab details."}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <FormField label="Tab Name" required error={errors.name?.message}>
            <Input {...register("name")} />
          </FormField>

          <FormField
            label="Display Order"
            required
            error={errors.displayOrder?.message}
          >
            <Input type="number" min={1} {...register("displayOrder")} />
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
                  ? "Add Tab"
                  : "Update Tab"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
