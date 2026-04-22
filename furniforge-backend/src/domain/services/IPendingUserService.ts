import { PendingUser } from "../../domain/entities/PendingUser.js";

export interface IPendingUserService {
  createOrUpdate(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    passwordHash: string;
  }): Promise<{ tempUserId: string, email: string }>;

  getByEmail(email: string): Promise<PendingUser | null>;

  getByTempUserId(tempUserId: string): Promise<PendingUser | null>;
  
  delete(email: string, tempUserId: string): Promise<void>;
}