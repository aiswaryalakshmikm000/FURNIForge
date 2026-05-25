import { Prisma, User as PrismaUser } from "../../../../generated/prisma";
import { User } from "../../../../domain/entities/User";
import { UserRole } from "../../../../domain/enums/UserRole";

export class PrismaUserMapper {

  static toDomain(raw: PrismaUser): User {
    console.log("todoman user")
    return User.fromPersistence({
      id: raw.id,
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      phone: raw.phone,
      passwordHash: raw.passwordHash,
      oauthProvider: raw.oauthProvider,
      oauthId: raw.oauthId,
      role: raw.role as UserRole,
      isVerified: raw.isVerified,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence(user: User): Prisma.UserCreateInput {
    console.log("to create persist user")
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      passwordHash: user.passwordHash,
      oauthProvider: user.oAuthProvider,
      oauthId: user.oauthId,
      role: user.role,
      isVerified: user.isVerified,
    };
  }

  static toUpdatePersistence(user: User): Prisma.UserUpdateInput {
    console.log("toupdate persitance")
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      passwordHash: user.passwordHash,
      role: user.role,
      oauthProvider: user.oAuthProvider,
      oauthId: user.oauthId,
      isVerified: user.isVerified,
    };
  }
}