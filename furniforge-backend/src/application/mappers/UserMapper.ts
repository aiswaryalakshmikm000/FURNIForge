import { User } from "../../domain/entities/User";
import { UserResponseDTO } from "../../application/dtos/user/userResponseDTO";
import {User as PrismaUser, Prisma} from "../../generated/prisma/index"

export class UserMapper {

    // ENTITY → RESPONSE 
  static toResponse(user: User): UserResponseDTO {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      role: user.role,
      isVerified: user.isVerified,
    };
  }

  // ENTITY → DB
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

  // DB → ENTITY
  static toDomain(raw: PrismaUser): User {
  return User.fromPersistence(raw)
  }

  static toUpdatePersistence(user: Partial<User>): Prisma.UserUpdateInput {
    return {
      ...(user.firstName && { firstName: user.firstName }),
      ...(user.lastName && { lastName: user.lastName }),
      ...(user.phone && { phone: user.phone }),
      ...(user.passwordHash && { passwordHash: user.passwordHash }),
      ...(user.isVerified !== undefined && { isVerified: user.isVerified }),
    };
  }
}
