import { useState } from "react";
import { ChevronDown, ChevronRight, Pencil, Trash2, Plus, Layout, } from "lucide-react";
import type { RequirementFieldDeliverableResponseDTO } from "../types/deliverable.type";
import { useGetTemplatesByDeliverableId } from "../hooks/use-get-templates-by-deliverableId";
import { RequirementTemplateTabs } from "./TemplateTabs";

interface Props {
  deliverable: RequirementFieldDeliverableResponseDTO;
  isOpen: boolean;
  onToggle: () => void;
}

export function RequirementDeliverableAccordion({
  deliverable,
  isOpen,
  onToggle,
}: Props) {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>();

  const { data, isLoading } = useGetTemplatesByDeliverableId(
    {
      deliverableId: deliverable.id,
    },
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

          <h2 className="text-lg font-bold font-display text-foreground">
            {deliverable.name}
          </h2>

          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-sans">
            {deliverable.templateCount} templates
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-sans">
          {deliverable.description}
        </p>
      </button>

      {isOpen && (
        <div className="border-t border-border">
          {isLoading ? (
            <div className="p-6">Loading templates...</div>
          ) : (
            <>
              <div className="px-6 py-3 bg-muted/20 flex items-center gap-2 border-b border-border">
                <Layout size={14} className="text-muted-foreground" />

                <div className="flex items-center gap-2 flex-wrap flex-1">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplateId(template.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedTemplate?.id === template.id
                          ? "bg-accent text-white"
                          : "bg-card border border-border text-muted-foreground"
                      }`}
                    >
                      {template.name}
                    </button>
                  ))}

                  <button className="px-3 py-1.5 rounded-lg text-xs font-medium border border-dashed border-border text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
                    <Plus size={10} />
                    Add Template
                  </button>
                </div>

                {selectedTemplate && (
                  <div className="flex items-center gap-1 ml-auto pl-2 border-l border-border">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Selected
                    </span>

                    <button className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-accent">
                      <Pencil size={14} />
                    </button>

                    <button className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-destructive">
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>

              {selectedTemplate && (
                <RequirementTemplateTabs template={selectedTemplate} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
