import { LeadSource, LeadStatus, PackageType } from "../enums/Lead";

export interface ILeadPersistence {
  id: string;
  leadRegNo: string;
  name: string;
  email: string;
  phone: string;
  location: string | null,
  source: LeadSource;
  status: LeadStatus;
  projectsInterestedIn: string[];
  packageType: PackageType | null;
  clientId: string | null;
  assignedDesignerId: string | null;
  assignedAt: Date | null;
  convertedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}