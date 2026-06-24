import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Pencil,
  Trash2,
  Plus,
  Layout,
} from "lucide-react";
import type { RequirementFieldDeliverableResponseDTO } from "../types/deliverable.type";
import { useGetTemplatesByDeliverableId } from "../hooks/use-get-templates-by-deliverableId";
import { RequirementTemplateTabs } from "./TemplateTabs";
import type { RequirementFieldTemplateResponseDTO } from "../types/template.type";
import type { RequirementFieldTabResponseDTO } from "../types/tab.type";
import type { FieldFormValues } from "../validation/field-form-validation";

interface Props {
  deliverable: RequirementFieldDeliverableResponseDTO;
  isOpen: boolean;
  onToggle: () => void;
  onAddTemplate: (deliverableId: string) => void;
  onEditTemplate: (template: RequirementFieldTemplateResponseDTO) => void;
  onSoftDeleteTemplate: (template: RequirementFieldTemplateResponseDTO) => void;
  onToggleTemplateStatus: (template: RequirementFieldTemplateResponseDTO) => void;
  onAddTab: (templateId: string, nextOrder: number) => void;
  onEditTab: (tab: RequirementFieldTabResponseDTO) => void;
  onToggleTabStatus: (tab: RequirementFieldTabResponseDTO) => void;
  onSoftDeleteTab: (tab: RequirementFieldTabResponseDTO) => void;
  onCreateField: (tabId: string, data: FieldFormValues) => Promise<void>;
  isCreatingField: boolean;
  onUpdateField: (fieldId: string, data: FieldFormValues) => Promise<void>;
  isUpdatingField: boolean;
}

export function RequirementDeliverableAccordion({
  deliverable,
  isOpen,
  onToggle,
  onAddTemplate,
  onEditTemplate,
  onSoftDeleteTemplate,
  onToggleTemplateStatus,
  onAddTab,
  onEditTab,
  onToggleTabStatus,
  onSoftDeleteTab,
  onCreateField,
  isCreatingField,
  onUpdateField,
  isUpdatingField,
}: Props) {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>();

  const { data, isLoading } = useGetTemplatesByDeliverableId(
    { deliverableId: deliverable.id },
    isOpen,
  );

  const templates = data?.data?.templates ?? [];

  const selectedTemplate =
    templates.find((t) => t.id === selectedTemplateId) ?? templates[0];

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
            <ChevronDown size={18} className="text-accent" />
          ) : (
            <ChevronRight size={18} className="text-muted-foreground" />
          )}

          <h2 className="text-lg font-bold">{deliverable.name}</h2>

          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs">
            {deliverable.templateCount} templates
          </span>
        </div>

        <p className="text-xs text-muted-foreground max-w-[350px] truncate">
          {deliverable.description}
        </p>
      </button>

      {isOpen && (
        <div className="border-t border-border">
          {isLoading ? (
            <div className="p-6">Loading templates...</div>
          ) : (
            <>
              {/* TEMPLATE BAR */}
              <div className="px-6 py-3 bg-muted/20 border-b border-border">
                <div className="flex items-center gap-2">
                  <Layout
                    size={14}
                    className="text-muted-foreground shrink-0"
                  />

                  <div className="flex-1 overflow-x-auto scrollbar-thin">
                    <div className="flex items-center gap-2 min-w-max pb-2">
                      {templates.map((template) => (
                        <button
                          key={template.id}
                          onClick={() => setSelectedTemplateId(template.id)}
                          className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                            selectedTemplate?.id === template.id
                              ? !template.isActive
                                ? "bg-muted text-muted-foreground/70 border border-destructive/50 ring-1 ring-destructive/50"
                                : "bg-accent text-white"
                              : !template.isActive
                                ? "bg-card border border-destructive/30 text-muted-foreground/50"
                                : "bg-card border border-border text-muted-foreground"
                          }`}
                        >
                          {template.name}
                          {!template.isActive && (
                            <span className="text-[10px] opacity-70">
                              (inactive)
                            </span>
                          )}
                        </button>
                      ))}

                      <button
                        onClick={() => onAddTemplate(deliverable.id)}
                        className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border border-dashed border-border text-muted-foreground hover:text-accent flex items-center gap-1"
                      >
                        <Plus size={10} />
                        Add Template
                      </button>
                    </div>
                  </div>

                  {selectedTemplate && (
                    <div className="flex items-center gap-1 pl-3 border-l border-border shrink-0">
                      <span className="text-[10px] uppercase text-muted-foreground">
                        Selected
                      </span>

                      <button
                        disabled={!selectedTemplate.isActive}
                        onClick={() => onEditTemplate(selectedTemplate)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          !selectedTemplate.isActive
                            ? "text-muted-foreground/40 cursor-not-allowed"
                            : "hover:bg-muted text-muted-foreground hover:text-accent"
                        }`}
                      >
                        <Pencil size={14} />
                      </button>

                      <button
                        onClick={() => onSoftDeleteTemplate(selectedTemplate)}
                        className="p-1.5 rounded-lg hover:bg-muted text-destructive"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {selectedTemplate && (
                <RequirementTemplateTabs
                  template={selectedTemplate}
                  onToggleTemplateStatus={onToggleTemplateStatus}
                  onAddTab={onAddTab}
                  onEditTab={onEditTab}
                  onToggleTabStatus={onToggleTabStatus}
                  onSoftDeleteTab={onSoftDeleteTab}
                  onCreateField={onCreateField}
                  isCreatingField={isCreatingField}
                  onUpdateField={onUpdateField}
                  isUpdatingField={isUpdatingField}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
