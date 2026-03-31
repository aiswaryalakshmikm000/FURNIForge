import {User} from '@domain/entities/User.js'

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: User): Promise<User>;
}