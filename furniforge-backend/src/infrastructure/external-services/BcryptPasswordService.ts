import bcrypt from 'bcrypt';
import { env } from '../../infrastructure/config/env';
import type { IPasswordService } from '../../domain/services/IPasswordService';

export class BcryptPasswordService implements IPasswordService {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, env.BCRYPT_SALT_ROUNDS);
  }
  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}