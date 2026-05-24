import { LeadSource, PackageType, type LeadResponseDTO } from "./lead.type";

export interface CreateLeadRequestDTO {
  name: string;
  email: string;
  phone: string;
  location: string;
  source: LeadSource;
  packageType?: PackageType;
  projectsInterestedIn: string[];
}


export type CreateLeadResponseDTO = LeadResponseDTO;