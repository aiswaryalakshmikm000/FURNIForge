import { User } from "@domain/entities/User.js";
import { UserResponseDTO } from "@application/dtos/user/userResponseDTO.js";
import { IUserMapper } from "./interfaces/IUserMapper.js";
import { RegisterResponseDTO } from "@application/dtos/auth/RegisterResponseDTO.js";

export class UserMapper implements IUserMapper {

    // ENTITY → RESPONSE (hide sensitive fields)
    toResponse(user: User): UserResponseDTO {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      role: user.role,
    };
  }

  toRegisterResponse(user: User): RegisterResponseDTO {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
    };
  }

  // ENTITY → DB
  toPersistence(user: User) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.value,
      phone: user.phone,
      passwordHash: user.passwordHash,
      role: user.role,
    };
  }

  // DB → ENTITY
  toDomain(raw: any): User {
  return User.fromPersistence(raw)
  }
}
