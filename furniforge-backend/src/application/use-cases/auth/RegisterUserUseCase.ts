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
import { IOTPRepository } from "@domain/repositories/IOTPRepository.js";
import { IPendingUserRepository } from "@domain/repositories/IPendingUserRepository.js";

export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordService: IPasswordService,
    private userMapper: IUserMapper,
    private otpService: IOtpService,
    private otpRepository: IOTPRepository,
    private pendingUserRepository: IPendingUserRepository,
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
      if (existingUserByPhone) {
        throw new ConflictError(ERROR_MESSAGES.AUTH.PHONE_ALREADY_EXISTS);
      }

      const pendingUser = await this.pendingUserRepository.get(emailVO.value);
      if (pendingUser) {
        const existingOtp = await this.otpRepository.getByUserId(pendingUser.tempUserId);
        if(existingOtp){
          await this.otpRepository.delete(existingOtp)
        }
        console.log("Resending OTP and overwriting pending user...");
      }

      const hashedPassword = await this.passwordService.hash(passwordVO.value);

      const tempUserId = `temp_${Date.now()}_${emailVO.value}`;

      await this.pendingUserRepository.save(
        emailVO.value,
        {
          tempUserId: tempUserId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: emailVO.value,
          phone: data.phone,
          passwordHash: hashedPassword,
          isVerified: false,
          createdAt: Date.now(),
        },
        300,
      );

      const otpCode = this.otpService.generateOTP();
      const otpToken = OtpToken.create(tempUserId, emailVO.value, otpCode, 300);
      
      await this.otpRepository.save(otpToken, 300);

      console.log("OTP:", otpCode);
      console.log("OTP:", otpToken);

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
      if (error instanceof AppError) {
        throw error;
      }
      console.log("RegisterUserUseCase Error:", error);
      throw new InternalServerError(
        ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
