export interface GetTabsByTemplateIdRequestDTO {
  templateId: string;
}

/**
 * 
 */

export interface RequirementFieldTabResponseDTO {
  id: string;
  name: string;
  isActive: boolean;
  displayOrder: number;
  fieldCount: number;
}

export interface GetTabsByTemplateIdResponseDTO {
  tabs: RequirementFieldTabResponseDTO[];
}