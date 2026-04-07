import RedisClient from "./RedisClient.js";
import { IPendingUserRepository } from "@domain/repositories/IPendingUserRepository.js";
import { PendingUser } from "@domain/entities/PendingUser.js";

export class RedisPendingUserRepository implements IPendingUserRepository {
  private client = RedisClient.getInstance();

  private getKey(email: string) {
    return `pending:user:${email}`;
  }

  async save(email: string, data: PendingUser, ttl: number): Promise<void> {
    await this.client.setex(
      this.getKey(email),
      ttl,
      JSON.stringify(data)
    );
  }

  async get(email: string): Promise<PendingUser | null> {
    const data = await this.client.get(this.getKey(email));
    if(!data) return null
    const parsed = JSON.parse(data);
    return PendingUser.fromPersistence(parsed) 
  }

  async delete(email: string): Promise<void> {
    await this.client.del(this.getKey(email));
  }
}