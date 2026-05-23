import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IGetDesignerOptionsUseCase } from "./interfaces/IGetDesignerOptionsUseCase";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { GetDesignerOptionsResponseDTO } from "../../dtos/lead/GetDesignerOptionsDTO";

@injectable()
export class GetDesignerOptionsUseCase implements IGetDesignerOptionsUseCase {

  constructor(
    @inject(TYPES.IUserRepository) private readonly _userRepository: IUserRepository,
  ) {}

  async execute(): Promise<GetDesignerOptionsResponseDTO> {

    const designers =
      await this._userRepository.findDesigners();

    return {
      designers: designers.map((designer) => ({
        id: designer.id,
        fullName: `${designer.firstName} ${designer.lastName}`,
      }))
    };
  };
};