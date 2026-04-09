import { User } from "@domain/entities/User.js";
import { UserResponseDTO } from "@application/dtos/user/userResponseDTO.js";
import { IUserMapper } from "./interfaces/IUserMapper.js";
import {User as PrismaUser, Prisma} from "../../generated/prisma/index.js"


export class UserMapper implements IUserMapper {

    // ENTITY → RESPONSE 
    toResponse(user: User): UserResponseDTO {
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
  toPersistence(user: User): Prisma.UserCreateInput {
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
  toDomain(raw: PrismaUser): User {
  return User.fromPersistence(raw)
  }
}
