import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { UnauthorizedError } from "../../../domain/errors/AppError";
import { UserMapper } from "../../mappers/user/UserMapper";
import type { IGetMeUseCase } from "./interfaces/IGetMeUseCase";
import type { UserResponseDTO } from "../../dtos/user/userResponseDTO";

@injectable()
export class GetMeUseCase implements IGetMeUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<{ user: UserResponseDTO }> {
    const user = await this._userRepository.findById(userId);

    if (!user) throw new UnauthorizedError();

    return { user: UserMapper.toResponse(user) };
  }
}
