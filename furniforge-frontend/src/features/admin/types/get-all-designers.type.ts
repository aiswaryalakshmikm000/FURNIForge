export interface GetAllDesignersRequestDTO {
  page: number;
  search?: string;
  status?: "ACTIVE" | "BLOCKED" | "INACTIVE";
  sortBy?: "rating" | "projectCount" | "revenue" | "createdAt" ;
  sortOrder?: "asc" | "desc";
}

export interface DesignerResponseDTO {
  id: string;
  designerRegNo: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string | null;
  location?: string | null;
  education?: string | null;
  rating: number;
  projectCount: number;
  totalRevenue: number;
  isActive: boolean;
  isBlocked: boolean;
  createdAt: string;
}

export interface GetAllDesignersResponseDTO {
  designers: DesignerResponseDTO[];
  total: number;
  page: number;
  limit: number;
}