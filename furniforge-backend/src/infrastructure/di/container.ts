import { Container } from "inversify";
import { TYPES } from "./types.js";
import { UserMapper } from "@application/mappers/UserMapper.js";
import { UserRepository } from "@infrastructure/database/prisma/repositories/UserRepository.js";
import { RedisOTPRepository } from "@infrastructure/redis/RedisOTPRepository.js";
import { RedisPendingUserRepository } from "@infrastructure/redis/PendingUserRepository.js";
import { BcryptPasswordService } from "@infrastructure/external-services/BcryptPasswordService.js";
import { OtpService } from "@infrastructure/external-services/OtpService.js";
import { PendingUserService } from "@infrastructure/external-services/PendingUserService.js";
import { EmailService } from "@infrastructure/external-services/EmailService.js";
import { RegisterUserUseCase } from "@application/use-cases/auth/RegisterUserUseCase.js";
import { VerifyOtpUseCase } from "@application/use-cases/auth/VerifyOtpUseCase.js";
import { AuthController } from "@presentation/api/v1/controllers/auth/AuthController.js";

const container = new Container();

// Mappers
container.bind(TYPES.IUserMapper).to(UserMapper);

// Repositories
container.bind(TYPES.IUserRepository).to(UserRepository);
container.bind(TYPES.IOTPRepository).to(RedisOTPRepository);
container.bind(TYPES.IPendingUserRepository).to(RedisPendingUserRepository);

// Services
container.bind(TYPES.IPasswordService).to(BcryptPasswordService);
container.bind(TYPES.IOtpService).to(OtpService);
container.bind(TYPES.IPendingUserService).to(PendingUserService);
container.bind(TYPES.IEmailService).to(EmailService);

// Use Cases
container.bind(TYPES.RegisterUserUseCase).to(RegisterUserUseCase);
container.bind(TYPES.VerifyOtpUseCase).to(VerifyOtpUseCase);

// Controller
container.bind(TYPES.AuthController).to(AuthController);

export { container };