import { LeadResponseDTO } from "../dtos/lead/LeadResponseDTO.js";
import { LeadListItem } from "../../shared/read-models/lead/LeadListItems.js";

export class LeadResponseMapper {

  static toDTO(item: LeadListItem): LeadResponseDTO {
    return {
      id: item.id,
      leadRegNo: item.leadRegNo,
      name: item.name,
      email: item.email,
      phone: item.phone,
      location: item.location,
      source: item.source,
      status: item.status,
      projectsInterestedIn: item.projectsInterestedIn,
      packageType: item.packageType,
      assignedDesignerId: item.assignedDesignerId,
      createdAt: item.createdAt,
    };
  }
}