export const TYPES = {
  IUserRepository: Symbol.for("IUserRepository"),
  IUserMapper: Symbol.for("IUserMapper"),
  IPasswordService: Symbol.for("IPasswordService"),
  IOtpService: Symbol.for("IOtpService"),
  IOTPRepository: Symbol.for("IOTPRepository"),
  IPendingUserService: Symbol.for("IPendingUserService"),
  IPendingUserRepository: Symbol.for("IPendingUserRepository"),
  IEmailService: Symbol.for("IEmailService"),

  RegisterUserUseCase: Symbol.for("RegisterUserUseCase"),
  VerifyOtpUseCase: Symbol.for("VerifyOtpUseCase"),

  AuthController: Symbol.for("AuthController"),
};