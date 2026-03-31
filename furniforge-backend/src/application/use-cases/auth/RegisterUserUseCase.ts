import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import { RegisterUserDTO } from "@application/dtos/auth/RegisterUserDTO.js";
import { AppError } from "@domain/errors/AppError.js";
import { User } from "@domain/entities/User.js";
import { RegisterResponseDTO } from "@application/dtos/auth/RegisterResponseDTO.js";
import { IPasswordService } from "@domain/services/IPasswordService.js";
import { Email } from "@domain/value-objects/Email.js";
import { Password } from "@domain/value-objects/Password.js";
import { IRegisterUserUseCase } from "./interfaces/IRegisterUserUseCase.js";
import { IUserMapper } from "@application/mappers/interfaces/IUserMapper.js";
import { ConflictError, InternalServerError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordService: IPasswordService,
    private userMapper: IUserMapper
  ) {}

  async execute(data: RegisterUserDTO): Promise<RegisterResponseDTO> {
    try {
      const emailVO = new Email(data.email);
      const passwordVO = new Password(data.password);

      //check existing user
      const existingUser = await this.userRepository.findByEmail(emailVO.value);
      if (existingUser) {
        throw new ConflictError(ERROR_MESSAGES.USER.ALREADY_EXISTS);
      }

      const hashedPassword = await this.passwordService.hash(
        passwordVO.value,
      );

      //create entity
      const user = User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: emailVO.value,
        phone: data.phone,
        passwordHash: hashedPassword,
      });

      //save
      const createdUser = await this.userRepository.create(user);

      //map response
      return this.userMapper.toRegisterResponse(createdUser);

    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      console.log("RegisterUserUseCase Error:", error);
      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    }
  }
}
