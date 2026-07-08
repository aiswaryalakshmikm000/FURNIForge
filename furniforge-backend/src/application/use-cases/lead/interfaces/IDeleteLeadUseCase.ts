import type { LeadCommandRequestDTO, LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";

export interface IDeleteLeadUseCase {
  execute ( dto: LeadCommandRequestDTO ): Promise<LeadCommandResponseDTO> 
}