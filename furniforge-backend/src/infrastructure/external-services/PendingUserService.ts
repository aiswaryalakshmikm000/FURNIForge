import { IPendingUserService } from "../../domain/services/IPendingUserService.js";
import { IPendingUserRepository } from "../../domain/repositories/IPendingUserRepository.js";
import { PendingUser } from "../../domain/entities/PendingUser.js";
import { env } from "../../infrastructure/config/env.js";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/di/types.js";
import { ILogger } from "../../domain/services/ILogger.js";

@injectable()
export class PendingUserService implements IPendingUserService {
  private readonly TTL = env.OTP.EXPIRY; 

  constructor(
    @inject(TYPES.IPendingUserRepository) private pendingUserRepository: IPendingUserRepository,
    @inject(TYPES.ILogger) private logger: ILogger,
  ) {}

  async createOrUpdate(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    passwordHash: string;
  }): Promise <{ tempUserId: string, email: string }> {
    const existing = await this.pendingUserRepository.getByEmail(data.email);

    if(existing && !existing.isExpired(this.TTL)){
      return {tempUserId: existing.tempUserId, email: existing.email}
    } 

    const pendingUser = PendingUser.create(data);

    await this.pendingUserRepository.save(pendingUser.email, pendingUser, this.TTL);

    console.log("PEnding user:", `GET pending:user:${data.email}`)
    console.log("PEnding user:", `TTL pending:user:${data.email}`)
    console.log("TEMPUSERID:", `GET pending:user:${pendingUser.tempUserId}`)

    return { tempUserId: pendingUser.tempUserId, email: pendingUser.email };
  }


  async getByEmail(email: string): Promise<PendingUser | null>{
    return this.pendingUserRepository.getByEmail(email);
  }

  async getByTempUserId(tempUserId: string): Promise<PendingUser | null>{
    return this.pendingUserRepository.getByTempUserId(tempUserId);
  }

  async delete(email: string, tempUserId: string): Promise<void> {
    return this.pendingUserRepository.delete(email, tempUserId);
  }
}