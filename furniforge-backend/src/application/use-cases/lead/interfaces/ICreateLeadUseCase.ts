import { User } from "../../../../domain/entities/User";

export interface ICreateLeadUseCase {
  execute(user: User): Promise<void>;
}