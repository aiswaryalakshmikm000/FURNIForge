
export const TYPES = {
  Logger: Symbol.for("Logger"),
  
  IUserMapper: Symbol.for("IUserMapper"),

  IUserRepository: Symbol.for("IUserRepository"),
  IOTPRepository: Symbol.for("IOTPRepository"),
  IPendingUserRepository: Symbol.for("IPendingUserRepository"),

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
  ILoginUseCase : Symbol.for("ILoginUseCase "),

  AuthController: Symbol.for("AuthController"),
};