import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { UnauthorizedError } from "../../../domain/errors/AppError.js";
import { UserMapper } from "../../mappers/UserMapper.js";
import { IGetMeUseCase } from "./interfaces/IGetMeUseCase.js";
import { UserResponseDTO } from "../../dtos/user/userResponseDTO.js";

@injectable()
export class GetMeUseCase implements IGetMeUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private userRepository: IUserRepository
) {};

  async execute(userId: string): Promise<{user: UserResponseDTO}> { 
    const user = await this.userRepository.findById(userId);

    if (!user) throw new UnauthorizedError();

    return { user: UserMapper.toResponse(user) };
  }
}