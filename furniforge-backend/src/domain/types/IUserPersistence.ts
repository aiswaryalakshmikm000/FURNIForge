import { UserRole } from "../enums/UserRole";

export interface IUserPersistence {
  id: string;
  clientRegNo: string | null;
  designerRegNo: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string | null;
  passwordHash: string | null;
  oauthId: string | null;
  oauthProvider: string | null;
  role: UserRole;
  address: Record<string, unknown> | null;
  occupation: string | null;
  education: string | null;
  projectCount: number;
  totalRevenue: number;
  rating: number;
  isVerified: boolean;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}