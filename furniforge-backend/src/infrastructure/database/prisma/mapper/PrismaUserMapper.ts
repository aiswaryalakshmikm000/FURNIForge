import { Prisma, User as PrismaUser } from "../../../../generated/prisma";
import { User } from "../../../../domain/entities/User";
import { UserRole } from "../../../../domain/enums/UserRole";

export class PrismaUserMapper {

  static toDomain(raw: PrismaUser): User {
    return User.fromPersistence({
      id: raw.id,
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      phone: raw.phone,
      passwordHash: raw.passwordHash,
      role: raw.role as UserRole,
      isVerified: raw.isVerified,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence(user: User): Prisma.UserCreateInput {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      passwordHash: user.passwordHash,
      role: user.role,
      isVerified: user.isVerified,
    };
  }

  static toUpdatePersistence(user: User): Prisma.UserUpdateInput {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      passwordHash: user.passwordHash,
      role: user.role,
      isVerified: user.isVerified,
    };
  }
}