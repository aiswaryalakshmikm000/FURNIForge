import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { StatusToggle } from "../../../shared/components/ui/statusToggle";
import type { RequirementFieldTemplateResponseDTO } from "../types/template.type";
import { useGetTabsByTemplateId } from "../hooks/use-get-tabs-by-templateId";
import { RequirementFieldList } from "./FieldList";
import type { RequirementFieldTabResponseDTO } from "../types/tab.type";

interface Props {
  template: RequirementFieldTemplateResponseDTO;
  onToggleTemplateStatus: (
    template: RequirementFieldTemplateResponseDTO,
  ) => void;
  onAddTab: (templateId: string, nextOrder: number) => void;
  onEditTab: (tab: RequirementFieldTabResponseDTO) => void;
  onToggleTabStatus: (tab: RequirementFieldTabResponseDTO) => void;
  onSoftDeleteTab: (tab: RequirementFieldTabResponseDTO) => void;
}

export function RequirementTemplateTabs({
  template,
  onToggleTemplateStatus,
  onAddTab,
  onEditTab,
  onToggleTabStatus,
  onSoftDeleteTab,
}: Props) {
  const [selectedTabId, setSelectedTabId] = useState<string>();

  const { data, isLoading } = useGetTabsByTemplateId({
    templateId: template.id,
  });

  const tabs = data?.data?.tabs ?? [];
  const nextDisplayOrder =
    tabs.length > 0 ? Math.max(...tabs.map((tab) => tab.displayOrder)) + 1 : 1;

  const activeTab = tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0];
  const templateDisabled = !template.isActive;
  const tabDisabled = !activeTab?.isActive;
  const isDisabled = templateDisabled || tabDisabled;

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
          <div
            className={`px-6 py-3 border-b border-border ${
              templateDisabled ? "bg-destructive/5 opacity-70" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-1 overflow-x-auto scrollbar-thin">
                <div className="flex gap-2 min-w-max pb-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTabId(tab.id)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        activeTab?.id === tab.id
                          ? tabDisabled
                            ? "bg-muted text-muted-foreground/70 border-destructive/50 ring-1 ring-destructive/50"
                            : "bg-accent/10 text-accent border-accent/30"
                          : tabDisabled
                            ? "bg-card border-destructive/30 text-muted-foreground/50"
                            : "bg-card border-border text-muted-foreground"
                      }`}
                    >
                      {tab.name} ({tab.fieldCount})
                      {tabDisabled && (
                        <span className="ml-1 text-[10px] opacity-70">
                          (inactive)
                        </span>
                      )}
                    </button>
                  ))}

                  <button
                    disabled={templateDisabled}
                    onClick={() => onAddTab(template.id, nextDisplayOrder)}
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
                    <StatusToggle
                      onClick={() => onToggleTabStatus(activeTab)}
                      isActive={activeTab.isActive}
                    />
                  </div>

                  <button
                    disabled={isDisabled}
                    onClick={() => onEditTab(activeTab)}
                    className={`p-1.5 rounded-lg ${
                      isDisabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "hover:bg-muted hover:text-accent"
                    }`}
                  >
                    <Pencil size={14} />
                  </button>

                  <button
                    disabled={isDisabled}
                    onClick={() => onSoftDeleteTab(activeTab)}
                    className={`p-1.5 rounded-lg ${
                      isDisabled
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
                  isDisabled
                    ? "text-muted-foreground/50"
                    : "text-muted-foreground"
                }`}
              >
                {activeTab.name}

                {isDisabled && (
                  <span className="ml-2 text-destructive/70 normal-case tracking-normal">
                    {!template.isActive
                      ? "(template inactive)"
                      : "(tab inactive)"}
                  </span>
                )}
              </h3>

              <button
                disabled={isDisabled}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm ${
                  isDisabled
                    ? "border-destructive/30 text-muted-foreground/50 cursor-not-allowed"
                    : "border-border hover:bg-muted"
                }`}
              >
                <Plus size={14} />
                Add Field
              </button>
            </div>
          )}

          <div className={isDisabled ? "opacity-50" : ""}>
            <RequirementFieldList tabId={activeTab?.id} disabled={isDisabled} />
          </div>
        </>
      )}
    </>
  );
}
