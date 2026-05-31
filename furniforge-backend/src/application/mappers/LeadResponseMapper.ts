import { LeadResponseDTO } from "../dtos/lead/LeadResponseDTO";
import { LeadListItem } from "../../domain/read-models/lead/LeadListItems";
import { Lead } from "../../domain/entities/Lead";

export class LeadResponseMapper {

  static fromListItem(item: LeadListItem): LeadResponseDTO {
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


  static fromLead(lead: Lead): LeadResponseDTO {
    return {
      id: lead.id,
      leadRegNo: lead.leadRegNo,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      location: lead.location,
      avatar: null,
      source: lead.source,
      status: lead.status,
      projectsInterestedIn: lead.projectsInterestedIn,
      packageType: lead.packageType,
      assignedDesignerName: null,
      createdAt: lead.createdAt,
    };
  }
}