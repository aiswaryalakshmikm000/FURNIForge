import { ISessionService, SessionData } from "@domain/services/ISessionService.js";
import { inject, injectable } from "inversify";
import { TYPES } from "@infrastructure/di/types.js";
import type { Redis } from "ioredis";

@injectable()
export class RedisSessionRepository implements ISessionService {
  constructor(
    @inject(TYPES.Redis) private redis: Redis
  ){}

  private sessionKey(sessionId: string) { //session data
    return `session:${sessionId}`;
  }

  private userSessionsKey(userId: string) { //set of sessionId
    return `user:sessions:${userId}`;
  }

  async create(sessionId: string, data: SessionData, ttl: number): Promise<void> {
    const pipeline = this.redis.pipeline();

    pipeline.setex(this.sessionKey(sessionId), ttl, JSON.stringify(data));
    pipeline.sadd(this.userSessionsKey(data.userId), sessionId); //user -session mapping
    pipeline.expire(this.userSessionsKey(data.userId), ttl);

    await pipeline.exec();
  }

  async get(sessionId: string): Promise<SessionData | null> {
    const data = await this.redis.get(this.sessionKey(sessionId));
    return data ? JSON.parse(data) : null;
  }

  async markAsRotated(sessionId: string): Promise<void> {
    const session = await this.get(sessionId);
    if (!session) return;

    const ttl = await this.redis.ttl(this.sessionKey(sessionId));
    if (ttl <= 0) return;

    await this.redis.setex(
      this.sessionKey(sessionId),
      ttl,
      JSON.stringify({ ...session, status: "rotated" })
    );
  }

  async invalidateAllUserSessions(userId: string): Promise<void> {
    const sessionIds = await this.redis.smembers(this.userSessionsKey(userId));

    if (!sessionIds.length) return;

    const pipeline = this.redis.pipeline();

    for (const sessionId of sessionIds) {
      pipeline.set(
        this.sessionKey(sessionId),
        JSON.stringify({ userId, status: "revoked" })
      );
    }

    pipeline.del(this.userSessionsKey(userId));

    await pipeline.exec();
  }

  async revoke(sessionId: string): Promise <void> {
    const session = await this.get(sessionId);
    if (!session) return;

    const ttl = await this.redis.ttl(this.sessionKey(sessionId));
    if (ttl <= 0) return;

    await this.redis.setex(
      this.sessionKey(sessionId),
      ttl,
      JSON.stringify({ ...session, status: "revoked" })
    );
  }
}