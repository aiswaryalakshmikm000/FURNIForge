export interface GetTemplatesByDeliverableIdRequestDTO {
  deliverableId: string;
}

/**
 * 
 */

export interface RequirementFieldTemplateResponseDTO {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  tabCount: number;
  fieldCount: number;
}

export interface GetTemplateByDeliverableIdResponseDTO {
  templates: RequirementFieldTemplateResponseDTO[];
}