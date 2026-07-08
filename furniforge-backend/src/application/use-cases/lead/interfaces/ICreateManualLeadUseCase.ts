import type { CreateLeadDTO } from "../../../dtos/lead/CreateLeadDTO";
import type { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";

export interface ICreateManualLeadUseCase {
  execute( dto: CreateLeadDTO ): Promise<LeadCommandResponseDTO>;
}