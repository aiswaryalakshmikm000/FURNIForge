import { PendingUser } from "@application/types/PendingUser.js";

export interface IPendingUserRepository {
  save(email: string, data: PendingUser, ttl: number): Promise<void>;
  get(email: string): Promise<PendingUser | null>;
  delete(email: string): Promise<void>;
}