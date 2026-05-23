import { LeadSource, LeadStatus, PackageType } from "../../../domain/enums/Lead";

export interface LeadResponseDTO {
  id: string;
  leadRegNo: string;
  name: string;
  email: string;
  phone: string; 
  location: string | null;
  avatar: string | null,
  source: LeadSource;
  status: LeadStatus;
  projectsInterestedIn: string[];
  packageType: PackageType | null;
  assignedDesignerName: string | null;
  createdAt: Date;
}