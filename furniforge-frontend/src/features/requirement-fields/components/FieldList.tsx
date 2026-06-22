import { useGetFieldsByTabsId } from "../hooks/use-get-fields-by-tabId";
import { RequirementFieldRow } from "./FieldRow";

interface Props {
  tabId?: string;
  disabled?: boolean;
}

export function RequirementFieldList({ tabId, disabled = false }: Props) {
  const { data, isLoading } = useGetFieldsByTabsId({ tabId: tabId! }, !!tabId);

  if (!tabId) return null;

  if (isLoading) {
    return <div className="p-6">Loading fields...</div>;
  }

  const fields = data?.data?.fields ?? [];

  if (fields.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        No fields found.
      </div>
    );
  }

  return (
    <div>
      {fields.map((field) => (
        <RequirementFieldRow key={field.id} field={field} disabled={disabled} />
      ))}
    </div>
  );
}
