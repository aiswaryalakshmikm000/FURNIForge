import { useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../../shared/components/ui/alert-dialog";

import { Button } from "../../../../shared/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  leadSources: string[];
  deliverables: string[];

  onAddLead: (lead: {
    name: string;
    phone: string;
    location: string;
    types: string[];
    source: string;
  }) => void;
}

export const AddLeadDialog = ({
  open,
  onOpenChange,
  leadSources,
  deliverables,
  onAddLead,
}: Props) => {
  const [newLead, setNewLead] = useState({
    name: "",
    phone: "",
    location: "",
    types: [] as string[],
    source: "Website",
  });

  const inputClass =
    "w-full mt-1.5 px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent font-sans";

  const toggleType = (type: string) => {
    setNewLead((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  const handleSubmit = () => {
    if (
      !newLead.name.trim() ||
      !newLead.phone.trim() ||
      newLead.types.length === 0
    ) {
      return;
    }

    onAddLead(newLead);

    setNewLead({
      name: "",
      phone: "",
      location: "",
      types: [],
      source: "Website",
    });

    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display">
            Add Lead Manually
          </AlertDialogTitle>

          <AlertDialogDescription className="font-sans">
            Enter lead details. Select one or more projects.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground font-sans">
                Name *
              </label>

              <input
                value={newLead.name}
                onChange={(e) =>
                  setNewLead((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Full name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground font-sans">
                Phone *
              </label>

              <input
                value={newLead.phone}
                onChange={(e) =>
                  setNewLead((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="+91 ..."
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground font-sans">
                Location
              </label>

              <input
                value={newLead.location}
                onChange={(e) =>
                  setNewLead((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                placeholder="City, Area"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground font-sans">
                Lead Source
              </label>

              <select
                value={newLead.source}
                onChange={(e) =>
                  setNewLead((prev) => ({
                    ...prev,
                    source: e.target.value,
                  }))
                }
                className={inputClass}
              >
                {leadSources.map((source) => (
                  <option key={source}>{source}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground font-sans">
              Projects Interested In *
            </label>

            <div className="flex flex-wrap gap-2 mt-2">
              {deliverables.map((deliverable) => (
                <label
                  key={deliverable}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer transition-all text-sm font-sans ${
                    newLead.types.includes(deliverable)
                      ? "border-accent bg-accent/10 text-accent font-medium"
                      : "border-border text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={newLead.types.includes(deliverable)}
                    onChange={() => toggleType(deliverable)}
                    className="w-3.5 h-3.5 rounded border-border text-accent focus:ring-accent"
                  />

                  {deliverable}
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>

            <Button
              variant="copper"
              onClick={handleSubmit}
              disabled={
                !newLead.name.trim() ||
                !newLead.phone.trim() ||
                newLead.types.length === 0
              }
            >
              Add Lead
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
