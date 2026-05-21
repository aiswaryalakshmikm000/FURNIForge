import { IBaseRepository } from './IBaseRepository';
import {User} from '../../domain/entities/User'

export interface IUserRepository extends IBaseRepository<User>{
  findByEmail(email: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>
  updatePassword(id: string, passwordHash: string): Promise<void>;
}