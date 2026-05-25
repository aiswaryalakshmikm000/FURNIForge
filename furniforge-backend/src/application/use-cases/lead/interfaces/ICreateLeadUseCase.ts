import { User } from "../../../../domain/entities/User";
import { Lead } from "../../../../generated/prisma";

export interface ICreateLeadUseCase {
  execute(user: User): Promise<Lead>;
}