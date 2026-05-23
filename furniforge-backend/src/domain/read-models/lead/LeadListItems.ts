import { LeadSource, LeadStatus, PackageType } from "../../enums/Lead";

export interface LeadListItem {
  id: string;
  leadRegNo: string;
  name: string;
  email: string;
  phone: string;
  location: string | null;
  avatar: string | null
  source: LeadSource;
  status: LeadStatus;
  projectsInterestedIn: string[];
  packageType: PackageType | null;
  assignedDesignerName: string | null;
  createdAt: Date;
}