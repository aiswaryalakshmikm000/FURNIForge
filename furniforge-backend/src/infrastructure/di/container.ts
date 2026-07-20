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
import { AssignDesignerUseCase } from "../../application/use-cases/lead/AssignDesignerUseCase";
import { GetDesignerOptionsUseCase } from "../../application/use-cases/lead/GetDesignerOptionsUseCase";
import { GoogleAuthUseCase } from "../../application/use-cases/auth/GoogleAuthUseCase";
import { GoogleAuthService } from "../external-services/GoogleAuthService";
import { CreateManualLeadUseCase } from "../../application/use-cases/lead/CreateManualLeadUseCase";
import { DesignerRepository } from "../database/prisma/repositories/DesignerRepository";
import { GetAllDesignersUseCase } from "../../application/use-cases/designer/GetAllDesignersUseCase";
import { DesignerController } from "../../presentation/api/v1/controllers/admin/DesignerController";
import { VerifyEmailUseCase } from "../../application/use-cases/auth/VerifyEmailUseCase";
import { DeleteLeadUseCase } from "../../application/use-cases/lead/DeleteLeadUseCase";
import { UpdateLeadUseCase } from "../../application/use-cases/lead/UpdateLeadUseCase";
import { CreateDesignerUseCase } from "../../application/use-cases/designer/CreateDesignerUseCase";
import { UpdateDesignerUseCase } from "../../application/use-cases/designer/UpdateDesignerUseCase";
import { ToggleDesignerBlockUseCase } from "../../application/use-cases/designer/ToggleDesignerBlockUseCase";
import { DeleteDesignerUseCase } from "../../application/use-cases/designer/DeleteDesignerUseCase";
import { DeliverableController } from "../../presentation/api/v1/controllers/admin/DeliverableController";
import { GetAllDeliverablesUseCase } from "../../application/use-cases/deliverable/GetAllDeliverablesUseCase";
import { DeliverableRepository } from "../database/prisma/repositories/DeliverableRepository";
import { CreateDeliverableUseCase } from "../../application/use-cases/deliverable/CreateDeliverableUseCase";
import { ToggleDeliverableStatusUseCase } from "../../application/use-cases/deliverable/ToggleDeliverableStatusUseCase";
import { UpdateDeliverableUseCase } from "../../application/use-cases/deliverable/UpdateDeliverableUseCase";
import { SoftDeleteDeliverableUseCase } from "../../application/use-cases/deliverable/SoftDeleteDeliverableUseCase";
import { DeleteDeliverableUseCase } from "../../application/use-cases/deliverable/DeleteDeliverableUseCase";
import { TemplateRepository } from "../database/prisma/repositories/TemplateRepository";
import { CreateTemplateUseCase } from "../../application/use-cases/template/CreateTemplateUseCase";
import { TemplateController } from "../../presentation/api/v1/controllers/admin/TemplateController";
import { UpdateTemplateUseCase } from "../../application/use-cases/template/UpdateTemplateUseCase";
import { DeleteTemplateUseCase } from "../../application/use-cases/template/DeleteTemplateUseCase";
import { ToggleTemplateStatusUseCase } from "../../application/use-cases/template/ToggleTemplateStatusUseCase";
import { CreateTabUseCase } from "../../application/use-cases/templateTab/CreateTabUseCase";
import { TabController } from "../../presentation/api/v1/controllers/admin/TabController";
import { TabRepository } from "../database/prisma/repositories/TabRepository";
import { UpdateTabUseCase } from "../../application/use-cases/templateTab/UpdateTabUseCase";
import { DeleteTabUseCase } from "../../application/use-cases/templateTab/DeleteTabUseCase";
import { ToggleTabStatusUseCase } from "../../application/use-cases/templateTab/ToggleTabStatusUseCase";
import { SoftDeleteTemplateUseCase } from "../../application/use-cases/template/SoftDeleteTemplateUseCase";
import { FieldController } from "../../presentation/api/v1/controllers/admin/FieldController";
import { FieldRepository } from "../database/prisma/repositories/FieldRepository";
import { CreateFieldUseCase } from "../../application/use-cases/field/CreateUseCase";
import { UpdateFieldUseCase } from "../../application/use-cases/field/UpdateFieldUseCase";
import { softDeleteFieldUseCasea } from "../../application/use-cases/field/SoftDeleteFieldUseCase";
import { RequirementFieldController } from "../../presentation/api/v1/controllers/admin/requirementFieldController";
import { GetRequirementFieldDeliverablesUseCase } from "../../application/use-cases/deliverable/GetRequirementFieldDeliverablesUseCase";
import { GetTemplatesByDeliverableUseCase } from "../../application/use-cases/template/GetTemplatesByDeliverableUseCase";
import { GetTabsByTemplateUseCase } from "../../application/use-cases/templateTab/GetTabsByTemplateUseCase";
import { GetFieldsByTabUseCase } from "../../application/use-cases/field/GetFieldsByTabUseCase";
import { SoftDeleteTabUseCase } from "../../application/use-cases/templateTab/SoftDeleteTabUseCase";
import { GetAllConfigRatesUseCase } from "../../application/use-cases/configRate/GetAllConfigRatesUseCase";
import { ConfigRateController } from "../../presentation/api/v1/controllers/admin/ConfigRateController";
import { ConfigRateRepository } from "../database/prisma/repositories/ConfigRateRepository";
import { CreateConfigRateUseCase } from "../../application/use-cases/configRate/CreateConfigRateUseCase";
import { UpdateConfigRateUseCase } from "../../application/use-cases/configRate/UpdateConfigRateUseCase";
import { ToggleConfigRateStatusUseCase } from "../../application/use-cases/configRate/ToggleConfigRateStatusUseCase";
import { SoftDeleteConfigRateUseCase } from "../../application/use-cases/configRate/SoftDeleteConfigRateUseCase";

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
container.bind(TYPES.IDesignerRepository).to(DesignerRepository);
container.bind(TYPES.IDeliverableRepository).to(DeliverableRepository);
container.bind(TYPES.ITemplateRepository).to(TemplateRepository);
container.bind(TYPES.ITabRepository).to(TabRepository);
container.bind(TYPES.IFieldRepository).to(FieldRepository);
container.bind(TYPES.IConfigRateRepository).to(ConfigRateRepository);

// Services
container.bind(TYPES.IPasswordService).to(BcryptPasswordService);
container.bind(TYPES.IOtpService).to(OtpService);
container.bind(TYPES.IPendingUserService).to(PendingUserService);
container.bind(TYPES.IEmailService).to(EmailService);
container.bind(TYPES.ITokenService).to(JwtService);
container.bind(TYPES.ISessionService).to(RedisSessionRepository);
container.bind(TYPES.IGoogleAuthService).to(GoogleAuthService);

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
container.bind(TYPES.IGoogleAuthUseCase).to(GoogleAuthUseCase)
container.bind(TYPES.IVerifyEmailUseCase).to(VerifyEmailUseCase)

container.bind(TYPES.ICreateLeadUseCase).to(CreateLeadUseCase);
container.bind(TYPES.IGetAllLeadsUseCase).to(GetAllLeadsUseCase);
container.bind(TYPES.IGetDesignerOptionsUseCase).to(GetDesignerOptionsUseCase);
container.bind(TYPES.IAssignDesignerUseCase).to(AssignDesignerUseCase);
container.bind(TYPES.ICreateManualLeadUseCase).to(CreateManualLeadUseCase);
container.bind(TYPES.IDeleteLeadUseCase).to(DeleteLeadUseCase);
container.bind(TYPES.IUpdateLeadUseCase).to(UpdateLeadUseCase);

container.bind(TYPES.IGetAllDesignerUseCase).to(GetAllDesignersUseCase);
container.bind(TYPES.ICreateDesignerUseCase).to(CreateDesignerUseCase);
container.bind(TYPES.IUpdateDesignerUseCase).to(UpdateDesignerUseCase);
container.bind(TYPES.IToggleDesignerBlockUseCase).to(ToggleDesignerBlockUseCase);
container.bind(TYPES.IDeleteDesignerUseCase).to(DeleteDesignerUseCase);

container.bind(TYPES.IGetAllDeliverablesUseCase).to(GetAllDeliverablesUseCase);
container.bind(TYPES.ICreateDeliverableUseCase).to(CreateDeliverableUseCase);
container.bind(TYPES.IToggleDeliverableStatusUseCase).to(ToggleDeliverableStatusUseCase);
container.bind(TYPES.IUpdateDeliverableUseCase).to(UpdateDeliverableUseCase);
container.bind(TYPES.ISoftDeleteDeliverableUseCase).to(SoftDeleteDeliverableUseCase);
container.bind(TYPES.IDeleteDeliverableUseCase).to(DeleteDeliverableUseCase);

container.bind(TYPES.ICreateTemplateUseCase).to(CreateTemplateUseCase);
container.bind(TYPES.IUpdateTemplateUseCase).to(UpdateTemplateUseCase);
container.bind(TYPES.IDeleteTemplateUseCase).to(DeleteTemplateUseCase);
container.bind(TYPES.IToggleTemplateStatusUseCase).to(ToggleTemplateStatusUseCase);
container.bind(TYPES.ISoftDeleteTemplateUseCase).to(SoftDeleteTemplateUseCase);

container.bind(TYPES.ICreateTabUseCase).to(CreateTabUseCase);
container.bind(TYPES.IUpdateTabUseCase).to(UpdateTabUseCase);
container.bind(TYPES.IDeleteTabUseCase).to(DeleteTabUseCase);
container.bind(TYPES.IToggleTabStatusUseCase).to(ToggleTabStatusUseCase);
container.bind(TYPES.ISoftDeleteTabUseCase).to(SoftDeleteTabUseCase);

container.bind(TYPES.ICreateFieldUseCase).to(CreateFieldUseCase);
container.bind(TYPES.IUpdateFieldUseCase).to(UpdateFieldUseCase);
container.bind(TYPES.ISoftDeleteFieldUseCase).to(softDeleteFieldUseCasea);

container.bind(TYPES.IGetRequirementFieldDeliverablesUseCase).to(GetRequirementFieldDeliverablesUseCase);
container.bind(TYPES.IGetTemplatesByDeliverableUseCase).to(GetTemplatesByDeliverableUseCase);
container.bind(TYPES.IGetTabsByTemplateUseCase).to(GetTabsByTemplateUseCase);
container.bind(TYPES.IGetFieldsByTabUseCase).to(GetFieldsByTabUseCase);

container.bind(TYPES.IGetAllConfigRatesUseCase).to(GetAllConfigRatesUseCase);
container.bind(TYPES.ICreateConfigRateUseCase).to(CreateConfigRateUseCase);
container.bind(TYPES.IUpdateConfigRateUseCase).to(UpdateConfigRateUseCase);
container.bind(TYPES.IToggleConfigRateStatusUseCase).to(ToggleConfigRateStatusUseCase);
container.bind(TYPES.ISoftDeleteConfigRateUseCase).to(SoftDeleteConfigRateUseCase);

// Controller
container.bind(TYPES.AuthController).to(AuthController);
container.bind(TYPES.LeadController).to(LeadController);
container.bind(TYPES.DesignerController).to(DesignerController);
container.bind(TYPES.DeliverableController).to(DeliverableController);
container.bind(TYPES.TemplateController).to(TemplateController);
container.bind(TYPES.TabController).to(TabController);
container.bind(TYPES.FieldController).to(FieldController);
container.bind(TYPES.RequirementFieldController).to(RequirementFieldController);
container.bind(TYPES.ConfigRateController).to(ConfigRateController);


export { container };