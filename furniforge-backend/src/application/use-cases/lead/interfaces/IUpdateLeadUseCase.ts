import { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";
import { UpdateLeadFDTO } from "../../../dtos/lead/UpdateLeadDTO";

export interface IUpdateLeadUseCase {
  execute( leadId: string, dto: UpdateLeadFDTO ): Promise<LeadCommandResponseDTO>;
}