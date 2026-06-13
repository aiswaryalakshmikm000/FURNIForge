import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { ICreateTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/ICreateTabUseCase";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import type { TemplateTabFormDTO } from "../../../../../application/dtos/templateTabs/templateTabFormDTO";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";

@injectable()
export class TemplateTabController {
  constructor(
    @inject(TYPES.ICreateTabUseCase) private _createTabUseCase: ICreateTabUseCase,
  ) {}

  createTab = async ( req: Request, res: Response ) => {
  const dto = req.body as TemplateTabFormDTO;
  const result = await this._createTabUseCase.execute(dto);

  res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TABS.CREATED ).build());
  };

}


