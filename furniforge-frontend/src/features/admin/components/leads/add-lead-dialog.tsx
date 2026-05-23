import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle} from "../../../../shared/components/ui/alert-dialog";

import { Button } from "../../../../shared/components/ui/button";
import { Input } from "../../../../shared/components/ui/input";
import { FormField } from "../../../../shared/components/common/forms/form-field";
import { Select } from "../../../../shared/components/common/forms/select";
import { CheckboxGroup } from "../../../../shared/components/common/forms/checkbox-group";

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
              <FormField label="Name" required>
                <Input
                  value={newLead.name}
                  onChange={(e) =>
                    setNewLead((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Full name"
                />
              </FormField>
            </div>

            <div>
              <FormField label="Phone" required>
                <Input
                  value={newLead.phone}
                  onChange={(e) =>
                    setNewLead((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="+91 ..."
                />
              </FormField>
            </div>

            <div>
              <FormField label="Location" required>
                <Input
                  value={newLead.location}
                  onChange={(e) =>
                    setNewLead((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="City, Area"
                />
              </FormField>
            </div>

            <div>
              <FormField label="Lead Source">
                <Select
                  value={newLead.source}
                  onChange={(e) =>
                    setNewLead((prev) => ({
                      ...prev,
                      source: e.target.value,
                    }))
                  }
                >
                  {leadSources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
          </div>

          <div>
            <FormField label="Projects Interested In" required>
              <CheckboxGroup
                options={deliverables}
                values={newLead.types}
                onChange={toggleType}
              />
            </FormField>
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
