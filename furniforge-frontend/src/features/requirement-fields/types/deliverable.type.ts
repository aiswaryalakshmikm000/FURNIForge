export interface GetRequirementFieldDeliverablesRequestDTO {
  search?: string;
}

/**
 * 
 */

export interface RequirementFieldDeliverableResponseDTO {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  templateCount: number;
}


export interface GetRequirementFieldDeliverablesResponseDTO {
  deliverables: RequirementFieldDeliverableResponseDTO[];
}