import { Request, Response, NextFunction } from "express";
import { ResponseBuilder } from "@shared/responses/ApiResponse.js";
import { IRegisterUserUseCase } from "@application/use-cases/auth/interfaces/IRegisterUserUseCase.js";
import { SUCCESS_MESSAGES } from "@infrastructure/config/messages.js";
import { HttpStatusCode } from "@domain/enums/HttpStatusCode.js";

export class AuthController {
    constructor(
        private registerUseCase: IRegisterUserUseCase
    ){}

    async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.registerUseCase.execute(req.body);

      const response = ResponseBuilder
      .created(result, SUCCESS_MESSAGES.AUTH.REGISTER_SUCCESS)
      .build();
      
      res.status(HttpStatusCode.CREATED).json(response);
    } catch (error) { 
      next(error);
    }
  }
}
