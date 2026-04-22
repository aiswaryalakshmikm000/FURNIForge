import type { UserRole } from "../enums/user-role.enum";

export type LoginRequestDTO = {
  email: string;
  password: string;
};

export type LoginResponseDTO = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
  };
  message: string,
};