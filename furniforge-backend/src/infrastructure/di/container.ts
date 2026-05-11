import { Container } from "inversify";
import { TYPES } from "./types.js";
import { UserRepository } from "../../infrastructure/database/prisma/repositories/UserRepository.js";
import { RedisOTPRepository } from "../../infrastructure/redis/RedisOTPRepository.js";
import { RedisPendingUserRepository } from "../../infrastructure/redis/PendingUserRepository.js";
import { BcryptPasswordService } from "../../infrastructure/external-services/BcryptPasswordService.js";
import { OtpService } from "../../infrastructure/external-services/OtpService.js";
import { PendingUserService } from "../../infrastructure/external-services/PendingUserService.js";
import { EmailService } from "../../infrastructure/external-services/EmailService.js";
import { RegisterUserUseCase } from "../../application/use-cases/auth/RegisterUserUseCase.js";
import { VerifyOtpUseCase } from "../../application/use-cases/auth/VerifyOtpUseCase.js";
import { AuthController } from "../../presentation/api/v1/controllers/auth/AuthController.js";
import { ResendOtpUseCase } from "../../application/use-cases/auth/ResendOtpUseCase.js";
import { JwtService } from "../../infrastructure/external-services/JwtService.js";
import { RedisSessionRepository } from "../../infrastructure/redis/RedisSessionRepository.js";
import { RefreshTokenUseCase } from "../../application/use-cases/auth/RefreshTokenUseCase.js"
import { LogoutUseCase } from "../../application/use-cases/auth/LogoutUseCase.js";
import { LoginUseCase } from "../../application/use-cases/auth/LoginUseCase.js";
import { loggerInstance } from "../../infrastructure/logger/WinstonLogger.js";
import { redisInstance } from "../../infrastructure/redis/RedisClient.js";
import type { Redis } from "ioredis";
import { LogoutAllDevicesUseCase } from "../../application/use-cases/auth/LogoutAllDevicesUseCase.js";
import { GetMeUseCase } from "../../application/use-cases/auth/GetMeUseCase.js";
import { ForgotPasswordUseCase } from "../../application/use-cases/auth/ForgotPasswordUseCase.js";
import { ResetPasswordUseCase } from "../../application/use-cases/auth/ResetPasswordUseCase.js";
import { ResendForgotPasswordOtpUseCase } from "../../application/use-cases/auth/ResendForgotPasswordOtpUseCase.js";
import { verifyResetOtpUseCase } from "../../application/use-cases/auth/VerifyResetOtpUseCase.js";
import { LeadRepository } from "../database/prisma/repositories/LeadRepository.js";
import { CreateLeadUseCase } from "../../application/use-cases/lead/CreateLeadUseCase.js";

const container = new Container();

//redis
container.bind<Redis>(TYPES.Redis).toConstantValue(redisInstance);

//logger
container.bind(TYPES.ILogger).toConstantValue(loggerInstance);

// Repositories
container.bind(TYPES.IUserRepository).to(UserRepository);
container.bind(TYPES.IOTPRepository).to(RedisOTPRepository);
container.bind(TYPES.IPendingUserRepository).to(RedisPendingUserRepository);
container.bind(TYPES.ILeadRepository).to(LeadRepository);

// Services
container.bind(TYPES.IPasswordService).to(BcryptPasswordService);
container.bind(TYPES.IOtpService).to(OtpService);
container.bind(TYPES.IPendingUserService).to(PendingUserService);
container.bind(TYPES.IEmailService).to(EmailService);
container.bind(TYPES.ITokenService).to(JwtService);
container.bind(TYPES.ISessionService).to(RedisSessionRepository);

// Use Cases
container.bind(TYPES.IRegisterUserUseCase).to(RegisterUserUseCase);
container.bind(TYPES.IVerifyOtpUseCase).to(VerifyOtpUseCase);
container.bind(TYPES.IResendOtpUseCase).to(ResendOtpUseCase);
container.bind(TYPES.IRefreshTokenUseCase).to(RefreshTokenUseCase);
container.bind(TYPES.ILogoutUseCase).to(LogoutUseCase);
container.bind(TYPES.ILogoutAllDevicesUseCase).to(LogoutAllDevicesUseCase)
container.bind(TYPES.ILoginUseCase).to(LoginUseCase);
container.bind(TYPES.IGetMeUseCase).to(GetMeUseCase);
container.bind(TYPES.IForgotPasswordUseCase).to(ForgotPasswordUseCase);
container.bind(TYPES.IResetPasswordUseCase).to(ResetPasswordUseCase);
container.bind(TYPES.IResendForgotPasswordOtpUseCase).to(ResendForgotPasswordOtpUseCase);
container.bind(TYPES.IVerifyResetOtpUseCase).to(verifyResetOtpUseCase)

container.bind(TYPES.ICreateLeadUseCase).to(CreateLeadUseCase)

// Controller
container.bind(TYPES.AuthController).to(AuthController);

export { container };