import type { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";
import type { UpdateLeadFDTO } from "../../../dtos/lead/UpdateLeadDTO";

export interface IUpdateLeadUseCase {
  execute( leadId: string, dto: UpdateLeadFDTO ): Promise<LeadCommandResponseDTO>;
}