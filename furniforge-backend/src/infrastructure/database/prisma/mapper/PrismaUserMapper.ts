import { Prisma, User as PrismaUser } from "../../../../generated/prisma";
import { User } from "../../../../domain/entities/User";
import { UserRole } from "../../../../domain/enums/UserRole";

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.fromPersistence({
      id: raw.id,
      clientRegNo: raw.clientRegNo,
      designerRegNo: raw.designerRegNo,
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      phone: raw.phone,
      avatar: raw.avatar,
      passwordHash: raw.passwordHash,
      oauthProvider: raw.oauthProvider,
      oauthId: raw.oauthId,
      role: raw.role as UserRole,
      address: raw.address as Record<string, unknown> | null,
      occupation: raw.occupation,
      education: raw.education,
      projectCount: raw.projectCount,
      totalRevenue: Number(raw.totalRevenue),
      rating: raw.rating,
      isVerified: raw.isVerified,
      isBlocked: raw.isBlocked,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }

  static toCreatePersistence(user: User): Prisma.UserCreateInput {
    return {
      id: user.id,
      clientRegNo: user.clientRegNo,
      designerRegNo: user.designerRegNo,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      avatar: user.avatar,
      passwordHash: user.passwordHash,
      oauthProvider: user.oAuthProvider,
      oauthId: user.oauthId,
      role: user.role,
      address: user.address ? (user.address as Prisma.InputJsonValue) : Prisma.JsonNull,
      occupation: user.occupation,
      education: user.education,
      projectCount: user.projectCount,
      totalRevenue: user.totalRevenue,
      rating: user.rating,
      isVerified: user.isVerified,
      isBlocked: user.isBlocked,
    };
  }

  static toUpdatePersistence(user: User): Prisma.UserUpdateInput {
    return {
      clientRegNo: user.clientRegNo,
      designerRegNo: user.designerRegNo,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      avatar: user.avatar,
      passwordHash: user.passwordHash,
      oauthProvider: user.oAuthProvider,
      oauthId: user.oauthId,
      role: user.role,
      address: user.address ? (user.address as Prisma.InputJsonValue) : Prisma.JsonNull,
      occupation: user.occupation,
      education: user.education,
      projectCount: user.projectCount,
      totalRevenue: user.totalRevenue,
      rating: user.rating,
      isVerified: user.isVerified,
      isBlocked: user.isBlocked,
    };
  }
}
