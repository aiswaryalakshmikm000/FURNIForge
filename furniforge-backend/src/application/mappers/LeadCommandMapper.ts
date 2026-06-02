import { Lead } from "../../domain/entities/Lead";
import { CreateLeadResponseDTO } from "../dtos/lead/CreateLeadDTO";
import { UpdateLeadResponseDTO } from "../dtos/lead/UpdateLeadDTO";

export class LeadCommandMapper {
  static toCreateResponse(lead: Lead): CreateLeadResponseDTO {
    return {
      id: lead.id,
    };
  }

  static toUpdateResponse(lead: Lead): UpdateLeadResponseDTO {
    return {
      id: lead.id,
    };
  }
}
