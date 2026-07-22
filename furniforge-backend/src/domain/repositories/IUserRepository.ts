import { IBaseRepository } from './IBaseRepository';
import {User} from '../../domain/entities/User'
import { DesignerOptionItem } from '../read-models/designer/DesignerOptionItem';
import { Prisma } from "../../generated/prisma";

export interface IUserRepository extends IBaseRepository<User, Prisma.UserWhereInput, Prisma.UserFindManyArgs>{
  findByEmail(email: string): Promise<User | null>;
  findByPhone(phone: string): Promise<User | null>
  updatePassword(id: string, passwordHash: string): Promise<void>;
  findDesigners(): Promise<DesignerOptionItem[]>;
  findByOAuthId(provider: string, oauthId: string): Promise<User | null>;
  linkGoogleAccount(userId: string, googleId: string): Promise<void>;
}