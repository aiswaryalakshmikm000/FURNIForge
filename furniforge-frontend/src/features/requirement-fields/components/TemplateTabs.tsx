import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { StatusToggle } from "../../../shared/components/ui/statusToggle";
import type { RequirementFieldTemplateResponseDTO } from "../types/template.type";
import { useGetTabsByTemplateId } from "../hooks/use-get-tabs-by-templateId";
import { RequirementFieldList } from "./FieldList";

interface Props {
  template: RequirementFieldTemplateResponseDTO;
}

export function RequirementTemplateTabs({ template }: Props) {
  const [selectedTabId, setSelectedTabId] = useState<string>();

  const { data, isLoading } = useGetTabsByTemplateId({
    templateId: template.id,
  });

  const tabs = data?.data?.tabs ?? [];

  const activeTab = tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0];

  return (
    <>
      {/* Template Info */}
      <div className="px-6 py-2 bg-muted/10 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-3">
          <p className="text-xs text-muted-foreground">
            {template.description}
          </p>

          <span className="px-2 py-0.5 rounded-full bg-muted text-[10px] text-muted-foreground">
            {template.fieldCount} fields
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Template Status</span>

          <StatusToggle isActive={template.isActive} />
        </div>
      </div>

      {isLoading ? (
        <div className="p-4">Loading tabs...</div>
      ) : (
        <>
          {/* Tabs */}
<div className="px-6 py-3 border-b border-border">
  <div className="flex items-center gap-3">
    <div className="flex-1 overflow-x-auto scrollbar-thin">
      <div className="flex gap-2 min-w-max pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTabId(tab.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border ${
              activeTab?.id === tab.id
                ? "bg-accent/10 text-accent border-accent/30"
                : "bg-card border-border text-muted-foreground"
            }`}
          >
            {tab.name} ({tab.fieldCount})
          </button>
        ))}

        <button className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border border-dashed border-border text-muted-foreground hover:text-accent flex items-center gap-1">
          <Plus size={10} />
          Add Tab
        </button>
      </div>
    </div>

    {activeTab && (
      <div className="flex items-center gap-3 pl-3 border-l border-border shrink-0">
        <span className="text-xs text-muted-foreground">
          Tab Status
        </span>

        <StatusToggle isActive={activeTab.isActive} />

        <button className="p-1.5 rounded-lg hover:bg-muted">
          <Pencil size={14} />
        </button>

        <button className="p-1.5 rounded-lg hover:bg-muted text-destructive">
          <Trash2 size={14} />
        </button>
      </div>
    )}
  </div>
</div>

          {/* FIELD HEADER */}
          {activeTab && (
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="text-xs font-sans uppercase tracking-wider font-bold text-muted-foreground">
                {activeTab.name}
              </h3>

              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-muted text-sm">
                <Plus size={14} />
                Add Field
              </button>
            </div>
          )}

          <RequirementFieldList tabId={activeTab?.id} />
        </>
      )}
    </>
  );
}
