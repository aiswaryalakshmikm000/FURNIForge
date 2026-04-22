import { PendingUser } from "../../domain/entities/PendingUser.js";

export interface IPendingUserRepository {
  save(email: string, data: PendingUser, ttl: number): Promise<void>;
  getByEmail(email: string): Promise<PendingUser | null>;
  getByTempUserId(tempUserId: string): Promise<PendingUser | null>;
  delete(email: string, tempUserId: string): Promise<void>;
}