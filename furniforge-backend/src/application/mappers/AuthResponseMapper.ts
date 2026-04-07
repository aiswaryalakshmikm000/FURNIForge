import { UserResponseDTO } from "@application/dtos/user/userResponseDTO.js";

export class AuthResponseMapper {
  static toAuthResponse(user: UserResponseDTO) {
    return {
      user,
      // accessToken,
      // refreshToken,
    };
  }
}