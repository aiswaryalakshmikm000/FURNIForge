import { Button } from "../../../../shared/components/ui/button";

interface Props {
  assigning: boolean;
  selectedDesigner: string;
  designers: string[];

  onDesignerChange: (value: string) => void;
  onStartAssign: () => void;
  onCancelAssign: () => void;
  onConfirmAssign: () => void;

  status: string;
}

export const LeadAssignmentActions = ({
  assigning,
  selectedDesigner,
  designers,
  onDesignerChange,
  onStartAssign,
  onCancelAssign,
  onConfirmAssign,
  status,
}: Props) => {
  if (assigning) {
    return (
      <div className="flex gap-2 items-center">
        <select
          value={selectedDesigner}
          onChange={(e) => onDesignerChange(e.target.value)}
          className="px-3 py-1.5 rounded-xl border border-border bg-background text-sm"
        >
          <option value="">Select designer</option>

          {designers.map((designer) => (
            <option key={designer} value={designer}>
              {designer}
            </option>
          ))}
        </select>

        <Button
          variant="copper"
          size="sm"
          disabled={!selectedDesigner}
          onClick={onConfirmAssign}
        >
          Assign
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onCancelAssign}
        >
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant={status === "Unassigned" ? "copper" : "outline"}
      size="sm"
      onClick={onStartAssign}
    >
      {status === "Unassigned"
        ? "Assign Designer"
        : "Reassign"}
    </Button>
  );
};