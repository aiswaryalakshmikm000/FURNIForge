
export type SessionStatus = "active" | "rotated" | "revoked";

export interface SessionData {
  userId: string;
  status: SessionStatus
}

export interface ISessionService {
  create(sessionId: string, data: SessionData, ttl: number): Promise<void>;
  get(sessionId: string): Promise<SessionData | null>;
  markAsRotated(sessionId: string): Promise<void>;
  invalidateAllUserSessions(userId: string): Promise<void>;
  revoke(sessionId: string): Promise<void> ;
}