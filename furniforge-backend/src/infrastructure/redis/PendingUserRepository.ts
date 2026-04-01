import RedisClient from "./RedisClient.js";
import { IPendingUserRepository } from "@domain/repositories/IPendingUserRepository.js";

export class RedisPendingUserRepository implements IPendingUserRepository {
  private client = RedisClient.getInstance();

  private getKey(email: string) {
    return `pending:${email}`;
  }

  async save(email: string, data: any, ttl: number): Promise<void> {
    await this.client.setex(
      this.getKey(email),
      ttl,
      JSON.stringify(data)
    );
  }

  async get(email: string): Promise<any | null> {
    const data = await this.client.get(this.getKey(email));
    return data ? JSON.parse(data) : null;
  }

  async delete(email: string): Promise<void> {
    await this.client.del(this.getKey(email));
  }
}