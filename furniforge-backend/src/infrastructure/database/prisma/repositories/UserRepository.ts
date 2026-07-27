import prisma from "../client";
import type { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from "../../../../domain/entities/User";
import { BaseRepository } from "./BaseRepository";
import { injectable } from "inversify";
import { PrismaUserMapper } from "../mapper/PrismaUserMapper";
import { User as PrismaUser, Prisma } from "../../../../generated/prisma/index";
import { handlePrismaError } from "../errors/handlePrismaError";
import { DesignerOptionItem } from "../../../../domain/read-models/designer/DesignerOptionItem";

@injectable()
export class UserRepository extends BaseRepository< User, PrismaUser, Prisma.UserCreateInput, Prisma.UserUpdateInput, Prisma.UserFindFirstArgs, Prisma.UserFindManyArgs, Prisma.UserWhereInput> implements IUserRepository
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
        data: { passwordHash } 
      });
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findDesigners(): Promise<DesignerOptionItem[]> {
    try {
      return await this.model.findMany({
        where: {role: "DESIGNER", isBlocked: false, isVerified: true},
        select: { id: true, firstName: true, lastName: true },
        orderBy: {firstName: "asc"}},    
      );
    } catch (error) {
      handlePrismaError(error)
    }
  }

  async findByOAuthId(provider: string, oauthId: string): Promise<User | null> {
    try {
      return await this.findFirst({ where: {oauthProvider:provider, oauthId}} );
    } catch (error) {
      handlePrismaError(error)
    }
  }

  async linkGoogleAccount(userId: string, googleId: string): Promise<void> {
    try {
      await this.model.update({ 
        where: {id: userId}, 
        data: {oauthProvider: "google", oauthId: googleId}
      })
    } catch (error) {
      handlePrismaError(error)
    }
  }
}
