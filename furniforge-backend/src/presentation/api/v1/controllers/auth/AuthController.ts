import { Request, Response, NextFunction } from "express";
import { ResponseBuilder } from "@shared/responses/ApiResponse.js";
import { IRegisterUserUseCase } from "@application/use-cases/auth/interfaces/IRegisterUserUseCase.js";
import { SUCCESS_MESSAGES } from "@infrastructure/config/messages.js";
import { HttpStatusCode } from "@domain/enums/HttpStatusCode.js";
import { IVerifyOtpUseCase } from "@application/use-cases/auth/interfaces/IVerifyOtpUseCase.js";
import {inject, injectable } from 'inversify';
import { TYPES } from "@infrastructure/di/types.js";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.RegisterUserUseCase) private registerUseCase: IRegisterUserUseCase,
    @inject(TYPES.VerifyOtpUseCase) private verifyOtpUseCase: IVerifyOtpUseCase,
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

      const response = ResponseBuilder.created(
        result,
        SUCCESS_MESSAGES.AUTH.REGISTER_SUCCESS,
      ).build();

      res.status(HttpStatusCode.CREATED).json(response);
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

      const response = ResponseBuilder.success(
            result,
            SUCCESS_MESSAGES.AUTH.VERIFY_OTP_SUCCESS
          ).build();

          res.status(HttpStatusCode.OK).json(response);
    } catch (error: unknown) {
      next(error);
    }
  }
}


