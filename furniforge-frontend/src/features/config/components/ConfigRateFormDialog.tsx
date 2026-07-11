import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "../../../shared/components/ui/alert-dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConfigRateFormDialog = ({
  open,
  onOpenChange,
}: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Config Rate</AlertDialogTitle>

          <AlertDialogDescription>
            Configuration rate form will be implemented after the
            Create and Update APIs are completed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex items-center justify-center h-56 rounded-lg border border-dashed border-border text-sm text-muted-foreground">
          Form Coming Soon
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfigRateFormDialog;