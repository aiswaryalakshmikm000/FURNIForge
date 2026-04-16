import { Request, Response, NextFunction } from "express";
import { ResponseBuilder } from "@shared/responses/ApiResponse.js";
import { IRegisterUserUseCase } from "@application/use-cases/auth/interfaces/IRegisterUserUseCase.js";
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { HttpStatusCode } from "@domain/enums/HttpStatusCode.js";
import { IVerifyOtpUseCase } from "@application/use-cases/auth/interfaces/IVerifyOtpUseCase.js";
import { inject, injectable } from 'inversify';
import { TYPES } from "@infrastructure/di/types.js";
import { IResendOtpUseCase } from "@application/use-cases/auth/interfaces/IResendOtpUseCase.js";
import { UnauthorizedError } from "@domain/errors/AppError.js";
import { IRefreshTokenUseCase } from "@application/use-cases/auth/interfaces/IRefreshTokenUseCase.js";
import { ILogoutUseCase } from "@application/use-cases/auth/interfaces/ILogoutUseCase.js";
import { AuthRequest } from "@presentation/api/middlewares/authMiddleware.js";
import { ILoginUseCase } from "@application/use-cases/auth/interfaces/ILoginUseCase.js";
import { setRefreshTokenCookie , clearRefreshTokenCookie} from "@infrastructure/config/cookies.js";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.IRegisterUserUseCase) private registerUseCase: IRegisterUserUseCase,
    @inject(TYPES.IVerifyOtpUseCase) private verifyOtpUseCase: IVerifyOtpUseCase,
    @inject(TYPES.IResendOtpUseCase) private resendOtpUseCase: IResendOtpUseCase,
    @inject(TYPES.IRefreshTokenUseCase) private refreshTokenUseCase: IRefreshTokenUseCase,
    @inject(TYPES.ILogoutUseCase) private logoutUseCase: ILogoutUseCase,
    @inject(TYPES.ILoginUseCase) private loginUseCase: ILoginUseCase
  ) {}

  /**
   * haandles user registration request.
   * Validates input, triggers pending user & OTP generation and sends email with otp.
   * @param req - Express request object containing user registration data
   * @param res - Express response object used to send the response 
   * @param next - Express next middleware function for error handling
   */

  register = async(req: Request, res: Response, next: NextFunction) => {
      const result = await this.registerUseCase.execute(req.body);
      res.status(HttpStatusCode.CREATED).json(ResponseBuilder.created(result, SUCCESS_MESSAGES.AUTH.REGISTER_SUCCESS).build());
  }

  /**
  * Handles OTP verification request.
  * Validates input Verifies the OTP and activates the user account, mark as verified generate access, refresh tokens and session in the redis.. and sends welcome email.
  * @param req - Express request object containing OTP and email
  * @param res - Express response object used to send the create user response, accessToken, refreshToken
  * @param next - Express next middleware function for error handling
  */

  verifyOtp = async(req: Request, res: Response, next: NextFunction) => {
      const result = await this.verifyOtpUseCase.execute(req.body);

      setRefreshTokenCookie(res, result.refreshToken)

      const {refreshToken, ...safeResponse} = result
      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(safeResponse, SUCCESS_MESSAGES.AUTH.VERIFY_OTP_SUCCESS).build());
  }

  /**
   * Handles the resendOTP request. 
   * Validates input, delete old otp after the 30 sec as the cooldown time  delete prev otp and generate new, store in redis with expiry, send otp via email
   * generate new opt store in redis and send email with new otp
   * @param req - Contains user email
   * @param res - Returns success message with cooldown info
   * @param next - Error handler
   */
  
  resendOtp = async(req: Request, res: Response, next: NextFunction) => {
      const result = await this.resendOtpUseCase.execute(req.body);
      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.RESEND_OTP_SUCCESS).build());
  }

  /**
   * Handle refresh token request when the accesstoken expires
   * Reads refresh token from HTTP-only cookie, verify expiry, fetches session from redis using sessionid, validate the status(should be active), genrate new accessand refrehstoken, create new session, old marked as rotated.
   * @param req - Contains refreshToken in cookies
   * @param res - Returns new accessToken (refreshToken rotated in cookie)
   * @param next -  Error handler
   */

  refreshToken = async(req: Request, res: Response, next: NextFunction) => {
      const oldRefreshToken = req.cookies?.refreshToken;
      if(!oldRefreshToken) throw new UnauthorizedError(ERROR_MESSAGES.AUTH.TOKEN.REFRESH_FAILED);

      const result = await this.refreshTokenUseCase.execute(oldRefreshToken);

      setRefreshTokenCookie(res, result.refreshToken)

      const { refreshToken, ...safeResponse } = result;
      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(safeResponse, SUCCESS_MESSAGES.AUTH.TOKEN_REFRESH_SUCCESS).build());
  }

  /**
   * Handles logout from  device, Fetche sessionId for the user from Redis, mark all session as revoked, clear refresh token cookie
   * @param req -  Contains authenticated user session info
   * @param res -Returns success response
   * @param next - Error handler
   */

  logout = async(req: AuthRequest, res: Response, next: NextFunction) => {
      if(!req.user) throw new UnauthorizedError()
      await this.logoutUseCase.execute(req.user.sessionId);
      
      clearRefreshTokenCookie(res); 
      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(null, SUCCESS_MESSAGES.AUTH.LOGOUT_SUCCESS).build())
  }

  /**
   * @param req 
   * @param res 
   * @param next 
   */

  login = async(req: Request, res: Response, next: NextFunction) => {
      const result = await this.loginUseCase.execute(req.body);

      setRefreshTokenCookie(res, result.refreshToken)

      const {refreshToken, ...safeResponse} = result;
      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(safeResponse, SUCCESS_MESSAGES.AUTH.LOGIN_SUCCESS).build());
  }

}





