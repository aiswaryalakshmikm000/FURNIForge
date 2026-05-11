import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { Lead } from "../../../domain/entities/Lead.js";
import { LeadSource } from "../../../domain/enums/Lead.js";
import { ILeadRepository } from "../../../domain/repositories/ILeadRepository.js";
import { ICreateLeadUseCase } from "./interfaces/ICreateLeadUseCase.js";
import { User } from "../../../domain/entities/User.js";
import { generateRegNo } from "../../../shared/utils/generateRegNo.js";

@injectable()
export class CreateLeadUseCase implements ICreateLeadUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private leadRepository: ILeadRepository
  ) {}

  async execute(user: User): Promise<void> {

    const seq = await this.leadRepository.getNextLeadSequence();
    let leadRegNo = generateRegNo({prefix: "LEAD", sequence: seq})

    const lead = Lead.create({ 
        leadRegNo,
        name: `${user.firstName} ${user.lastName}`, 
        email: user.email.value,
        phone: user.phone,
        source: LeadSource.SELF_REGISTERED,
        clientId: user.id,
    });

    await this.leadRepository.create(lead);
  }
}