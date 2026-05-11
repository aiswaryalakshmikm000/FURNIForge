import { User } from "../../../../domain/entities/User.js";

export interface ICreateLeadUseCase {
  execute(user: User): Promise<void>;
}