import type { CreateLeadDTO } from "../../../dtos/lead/CreateLeadDTO";
import { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";

export interface ICreateManualLeadUseCase {
  execute( dto: CreateLeadDTO ): Promise<LeadCommandResponseDTO>;
}