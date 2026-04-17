import { PendingUser } from "../../domain/entities/PendingUser.js";

export interface IPendingUserService {
  createOrUpdate(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    passwordHash: string;
  }): Promise<{ tempUserId: string }>;

  get(email: string): Promise<PendingUser | null>;
  
  delete(email: string): Promise<void>;
}