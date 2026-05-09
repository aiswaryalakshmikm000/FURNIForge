import { LogOut } from "lucide-react";
import { useState } from "react";

import { useLogout } from "../../../features/auth/hooks/use-logout";
import { ConfirmDialog } from "./confirm-dialog";

export const LogoutButton = () => {
  const [open, setOpen] = useState(false);

  const { mutate: logoutUser, isPending } = useLogout();

  const handleLogout = () => {
    logoutUser(undefined, {
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
        <LogOut className="h-4 w-4" />

        {isPending ? "Signing Out..." : "Sign Out"}
      </button>

      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleLogout}
        title="Sign out?"
        description="You will need to log in again to access your account."
        confirmText="Sign Out"
        cancelText="Cancel"
        loading={isPending}
        variant="destructive"
      />
    </>
  );
};
