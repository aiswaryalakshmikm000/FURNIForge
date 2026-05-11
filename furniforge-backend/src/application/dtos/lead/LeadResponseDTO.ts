
export interface LeadResponseDTO {
  id: string;
  leadRegNo: string;
  name: string;
  email: string;
  phone: string; 
  location: string | null;
  source: string;
  status: string;
  projectsInterestedIn: string[];
  packageType: string | null;
  assignedDesignerId: string | null;
  createdAt: Date;
}

