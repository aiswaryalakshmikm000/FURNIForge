export enum LeadStatus {
  UNASSIGNED = "UNASSIGNED",
  ASSIGNED = "ASSIGNED",
  DESIGNING = "DESIGNING",
  PROPOSAL_SENT = "PROPOSAL_SENT",
  CONVERTED = "CONVERTED",
  LOST = "LOST",
}

export enum LeadSource {
  EXTERNAL = "EXTERNAL",
  REFERRAL = "REFERRAL",
  SELF_REGISTERED = "SELF_REGISTERED",
}

export enum PackageType {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
}

export interface LeadResponseDTO {
  id: string;
  leadRegNo: string;
  name: string;
  email: string;
  phone: string;
  location: string | null;
  source: LeadSource;
  status: LeadStatus;
  projectsInterestedIn: string[];
  packageType: PackageType | null;
  assignedDesignerId: string | null;
  createdAt: string;
}