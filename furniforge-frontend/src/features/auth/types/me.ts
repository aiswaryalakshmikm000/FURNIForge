import type { UserRole } from "../../../types/enums/user-role.enum";

export interface MeResponseDTO {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
  };
}