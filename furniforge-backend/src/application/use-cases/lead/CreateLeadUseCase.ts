import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import { Lead } from "../../../domain/entities/Lead";
import { LeadSource } from "../../../domain/enums/Lead";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import type { ICreateLeadUseCase } from "./interfaces/ICreateLeadUseCase";
import { User } from "../../../domain/entities/User";
import { generateRegNo } from "../../../shared/utils/generateRegNo";

@injectable()
export class CreateLeadUseCase implements ICreateLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private _leadRepository: ILeadRepository
  ) {}

  async execute(user: User): Promise<void> {

    const seq = await this._leadRepository.getNextLeadSequence();
    let leadRegNo = generateRegNo({prefix: "LEAD", sequence: seq})

    const lead = Lead.create({ 
        leadRegNo,
        name: `${user.firstName} ${user.lastName}`, 
        email: user.email.value,
        phone: user.phone,
        source: LeadSource.SELF_REGISTERED,
        clientId: user.id,
    });

    await this._leadRepository.create(lead);
  }
}