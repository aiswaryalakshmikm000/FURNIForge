import { ConfirmDialog } from "../../../../shared/components/common/confirm-dialog";

import type { LeadResponseDTO } from "../../types/lead.type";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedLead: LeadResponseDTO | null;
  selectedDesigner: string;
  onConfirm: () => void;
}

export const AssignLeadDialog = ({
  open,
  onOpenChange,
  selectedLead,
  selectedDesigner,
  onConfirm,
}: Props) => {
  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title={
        selectedLead?.status === "Assigned" ? "Reassign Lead?" : "Assign Lead?"
      }
      description={
        selectedDesigner ? `Assign this lead to ${selectedDesigner}?` : "Assign this lead to an available designer."
      }
      confirmText={
        selectedLead?.status === "Assigned" ? "Reassign" : "Assign"
      }
      onConfirm={onConfirm}
    />
  );
};