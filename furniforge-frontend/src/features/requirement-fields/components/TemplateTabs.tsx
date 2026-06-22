import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { StatusToggle } from "../../../shared/components/ui/statusToggle";
import type { RequirementFieldTemplateResponseDTO } from "../types/template.type";
import { useGetTabsByTemplateId } from "../hooks/use-get-tabs-by-templateId";
import { RequirementFieldList } from "./FieldList";

interface Props {
  template: RequirementFieldTemplateResponseDTO;
  onToggleTemplateStatus: (
    template: RequirementFieldTemplateResponseDTO,
  ) => void;
}

export function RequirementTemplateTabs({
  template,
  onToggleTemplateStatus,
}: Props) {
  const [selectedTabId, setSelectedTabId] = useState<string>();

  const { data, isLoading } = useGetTabsByTemplateId({
    templateId: template.id,
  });

  const tabs = data?.data?.tabs ?? [];

  const activeTab = tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0];
  const templateDisabled = !template.isActive;

  return (
    <>
      {/* Template Info */}
      <div
        className={`px-6 py-2 bg-muted/10 flex items-center justify-between border-b border-border ${
          templateDisabled ? "opacity-70" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <p
            className={`text-xs ${
              templateDisabled
                ? "text-muted-foreground/50"
                : "text-muted-foreground"
            }`}
          >
            {template.description}
          </p>

          <span
            className={`px-2 py-0.5 rounded-full bg-muted text-[10px] ${
              templateDisabled
                ? "text-muted-foreground/50"
                : "text-muted-foreground"
            }`}
          >
            {template.fieldCount} fields
          </span>

          {templateDisabled && (
            <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-[10px] flex items-center gap-1">
              ⛔ Inactive — edits disabled
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Template Status</span>

          <StatusToggle
            isActive={template.isActive}
            onClick={() => onToggleTemplateStatus(template)}
          />
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
                      className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        activeTab?.id === tab.id
                          ? templateDisabled
                            ? "bg-muted text-muted-foreground/70 border-destructive/50 ring-1 ring-destructive/50"
                            : "bg-accent/10 text-accent border-accent/30"
                          : templateDisabled
                            ? "bg-card border-destructive/30 text-muted-foreground/50"
                            : "bg-card border-border text-muted-foreground"
                      }`}
                    >
                      {tab.name} ({tab.fieldCount})
                    </button>
                  ))}

                  <button
                    disabled={templateDisabled}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border border-dashed flex items-center gap-1 ${
                      templateDisabled
                        ? "border-destructive/30 text-muted-foreground/50 cursor-not-allowed"
                        : "border-border text-muted-foreground hover:text-accent"
                    }`}
                  >
                    <Plus size={10} />
                    Add Tab
                  </button>
                </div>
              </div>

              {activeTab && (
                <div className="flex items-center gap-3 pl-3 border-l border-border shrink-0">
                  <span
                    className={`text-xs ${
                      templateDisabled
                        ? "text-muted-foreground/50"
                        : "text-muted-foreground"
                    }`}
                  >
                    Tab Status
                  </span>

                  <div
                    className={
                      templateDisabled ? "opacity-50 pointer-events-none" : ""
                    }
                  >
                    <StatusToggle isActive={activeTab.isActive} />
                  </div>

                  <button
                    disabled={templateDisabled}
                    className={`p-1.5 rounded-lg ${
                      templateDisabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "hover:bg-muted hover:text-accent"
                    }`}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    disabled={templateDisabled}
                    className={`p-1.5 rounded-lg ${
                      templateDisabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "hover:bg-muted text-destructive"
                    }`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FIELD HEADER */}
          {activeTab && (
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3
                className={`text-xs font-sans uppercase tracking-wider font-bold ${
                  templateDisabled
                    ? "text-muted-foreground/50"
                    : "text-muted-foreground"
                }`}
              >
                {activeTab.name}

                {templateDisabled && (
                  <span className="ml-2 text-destructive/70 normal-case tracking-normal">
                    (disabled)
                  </span>
                )}
              </h3>

              <button
                disabled={templateDisabled}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm ${
                  templateDisabled
                    ? "border-destructive/30 text-muted-foreground/50 cursor-not-allowed"
                    : "border-border hover:bg-muted"
                }`}
              >
                <Plus size={14} />
                Add Field
              </button>
            </div>
          )}

          <div className={templateDisabled ? "opacity-50" : ""}>
            <RequirementFieldList
              tabId={activeTab?.id}
              disabled={templateDisabled}
            />
          </div>
        </>
      )}
    </>
  );
}
