import { IPendingUserRepository } from "../../domain/repositories/IPendingUserRepository.js";
import { PendingUser } from "../../domain/entities/PendingUser.js";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/di/types.js";
import type { Redis } from "ioredis";

@injectable()
export class RedisPendingUserRepository implements IPendingUserRepository {
  constructor(
    @inject(TYPES.Redis) private redis: Redis
  ) {}
  
  private getKey(email: string) {
    return `pending:user:${email}`;
  }

  async save(email: string, data: PendingUser, ttl: number): Promise<void> {
    await this.redis.setex( this.getKey(email), ttl, JSON.stringify(data) );
  }

  async get(email: string): Promise<PendingUser | null> {
    const data = await this.redis.get(this.getKey(email));
    if(!data) return null
    const parsed = JSON.parse(data);
    return PendingUser.fromPersistence(parsed) 
  }

  async delete(email: string): Promise<void> {
    await this.redis.del(this.getKey(email));
  }
}