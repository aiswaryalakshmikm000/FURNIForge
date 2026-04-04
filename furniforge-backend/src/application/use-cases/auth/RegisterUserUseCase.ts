import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import { RegisterUserDTO } from "@application/dtos/auth/RegisterUserDTO.js";
import { AppError } from "@domain/errors/AppError.js";
import { User } from "@domain/entities/User.js";
import { OtpToken } from "@domain/entities/OtpToken.js";
import { RegisterResponseDTO } from "@application/dtos/auth/RegisterResponseDTO.js";
import { IPasswordService } from "@domain/services/IPasswordService.js";
import { Email } from "@domain/value-objects/Email.js";
import { Password } from "@domain/value-objects/Password.js";
import { IRegisterUserUseCase } from "./interfaces/IRegisterUserUseCase.js";
import { IUserMapper } from "@application/mappers/interfaces/IUserMapper.js";
import { ConflictError, InternalServerError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { IOtpService } from "@domain/services/IOtpservice.js";
import { IPendingUserService } from "@domain/services/IPendingUserService.js";

export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordService: IPasswordService,
    private userMapper: IUserMapper,
    private otpService: IOtpService,
    private pendingUserService: IPendingUserService,
  ) {}

  async execute(data: RegisterUserDTO): Promise<RegisterResponseDTO> {
    try {
      const emailVO = new Email(data.email);
      const passwordVO = new Password(data.password);

      const existingUser = await this.userRepository.findByEmail(emailVO.value);
      if (existingUser && existingUser.isVerified) {
        throw new ConflictError(ERROR_MESSAGES.USER.ALREADY_EXISTS);
      }

      const existingUserByPhone = await this.userRepository.findByPhone(data.phone);
      if (existingUserByPhone && existingUserByPhone.isVerified) {
        throw new ConflictError(ERROR_MESSAGES.AUTH.PHONE_ALREADY_EXISTS);
      }

      const hashedPassword = await this.passwordService.hash(passwordVO.value);

      const { tempUserId } = await this.pendingUserService.createOrUpdate({
        email: emailVO.value,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        passwordHash: hashedPassword,
      });

      const otp = await this.otpService.generateAndHandleOtp(tempUserId, emailVO.value)
      console.log("OTP:", otp.otp);

      // const user = User.create({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: emailVO.value,
      //   phone: data.phone,
      //   passwordHash: hashedPassword,
      //   isVerified: true,
      // });

      // const createdUser = await this.userRepository.create(user);

      // return this.userMapper.toRegisterResponse(createdUser);

      return this.userMapper.toRegisterResponse({
        id: tempUserId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: emailVO.value,
      } as any);
    } catch (error) {
      if (error instanceof AppError) throw error;

      console.log("RegisterUserUseCase Error:", error);
      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    }
  }
}
