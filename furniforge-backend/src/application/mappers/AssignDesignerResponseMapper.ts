import { Lead } from "../../domain/entities/Lead";
import { User } from "../../domain/entities/User";
import { AssignDesignerResponseDTO } from "../dtos/lead/AssignDesignerDTO";

export class AssignDesignerResponseMapper {
  static toResponse(lead: Lead, designer: User): AssignDesignerResponseDTO {
    return {
      leadId: lead.id,
      designerId: designer.id,
      designerName: `${designer.firstName} ${designer.lastName}`,
      status: lead.status,
      assignedAt: lead.assignedAt!,
    };
  }
}
