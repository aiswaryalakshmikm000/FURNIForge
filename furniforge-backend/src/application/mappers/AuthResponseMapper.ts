// application/mappers/AuthResponseMapper.ts
import { UserResponseDTO } from "@application/dtos/user/userResponseDTO.js";

export class AuthResponseMapper {
  static toRegisterResponse(user: UserResponseDTO) {
    return {
      user,
      // accessToken,
      // refreshToken,
    };
  }
}