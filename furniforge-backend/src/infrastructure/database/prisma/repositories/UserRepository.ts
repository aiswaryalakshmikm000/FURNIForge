import prisma from "../client.js";
import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import { User } from "@domain/entities/User.js";
import { BaseRepository } from "./BaseRepository.js";
import { IUserMapper } from "@application/mappers/interfaces/IUserMapper.js";
import { injectable, inject } from "inversify";
import { TYPES } from "@infrastructure/di/types.js";
import {User as PrismaUser, Prisma} from "../../../../generated/prisma/index.js";

@injectable()
export class UserRepository extends BaseRepository<User, PrismaUser, Prisma.UserCreateInput, Prisma.UserUpdateInput> implements IUserRepository {
  protected model = prisma.user;

  constructor(
    @inject(TYPES.IUserMapper) private userMapper: IUserMapper
  ) {super()}

  protected toDomain(raw: PrismaUser): User {
    return this.userMapper.toDomain(raw);
  }

  protected toCreate(entity: User): Prisma.UserCreateInput {
    return this.userMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Partial<User>): Prisma.UserUpdateInput {
    return this.userMapper.toUpdatePersistence(entity);
  }

  async findByEmail(email: string): Promise<User | null> {
    const raw = await this.model.findUnique({ where: { email } });
    return raw ? this.toDomain(raw) : null;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const raw = await this.model.findUnique({ where: { phone } });
    return raw ? this.toDomain(raw) : null;
  }
}
