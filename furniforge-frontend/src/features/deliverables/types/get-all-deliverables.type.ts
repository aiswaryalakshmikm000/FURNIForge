export interface GetAllDeliverablesRequestDTO {
  page: number;
  search?: string;
  status?: "ACTIVE" | "INACTIVE";
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export interface DeliverableResponseDTO {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  createdAt: string;
}

export interface GetAllDeliverablesResponseDTO {
  deliverables: DeliverableResponseDTO[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}