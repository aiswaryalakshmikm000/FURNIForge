import prisma from "../client.js";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository.js";
import { User } from "../../../../domain/entities/User.js";
import { BaseRepository } from "./BaseRepository.js";
import { injectable } from "inversify";
import { UserMapper } from "../../../../application/mappers/UserMapper.js";
import {User as PrismaUser, Prisma} from "../../../../generated/prisma/index.js";
import { handlePrismaError } from "../errors/handlePrismaError.js";

@injectable()
export class UserRepository extends BaseRepository<User, PrismaUser, Prisma.UserCreateInput, Prisma.UserUpdateInput> implements IUserRepository {
  protected model = prisma.user;

  protected toDomain(raw: PrismaUser): User {
    return UserMapper.toDomain(raw);
  }

  protected toCreate(entity: User): Prisma.UserCreateInput {
    return UserMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: Partial<User>): Prisma.UserUpdateInput {
    return UserMapper.toUpdatePersistence(entity);
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const raw = await this.model.findUnique({ where: { email } });
      return raw ? this.toDomain(raw) : null;

    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findByPhone(phone: string): Promise<User | null> {
    try {
      const raw = await this.model.findUnique({ where: { phone } });
      return raw ? this.toDomain(raw) : null;

    } catch(error) {
      handlePrismaError(error)
    }
  }
}
