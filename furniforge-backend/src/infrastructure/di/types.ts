
export const TYPES = {
  Redis: Symbol.for("Redis"),
  
  ILogger: Symbol.for("ILogger"),

  IUserRepository: Symbol.for("IUserRepository"),
  IOTPRepository: Symbol.for("IOTPRepository"),
  IPendingUserRepository: Symbol.for("IPendingUserRepository"),
  ILeadRepository: Symbol.for("ILeadRepository"),

  IPasswordService: Symbol.for("IPasswordService"),
  IOtpService: Symbol.for("IOtpService"),
  IPendingUserService: Symbol.for("IPendingUserService"),
  IEmailService: Symbol.for("IEmailService"),
  ITokenService: Symbol.for("ITokenService"),
  ISessionService: Symbol.for("ISessionService"),

  IRegisterUserUseCase: Symbol.for("IRegisterUserUseCase"),
  IVerifyOtpUseCase: Symbol.for("IVerifyOtpUseCase"),
  IResendOtpUseCase: Symbol.for("IResendOtpUseCase"),
  IRefreshTokenUseCase: Symbol.for("IRefreshTokenUseCase"),
  ILogoutUseCase: Symbol.for("ILogoutUseCase"),
  ILogoutAllDevicesUseCase: Symbol.for("ILogoutAllDevicesUseCase"),
  ILoginUseCase : Symbol.for("ILoginUseCase"),
  IGetMeUseCase: Symbol.for("IGetMeUseCase"),
  IForgotPasswordUseCase: Symbol.for("IForgotPasswordUseCase"),
  IVerifyResetOtpUseCase: Symbol.for("IVerifyResetOtpUseCase"),
  IResetPasswordUseCase: Symbol.for("IResetPasswordUseCase"),
  IResendForgotPasswordOtpUseCase: Symbol.for("IResendForgotPasswordOtpUseCase"),

  ICreateLeadUseCase: Symbol.for("ICreateLeadUseCase"),
  IGetAllLeadsUseCase: Symbol.for("IGetAllLeadsUseCase"),

  AuthController: Symbol.for("AuthController"),
  LeadController: Symbol.for("LeadController"),
};