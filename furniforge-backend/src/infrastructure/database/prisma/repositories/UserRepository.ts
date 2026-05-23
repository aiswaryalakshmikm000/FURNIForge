import prisma from "../client";
import type { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from "../../../../domain/entities/User";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { PrismaUserMapper } from "../mapper/PrismaUserMapper";
import { User as PrismaUser, Prisma } from "../../../../generated/prisma/index";
import { handlePrismaError } from "../errors/handlePrismaError";

@injectable()
export class UserRepository
  extends BaseRepository<
    User,
    PrismaUser,
    Prisma.UserCreateInput,
    Prisma.UserUpdateInput
  >
  implements IUserRepository
{
  protected model = prisma.user;

  protected toDomain(raw: PrismaUser): User {
    return PrismaUserMapper.toDomain(raw);
  }

  protected toCreate(entity: User): Prisma.UserCreateInput {
    return PrismaUserMapper.toCreatePersistence(entity);
  }

  protected toUpdate(entity: User): Prisma.UserUpdateInput {
    return PrismaUserMapper.toUpdatePersistence(entity);
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
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async updatePassword(id: string, passwordHash: string): Promise<void> {
    try {
      await this.model.update({
        where: { id },
        data: { passwordHash },
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findDesigners(): Promise<User[]> {
    try {
      const raws = await this.model.findMany({
        where: {role: "DESIGNER", isActive: true, isBlocked: false, isVerified: true},
        orderBy: {firstName: "asc"}},    
      );
      return raws.map((raw) => this.toDomain(raw))
    } catch (error) {
      handlePrismaError(error)
    }
  }
}
