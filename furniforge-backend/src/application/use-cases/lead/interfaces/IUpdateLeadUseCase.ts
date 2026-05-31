import { LeadResponseDTO } from "../../../dtos/lead/LeadResponseDTO";
import { UpdateLeadFDTO } from "../../../dtos/lead/UpdateLeadDTO";

export interface IUpdateLeadUseCase {
  execute( leadId: string, dto: UpdateLeadFDTO ): Promise<LeadResponseDTO>;
}