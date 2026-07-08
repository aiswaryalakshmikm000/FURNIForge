import { Lead } from "../../../domain/entities/Lead";
import type { LeadCommandResponseDTO } from "../../dtos/lead/LeadCommandResponseDTO";

export class LeadCommandMapper {
  static toResponse(lead: Lead): LeadCommandResponseDTO {
    return {
      id: lead.id,
    };
  }
}
