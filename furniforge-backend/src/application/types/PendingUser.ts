export class PendingUser {
  constructor(
    public tempUserId: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public phone: string,
    public passwordHash: string,
    public createdAt: number,
    public isVerified: boolean
  ) {}

  isExpired(ttlSeconds: number): boolean {
    return Date.now() > this.createdAt + ttlSeconds * 1000;
  }
}