import { Container } from "inversify";
import { TYPES } from "./types";
import { UserRepository } from "../../infrastructure/database/prisma/repositories/UserRepository";
import { RedisOTPRepository } from "../../infrastructure/redis/RedisOTPRepository";
import { RedisPendingUserRepository } from "../../infrastructure/redis/PendingUserRepository";
import { BcryptPasswordService } from "../../infrastructure/external-services/BcryptPasswordService";
import { OtpService } from "../../infrastructure/external-services/OtpService";
import { PendingUserService } from "../../infrastructure/external-services/PendingUserService";
import { EmailService } from "../../infrastructure/external-services/EmailService";
import { RegisterUserUseCase } from "../../application/use-cases/auth/RegisterUserUseCase";
import { VerifyOtpUseCase } from "../../application/use-cases/auth/VerifyOtpUseCase";
import { AuthController } from "../../presentation/api/v1/controllers/auth/AuthController";
import { ResendOtpUseCase } from "../../application/use-cases/auth/ResendOtpUseCase";
import { JwtService } from "../../infrastructure/external-services/JwtService";
import { RedisSessionRepository } from "../../infrastructure/redis/RedisSessionRepository";
import { RefreshTokenUseCase } from "../../application/use-cases/auth/RefreshTokenUseCase"
import { LogoutUseCase } from "../../application/use-cases/auth/LogoutUseCase";
import { LoginUseCase } from "../../application/use-cases/auth/LoginUseCase";
import { loggerInstance } from "../../infrastructure/logger/WinstonLogger";
import { redisInstance } from "../../infrastructure/redis/RedisClient";
import type { Redis } from "ioredis";
import { LogoutAllDevicesUseCase } from "../../application/use-cases/auth/LogoutAllDevicesUseCase";
import { GetMeUseCase } from "../../application/use-cases/auth/GetMeUseCase";
import { ForgotPasswordUseCase } from "../../application/use-cases/auth/ForgotPasswordUseCase";
import { ResetPasswordUseCase } from "../../application/use-cases/auth/ResetPasswordUseCase";
import { ResendForgotPasswordOtpUseCase } from "../../application/use-cases/auth/ResendForgotPasswordOtpUseCase";
import { verifyResetOtpUseCase } from "../../application/use-cases/auth/VerifyResetOtpUseCase";
import { LeadRepository } from "../database/prisma/repositories/LeadRepository";
import { CreateLeadUseCase } from "../../application/use-cases/lead/CreateLeadUseCase";
import { GetAllLeadsUseCase } from "../../application/use-cases/lead/GetAllLeadsUseCase";
import { LeadController } from "../../presentation/api/v1/controllers/admin/LeadController";

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
container.bind(TYPES.IVerifyResetOtpUseCase).to(verifyResetOtpUseCase);

container.bind(TYPES.ICreateLeadUseCase).to(CreateLeadUseCase);
container.bind(TYPES.IGetAllLeadsUseCase).to(GetAllLeadsUseCase);

// Controller
container.bind(TYPES.AuthController).to(AuthController);
container.bind(TYPES.LeadController).to(LeadController)

export { container };