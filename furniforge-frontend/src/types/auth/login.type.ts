import type { UserRole } from "../enums/user-role.enum";

export interface LoginRequestDTO {
  email: string;
  password: string;
};

export interface LoginResponseDTO {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
  };
  message: string,
};

export interface GoogleAuthResponseDTO {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
  };
}