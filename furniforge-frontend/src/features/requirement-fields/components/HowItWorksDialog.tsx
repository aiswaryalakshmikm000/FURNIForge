import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "../../../shared/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HowItWorksDialog({ open, onOpenChange }: Props) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-lg rounded-2xl">
        <Button
          type="button"
          variant="close"
          size="icon"
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 h-8 w-8">
          <X size={16} />
        </Button>
        <AlertDialogHeader>
          <AlertDialogTitle>How Requirement Fields Work</AlertDialogTitle>

          <AlertDialogDescription>
            Deliverables → Templates → Tabs → Fields
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-5 text-sm">
          <div>
            <h4 className="font-semibold">1. Deliverables</h4>

            <p className="text-muted-foreground">
              Top-level categories like Wardrobe, TV Unit, Sofa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">2. Templates</h4>

            <p className="text-muted-foreground">
              Each deliverable can have multiple templates.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">3. Progress Tabs</h4>

            <p className="text-muted-foreground">
              Each template has multiple tabs like Type & Style, Dimensions,
              Materials.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">4. Fields</h4>

            <p className="text-muted-foreground">
              Fields are the actual form inputs clients fill.
            </p>
          </div>

          <div className="rounded-xl border p-3 bg-accent/5">
            💡 Example: Wardrobe → Sliding Door → Material & Finish → Track Type
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
