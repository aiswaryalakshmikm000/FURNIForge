import { User } from "../../domain/entities/User";
import { UserResponseDTO } from "../../application/dtos/user/userResponseDTO";

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
}
