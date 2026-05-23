import { ChevronDown } from "lucide-react";

import { Button } from "../../../../shared/components/ui/button";

interface Designer {
  id: string;
  name: string;
}

interface Props {
  assigning: boolean;
  selectedDesigner: string;
  designers: Designer[];
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
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <select
            value={selectedDesigner}
            onChange={(e) => onDesignerChange(e.target.value)}
            className=" appearance-none min-w-[180px] rounded-xl border border-border bg-background px-4 py-2 pr-10 text-sm outline-none">
            <option value="">Select designer</option>

            {designers.map((designer) => (
              <option key={designer.id} value={designer.id}>
                {designer.name}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
        </div>

        <Button
          variant="copper"
          size="sm"
          disabled={!selectedDesigner}
          onClick={onConfirmAssign}
        >
          Assign
        </Button>

        <Button variant="outline" size="sm" onClick={onCancelAssign}>
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant={status === "UNASSIGNED" ? "copper" : "outline"}
      size="sm"
      onClick={onStartAssign}
    >
      {status === "UNASSIGNED" ? "Assign Designer" : "Reassign"}
    </Button>
  );
};
