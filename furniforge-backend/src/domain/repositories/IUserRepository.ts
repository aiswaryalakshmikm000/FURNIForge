import { IBaseRepository } from './IBaseRepository.js';
import {User} from '@domain/entities/User.js'

export interface IUserRepository extends IBaseRepository<User>{
  findByEmail(email: string): Promise<User | null>;
  create(data: User): Promise<User>;
  findByPhone(phone: string): Promise<User | null>
}