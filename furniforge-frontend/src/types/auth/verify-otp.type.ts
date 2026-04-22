import type { UserRole } from "../enums/user-role.enum";

export interface VerifyOtpRequestDTO {
  tempUserId: string;
  otp: string;
}

export interface VerifyOtpResponseDTO {
  message: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: UserRole;
    isVerified: boolean;
  };
}