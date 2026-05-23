import type { ISessionService, SessionData } from "../../domain/services/ISessionService";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/di/types";
import type { Redis } from "ioredis";

@injectable()
export class RedisSessionRepository implements ISessionService {
  constructor(
    @inject(TYPES.Redis) private _redis: Redis
  ){}

  private _sessionKey(sessionId: string) { //session data
    return `session:${sessionId}`;
  }

  private _userSessionsKey(userId: string) { //set of sessionId
    return `user:sessions:${userId}`;
  }

  async create(sessionId: string, data: SessionData, ttl: number): Promise<void> {
    const pipeline = this._redis.pipeline();

    pipeline.setex(this._sessionKey(sessionId), ttl, JSON.stringify(data));
    pipeline.sadd(this._userSessionsKey(data.userId), sessionId); //user -session mapping
    pipeline.expire(this._userSessionsKey(data.userId), ttl);

    await pipeline.exec();
  }

  async get(sessionId: string): Promise<SessionData | null> {
    const data = await this._redis.get(this._sessionKey(sessionId));
    return data ? JSON.parse(data) : null;
  }

  async markAsRotated(sessionId: string): Promise<void> {
    const session = await this.get(sessionId);
    if (!session) return;

    const ttl = await this._redis.ttl(this._sessionKey(sessionId));
    if (ttl <= 0) return;

    await this._redis.setex(
      this._sessionKey(sessionId),
      ttl,
      JSON.stringify({ ...session, status: "rotated" })
    );
  }

  async invalidateAllUserSessions(userId: string): Promise<void> {
    const sessionIds = await this._redis.smembers(this._userSessionsKey(userId));

    if (!sessionIds.length) return;

    const pipeline = this._redis.pipeline();

    for (const sessionId of sessionIds) {
      pipeline.set(
        this._sessionKey(sessionId),
        JSON.stringify({ userId, status: "revoked" })
      );
    }

    pipeline.del(this._userSessionsKey(userId));

    await pipeline.exec();
  }

  async revoke(sessionId: string): Promise <void> {
    const session = await this.get(sessionId);
    if (!session) return;

    const ttl = await this._redis.ttl(this._sessionKey(sessionId));
    if (ttl <= 0) return;

    await this._redis.setex(
      this._sessionKey(sessionId),
      ttl,
      JSON.stringify({ ...session, status: "revoked" })
    );
  }
}