import { IPendingUserService } from "@domain/services/IPendingUserService.js";
import { IPendingUserRepository } from "@domain/repositories/IPendingUserRepository.js";
import { PendingUser } from "@application/types/PendingUser.js";

export class PendingUserService implements IPendingUserService {
  private readonly TTL = 300;

  constructor(
    private pendingUserRepository: IPendingUserRepository
  ) {}

  async createOrUpdate(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    passwordHash: string;
  }): Promise <{ tempUserId: string }> {
    const existing = await this.pendingUserRepository.get(data.email);

    if(existing){
      return {tempUserId: existing.tempUserId}
    } 
    const tempUserId = `temp_${Date.now()}_${data.email}`;

    const pendingUser = new PendingUser(
      tempUserId,
      data.email,
      data.firstName,
      data.lastName,
      data.phone,
      data.passwordHash,
      Date.now(),
      false
    );

    await this.pendingUserRepository.save(data.email, pendingUser, this.TTL);

    return { tempUserId };
  }


  async get(email: string): Promise<PendingUser | null>{
    return this.pendingUserRepository.get(email);
  }

  async delete(email: string): Promise<void> {
    return this.pendingUserRepository.delete(email);
  }
}