import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { ICreateTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/ICreateTabUseCase";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { CreateTabDTO } from "../../../../../application/dtos/templateTabs/CreateTabDTO";
import type { UpdateTabDTO } from "../../../../../application/dtos/templateTabs/UpdateTabDTO";
import type { IUpdateTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/IUpdateTabUseCase";
import type { IDeleteTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/IDeleteTabUseCase";
import type { TabCommandRequestDTO } from "../../../../../application/dtos/templateTabs/TabCommandDTO";
import type { IToggleTabStatusUseCase } from "../../../../../application/use-cases/templateTab/interfaces/IToggleTabUseCase";
import type { ISoftDeleteTabUseCase } from "../../../../../application/use-cases/templateTab/interfaces/ISoftDeleteTabUseCase";

@injectable()
export class TabController {
  constructor(
    @inject(TYPES.ICreateTabUseCase) private _createTabUseCase: ICreateTabUseCase,
    @inject(TYPES.IUpdateTabUseCase) private _updateTabUseCase: IUpdateTabUseCase,
    @inject(TYPES.IDeleteTabUseCase) private _deleteTabUseCase: IDeleteTabUseCase,
    @inject(TYPES.ISoftDeleteTabUseCase) private _softDeleteTabUseCase: ISoftDeleteTabUseCase,
    @inject(TYPES.IToggleTabStatusUseCase) private _toggleTabStatusUseCase: IToggleTabStatusUseCase,
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

  deleteTab = async ( req: Request, res: Response ) => {
    const params = req.params as TabCommandRequestDTO;
    await this._deleteTabUseCase.execute(params);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( null, SUCCESS_MESSAGES.ADMIN.TABS.DELETED ).build());
  };

  softDeleteTab = async ( req: Request, res: Response ) => {
    const params = req.params as TabCommandRequestDTO;
    await this._softDeleteTabUseCase.execute(params);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( null, SUCCESS_MESSAGES.ADMIN.TABS.DELETED ).build());
  };

  toggleStatus = async ( req: Request, res: Response ) => {
    const params = req.params as TabCommandRequestDTO;
    const result = await this._toggleTabStatusUseCase.execute(params);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TABS.UPDATED).build());
  };
}


