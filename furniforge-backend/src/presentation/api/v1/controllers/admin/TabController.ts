import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { ICreateTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/ICreateTabUseCase";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { CreateTabDTO } from "../../../../../application/dtos/templateTabs/createTabDTO";
import type { UpdateTabDTO } from "../../../../../application/dtos/templateTabs/updateTabDTO";
import type { IUpdateTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/IUpdateTabUseCase";

@injectable()
export class TabController {
  constructor(
    @inject(TYPES.ICreateTabUseCase) private _createTabUseCase: ICreateTabUseCase,
    @inject(TYPES.IUpdateTabUseCase) private _updateTabUseCase: IUpdateTabUseCase,
  ) {}

  createTab = async ( req: Request, res: Response ) => {
  const dto = req.body as CreateTabDTO;
  const result = await this._createTabUseCase.execute(dto);

  res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TABS.CREATED ).build());
  };

  updateTab = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const dto = req.body as UpdateTabDTO;

  const result = await this._updateTabUseCase.execute( id, dto );
  res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TABS.UPDATED ).build() );
  };
}


