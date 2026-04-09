import { IPendingUserService } from "@domain/services/IPendingUserService.js";
import { IPendingUserRepository } from "@domain/repositories/IPendingUserRepository.js";
import { PendingUser } from "@domain/entities/PendingUser.js";
import { env } from "@infrastructure/config/env.js";
import { injectable, inject } from "inversify";
import { TYPES } from "@infrastructure/di/types.js";
import type { Logger } from "winston";

@injectable()
export class PendingUserService implements IPendingUserService {
  private readonly TTL = env.OTP.EXPIRY;

  constructor(
    @inject(TYPES.IPendingUserRepository) private pendingUserRepository: IPendingUserRepository,
    @inject(TYPES.Logger) private logger: Logger,
  ) {}

  async createOrUpdate(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    passwordHash: string;
  }): Promise <{ tempUserId: string }> {
    const existing = await this.pendingUserRepository.get(data.email);

    if(existing && !existing.isExpired(this.TTL)){
      return {tempUserId: existing.tempUserId}
    } 

    const pendingUser = PendingUser.create(data);

    await this.pendingUserRepository.save(data.email, pendingUser, this.TTL);

    console.log("PEnding user:", `GET pending:user:${data.email}`)
    console.log("PEnding user:", `TTL pending:user:${data.email}`)
    console.log("TEMPUSERID:", `GET pending:user:${pendingUser.tempUserId}`)

    return { tempUserId: pendingUser.tempUserId };
  }


  async get(email: string): Promise<PendingUser | null>{
    return this.pendingUserRepository.get(email);
  }

  async delete(email: string): Promise<void> {
    return this.pendingUserRepository.delete(email);
  }
}