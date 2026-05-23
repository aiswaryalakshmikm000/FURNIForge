import { LeadResponseDTO } from "../dtos/lead/LeadResponseDTO";
import { LeadListItem } from "../../domain/read-models/lead/LeadListItems";

export class LeadResponseMapper {

  static toDTO(item: LeadListItem): LeadResponseDTO {
    return {
      id: item.id,
      leadRegNo: item.leadRegNo,
      name: item.name,
      email: item.email,
      phone: item.phone,
      location: item.location,
      avatar: item.avatar,
      source: item.source,
      status: item.status,
      projectsInterestedIn: item.projectsInterestedIn,
      packageType: item.packageType,
      assignedDesignerName: item.assignedDesignerName,
      createdAt: item.createdAt,
    };
  }
}