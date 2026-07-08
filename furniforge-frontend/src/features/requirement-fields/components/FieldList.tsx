import { useState } from "react";
import { useGetFieldsByTabsId } from "../hooks/use-get-fields-by-tabId";
import type { FieldFormValues } from "../validation/field-form-validation";
import { RequirementFieldRow } from "./FieldRow";
import type { RequirementFieldResponseDTO } from "../types/field.type";
import { FieldFormRow } from "./FieldFormRow";

interface Props {
  tabId?: string;
  disabled?: boolean;
  onUpdateField: (fieldId: string, data: FieldFormValues) => Promise<void>;
  isUpdatingField: boolean;
  onSoftDeleteField: (field: RequirementFieldResponseDTO) => void;
}

export function RequirementFieldList({ tabId, disabled = false, onUpdateField, isUpdatingField, onSoftDeleteField }: Props) {
  const [editingField, setEditingField] = useState<RequirementFieldResponseDTO | null>(null);
  const { data, isLoading } = useGetFieldsByTabsId({ tabId: tabId! }, !!tabId);

  if (!tabId) return null;

  if (isLoading) {
    return <div className="p-6">Loading fields...</div>;
  }

  const fields = data?.data?.fields ?? [];

  if (fields.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        No fields found. Add your first field!
      </div>
    );
  }

  return (
  <div>
    {fields.map((field) => (
      <div key={field.id}>
        {editingField?.id === field.id ? (
          <FieldFormRow
            isLoading={isUpdatingField}
            initialData={{
              label: field.label,
              fieldType: field.fieldType,
              options: field.options?.join(", ") ?? "",
              defaultValue: field.defaultValue ?? "",
              isRequired: field.isRequired,
            }}
            onSubmit={async (data) => {
              await onUpdateField(field.id, data);
              setEditingField(null);
            }}
            onCancel={() => setEditingField(null)}
          />
        ) : (
          <RequirementFieldRow
            field={field}
            disabled={disabled}
            onEdit={() => setEditingField(field)}
            onDelete={() => onSoftDeleteField(field)}
          />
        )}
      </div>
    ))}
  </div>
);
}
