import { useState, useEffect } from "react";
import { Input } from "../../../../shared/components/ui/input";
import { Button } from "../../../../shared/components/ui/button";

export const DesignerModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
  mode,
}: any) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card w-[420px] rounded-2xl p-6 space-y-4 shadow-xl">

        <h2 className="text-lg font-semibold font-display">
          {mode === "add" ? "Add Designer" : "Edit Designer"}
        </h2>

        <Input
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />

        <Input
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />

        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <Input value={form.email} disabled placeholder="Email" />

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="copper" onClick={() => onSubmit(form)}>
            {mode === "add" ? "Create" : "Update"}
          </Button>
        </div>

      </div>
    </div>
  );
};