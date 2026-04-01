export interface IPendingUserRepository {
  save(email: string, data: any, ttl: number): Promise<void>;
  get(email: string): Promise<any | null>;
  delete(email: string): Promise<void>;
}