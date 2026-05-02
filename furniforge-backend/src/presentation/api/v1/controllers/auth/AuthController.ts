import { Request, Response } from "express";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse.js";
import { IRegisterUserUseCase } from "../../../../../application/use-cases/auth/interfaces/IRegisterUserUseCase.js";
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from "../../../../../infrastructure/config/messages.js";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode.js";
import { IVerifyOtpUseCase } from "../../../../../application/use-cases/auth/interfaces/IVerifyOtpUseCase.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../infrastructure/di/types.js";
import { IResendOtpUseCase } from "../../../../../application/use-cases/auth/interfaces/IResendOtpUseCase.js";
import { UnauthorizedError } from "../../../../../domain/errors/AppError.js";
import { IRefreshTokenUseCase } from "../../../../../application/use-cases/auth/interfaces/IRefreshTokenUseCase.js";
import { ILogoutUseCase } from "../../../../../application/use-cases/auth/interfaces/ILogoutUseCase.js";
import { AuthRequest } from "../../../../../presentation/api/middlewares/authMiddleware.js";
import { ILoginUseCase } from "../../../../../application/use-cases/auth/interfaces/ILoginUseCase.js";
import { setRefreshTokenCookie, clearRefreshTokenCookie, setAccessTokenCookie, clearAccessTokenCookie } from "../../../../../infrastructure/config/cookies.js";
import { ILogoutAllDevicesUseCase } from "../../../../../application/use-cases/auth/interfaces/ILogoutAllDevicesUseCase.js";
import { IGetMeUseCase } from "../../../../../application/use-cases/auth/interfaces/IGetMeUseCase.js";
import { IForgetPasswordUseCase } from "../../../../../application/use-cases/auth/interfaces/IForgetPasswordUseCase.js";
import { IResetPasswordUseCase } from "../../../../../application/use-cases/auth/interfaces/IResetPasswordUseCase.js";
import { IVerifyResetOtpUseCase } from "../../../../../application/use-cases/auth/interfaces/IVerifyResetOtpUSeCase.js";
import { IResendForgotPasswordOtpUseCase } from "../../../../../application/use-cases/auth/interfaces/IResendForgotPasswordOtpUseCase.js";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.IRegisterUserUseCase) private registerUseCase: IRegisterUserUseCase,
    @inject(TYPES.IVerifyOtpUseCase) private verifyOtpUseCase: IVerifyOtpUseCase,
    @inject(TYPES.IResendOtpUseCase) private resendOtpUseCase: IResendOtpUseCase,
    @inject(TYPES.IRefreshTokenUseCase) private refreshTokenUseCase: IRefreshTokenUseCase,
    @inject(TYPES.ILogoutUseCase) private logoutUseCase: ILogoutUseCase,
    @inject(TYPES.ILogoutAllDevicesUseCase) private logoutAllUseCase: ILogoutAllDevicesUseCase,
    @inject(TYPES.ILoginUseCase) private loginUseCase: ILoginUseCase,
    @inject(TYPES.IGetMeUseCase) private getMeUseCase: IGetMeUseCase,
    @inject(TYPES.IForgotPasswordUseCase) private forgotPasswordUseCase: IForgetPasswordUseCase,
    @inject(TYPES.IResetPasswordUseCase) private resetPasswordUseCase: IResetPasswordUseCase,
    @inject(TYPES.IResendForgotPasswordOtpUseCase) private resendForgotPasswordOtpUseCase: IResendForgotPasswordOtpUseCase,
    @inject(TYPES.IVerifyResetOtpUseCase) private verifyResetOtpUseCase: IVerifyResetOtpUseCase,
  ) {}

  /**
   * Validates input, check if user exists, hash password, store in pending user, generate otp and store in redis, send otp to user's email.
   * @param req - Express request object containing user registration data name email password phone
   * @param res - Express response object (email, cooldown, tempuserId) used to send the response 
   */
  register = async (req: Request, res: Response) => {
    const result = await this.registerUseCase.execute(req.body);
    res.status(HttpStatusCode.CREATED).json(ResponseBuilder.created(result, SUCCESS_MESSAGES.AUTH.REGISTER_SUCCESS).build());
  };

  /**
   * Validates otp and tempuserId Verifies the OTP from the storage and activates the user account, mark as verified, delete pending user, generate access & refresh tokens and create session in the redis.. and sends welcome email.
   * @param req - Express request object containing OTP and tempuserId
   * @param res - Express response object used to send the create user response, accessToken, refreshToken
   */
  verifyOtp = async (req: Request, res: Response) => {
    const result = await this.verifyOtpUseCase.execute(req.body);

    setAccessTokenCookie(res, result.accessToken);
    setRefreshTokenCookie(res, result.refreshToken);

    const { refreshToken, accessToken, ...safeResponse } = result;
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(safeResponse, SUCCESS_MESSAGES.AUTH.VERIFY_EMAIL_SUCCESS).build());
  };

  /**
   * Validates input, fetches the pending user using tempUserId, validates pending user existance, delete old otp after the 30 sec as the cooldown time  delete prev otp and generate new, store in redis with expiry, send otp via email
   * generate new opt store in redis and send email with new otp
   * @param req - Contains user email
   * @param res - Returns success message with cooldown and email
   */
  resendOtp = async (req: Request, res: Response) => {
    const result = await this.resendOtpUseCase.execute(req.body);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.RESEND_OTP_SUCCESS).build() );
  };

  /**
   * Handle refresh token request when the accesstoken expires
   * Reads refresh token from HTTP-only cookie, verify token validity and expiry, fetches session from redis using sessionid, validate the status(should be active), genrate new accessand refrehstoken, create new session, old sessions marked as rotated.
   * @param req - Contains refreshToken in cookies
   * @param res - Returns new accessToken (refreshToken rotated in cookie) and set new refresh toek in cookies 
   */
  refreshToken = async (req: Request, res: Response) => {
    const oldRefreshToken = req.cookies?.refreshToken;
    if (!oldRefreshToken)throw new UnauthorizedError(ERROR_MESSAGES.AUTH.TOKEN.REFRESH_FAILED);

    const result = await this.refreshTokenUseCase.execute(oldRefreshToken);

    setAccessTokenCookie(res, result.accessToken);
    setRefreshTokenCookie(res, result.refreshToken);

    const { refreshToken, ...safeResponse } = result;
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(safeResponse, SUCCESS_MESSAGES.AUTH.TOKEN_REFRESH_SUCCESS).build());
  };

  /**
   * Handles logout from  device, Fetche sessionId for the suthenticated user from Redis, mark all session as revoked, clear refresh token cookie
   * @param req - Contains authenticated user session info done by middleware
   * @param res -Returns success response
   */
  logout = async (req: AuthRequest, res: Response) => {
    if (!req.user) throw new UnauthorizedError();
    await this.logoutUseCase.execute(req.user.sessionId);

    clearAccessTokenCookie(res);
    clearRefreshTokenCookie(res);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(null, SUCCESS_MESSAGES.AUTH.LOGOUT_SUCCESS).build());
  };

  /**
   * handles logout from all the devices. fetch user from teh authenticated request, invalidates all teh user session in redis, clear authentication cookies
   * @param req Contains authenticated user session info done by middleware 
   * @param res retrun with a success message
   */
  logoutAll = async (req: AuthRequest, res: Response) => {
    if (!req.user) throw new UnauthorizedError();
    await this.logoutAllUseCase.execute(req.user.userId);

    clearAccessTokenCookie(res);
    clearRefreshTokenCookie(res);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(null, SUCCESS_MESSAGES.AUTH.LOGOUT_SUCCESS).build());
  };

  /**
   * validates email and passeword, check is user exists, compare password, ensure use rverified, genrates access and refresh toekn, generates session in redis
   * @param req Express request object containing contains email and password 
   * @param res return user details set access and refesh toekn in cookies 
   */
  login = async (req: Request, res: Response) => {
    const result = await this.loginUseCase.execute(req.body);

    setAccessTokenCookie(res, result.accessToken);
    setRefreshTokenCookie(res, result.refreshToken);

    const { refreshToken, accessToken, ...safeResponse } = result;
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(safeResponse, SUCCESS_MESSAGES.AUTH.LOGIN_SUCCESS).build());
  };

  /**
   * extract userid from the auth middleware, fetches user from db, validates user existance
   * @param req 
   * @param res returns user profile data
   */
  me = async (req: AuthRequest, res: Response) => {
    if (!req.user) throw new UnauthorizedError();

    const result = await this.getMeUseCase.execute(req.user.userId);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.ME_FETCH).build());
  };

  /**
   * validartes the email check if user exists generate the otp for password reset, stores otp with expiry on redis, sends otp to email
   * @param req Express request object contains email
   * @param res return email with cooldown time for otp resend
   */
  forgotPassword = async (req: Request, res: Response) => {
    const result = await this.forgotPasswordUseCase.execute(req.body);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.FORGOT_PASSWORD).build());
  };

  /**
   * validates email and otp , verifies otp from storafe, genreates reset token 
   * @param req 
   * @param res return reset token 
   */
  verifyResetOtp = async (req: Request, res: Response) => {
    const result = await this.verifyResetOtpUseCase.execute(req.body)

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.VERIFY_OTP_SUCCESS).build())
  }

  /**
   * verifies reset token, extract userid from the token, fetch user from the db, ensure user has the new password not same as old, hash new password, update user, invlaidates all sessions of the user
   * @param req 
   * @param res return success message
   */
  resetPassword = async (req: Request, res: Response) => {
    await this.resetPasswordUseCase.execute(req.body);
    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( null, SUCCESS_MESSAGES.AUTH.PASSWORD_RESET_SUCCESS).build() );
  };

  /**
   * validates email, fetch user from the db, generate new otp, in validates old otp stores otp with expiry i nthe reds send otp to email
   * @param req
   * @param res return email and cooldown time
   */
  resendForgotPasswordOtp = async (req: Request, res: Response) => {
    const result = await this.resendForgotPasswordOtpUseCase.execute(req.body);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.RESEND_OTP_SUCCESS).build());
  };
  
}
