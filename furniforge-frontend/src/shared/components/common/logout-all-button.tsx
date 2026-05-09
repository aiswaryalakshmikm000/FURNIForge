import { LaptopMinimalCheck } from "lucide-react";
import { useState } from "react";

import { ConfirmDialog } from "./confirm-dialog";
import { useLogoutAll } from "../../../features/auth/hooks/use-logoutAll";

export const LogoutAllButton = () => {
  const [open, setOpen] = useState(false);

  const { mutate: logoutAll, isPending } = useLogoutAll();

  const handleLogoutAll = () => {
    logoutAll(undefined, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={isPending}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
      >
        <LaptopMinimalCheck className="h-4 w-4" />

        {isPending ? "Signing Out..." : "Logout All Devices"}
      </button>

      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleLogoutAll}
        title="Logout from all devices?"
        description="This will sign you out from all active sessions on every device."
        confirmText="Logout All"
        cancelText="Cancel"
        loading={isPending}
        variant="destructive"
      />
    </>
  );
};