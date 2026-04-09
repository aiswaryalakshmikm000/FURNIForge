import { Request, Response, NextFunction } from "express";
import { ResponseBuilder } from "@shared/responses/ApiResponse.js";
import { IRegisterUserUseCase } from "@application/use-cases/auth/interfaces/IRegisterUserUseCase.js";
import { SUCCESS_MESSAGES } from "@infrastructure/config/messages.js";
import { HttpStatusCode } from "@domain/enums/HttpStatusCode.js";
import { IVerifyOtpUseCase } from "@application/use-cases/auth/interfaces/IVerifyOtpUseCase.js";
import { ResendOtpUseCase } from "@application/use-cases/auth/ResendOtpUseCase.js";
import {inject, injectable } from 'inversify';
import { TYPES } from "@infrastructure/di/types.js";
import { IResendOtpUseCase } from "@application/use-cases/auth/interfaces/IResendOtpUseCase.js";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.RegisterUserUseCase) private registerUseCase: IRegisterUserUseCase,
    @inject(TYPES.VerifyOtpUseCase) private verifyOtpUseCase: IVerifyOtpUseCase,
    @inject(TYPES.ResendOtpUseCase) private resendOtpUseCase: IResendOtpUseCase
  ) {}

  /**
   * haandles user registration request.
   * Validates input, triggers pending user & OTP generation, and sends email with otp.
   * 
   * @param req - Express request object containing user registration data
   * @param res - Express response object used to send the response 
   * @param next - Express next middleware function for error handling
   */

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.registerUseCase.execute(req.body);

      res.status(HttpStatusCode.CREATED).json(ResponseBuilder.created(result, SUCCESS_MESSAGES.AUTH.REGISTER_SUCCESS).build());
      
    } catch (error: unknown) {
      next(error);
    }
  }

/**
 * Handles OTP verification request.
 * Validates input Verifies the OTP and activates the user account, mark as verified and sends welcome email.
 *
 * @param req - Express request object containing OTP and email
 * @param res - Express response object used to send the create user response 
 * @param next - Express next middleware function for error handling
 */

  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.verifyOtpUseCase.execute(req.body);

      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.VERIFY_OTP_SUCCESS).build());

    } catch (error: unknown) {
      next(error);
    }
  }

  /**
   * 
   * @param req 
   * @param res 
   * @param next 
   */
  
  async resendOtp(req: Request, res: Response, next: NextFunction) {
    try{
      const result = await this.resendOtpUseCase.execute(req.body);

      res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.AUTH.RESEND_OTP_SUCCESS).build());
    } catch (error) {
      next(error)
    }
  }
}




