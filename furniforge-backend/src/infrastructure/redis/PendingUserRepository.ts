import type { IPendingUserRepository } from "../../domain/repositories/IPendingUserRepository";
import { PendingUser } from "../../domain/entities/PendingUser";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/di/types";
import type { Redis } from "ioredis";

@injectable()
export class RedisPendingUserRepository implements IPendingUserRepository {
  constructor(
    @inject(TYPES.Redis) private _redis: Redis
  ) {}
  
  private _getKey(email: string) {
    return `pending:user:${email}`;
  }

  async save(email: string, data: PendingUser, ttl: number): Promise<void> {
    const pipeline = this._redis.pipeline();

    pipeline.setex(`pending:user:${email}`, ttl, JSON.stringify(data.toPersistence()) );
    pipeline.setex(`pending:user:${data.tempUserId}`, ttl, JSON.stringify(data.toPersistence()));

    await pipeline.exec();
  }

  async getByEmail(email: string): Promise<PendingUser | null> {
    const data = await this._redis.get(this._getKey(email));
    if(!data) return null
    const parsed = JSON.parse(data);
    return PendingUser.fromPersistence(parsed) 
  }

  async getByTempUserId(tempUserId: string): Promise<PendingUser | null> {
    const data = await this._redis.get(`pending:user:${tempUserId}`);
    if(!data) return null;
    return PendingUser.fromPersistence(JSON.parse(data))

  }

  async delete(email: string, tempUserId: string): Promise<void> {
    const pipeline = this._redis.pipeline();

    pipeline.del(this._getKey(email));
    pipeline.del(`pending:user:${tempUserId}`);

    await pipeline.exec();
  }
}