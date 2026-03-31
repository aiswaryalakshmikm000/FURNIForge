import bcrypt from 'bcrypt';
import { env } from '@infrastructure/config/env.js';
import { IPasswordService } from '@domain/services/IPasswordService.js';

export class BcryptPasswordService implements IPasswordService {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, env.BCRYPT_SALT_ROUNDS);
  }
}