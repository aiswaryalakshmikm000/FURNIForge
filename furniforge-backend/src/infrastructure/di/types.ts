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

  RegisterUserUseCase: Symbol.for("RegisterUserUseCase"),
  VerifyOtpUseCase: Symbol.for("VerifyOtpUseCase"),
  ResendOtpUseCase: Symbol.for("ResendOtpUseCase"),

  AuthController: Symbol.for("AuthController"),
};