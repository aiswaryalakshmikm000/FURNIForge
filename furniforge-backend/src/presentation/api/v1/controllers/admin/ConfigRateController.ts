import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { IGetAllConfigRatesUseCase } from "../../../../../application/use-cases/configRate/interfaces/IGetAllConfigRatesUseCase";
import type { GetAllConfigRatesQueryDTO } from "../../../../../application/dtos/configRates/GetAllConfigRatesDTO";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { CreateConfigRateDTO } from "../../../../../application/dtos/configRates/CreateConfigRateDTO";
import type { ICreateConfigRateUseCase } from "../../../../../application/use-cases/configRate/interfaces/ICreateConfigRateUseCase";
import type { UpdateConfigRateDTO } from "../../../../../application/dtos/configRates/UpdateConfigRateDTO";
import type { IUpdateConfigRateUseCase } from "../../../../../application/use-cases/configRate/interfaces/IUpdateConfigRateUseCase";
import type { ConfigRateCommandRequestDTO } from "../../../../../application/dtos/configRates/ConfigRateCommandDTO";
import type { IToggleConfigRateStatusUseCase } from "../../../../../application/use-cases/configRate/interfaces/IToggleConfigRateStatusUseCase";
import type { ISoftDeleteConfigRateUseCase } from "../../../../../application/use-cases/configRate/interfaces/ISoftDeleteConfigRateUseCase";

@injectable()
export class ConfigRateController {
  constructor(
    @inject(TYPES.IGetAllConfigRatesUseCase) private _getAllConfigRatesUseCase: IGetAllConfigRatesUseCase,
    @inject(TYPES.ICreateConfigRateUseCase) private _createConfigRateUseCase: ICreateConfigRateUseCase,
    @inject(TYPES.IUpdateConfigRateUseCase) private _updateConfigRateUseCase: IUpdateConfigRateUseCase,
    @inject(TYPES.IToggleConfigRateStatusUseCase) private _toggleConfigRateStatusUseCase: IToggleConfigRateStatusUseCase,
    @inject(TYPES.ISoftDeleteConfigRateUseCase) private _softDeleteConfigRateUseCase: ISoftDeleteConfigRateUseCase,
  ) {}

  getAllConfigRates = async (req: Request, res: Response) => {
    const query = req.query as GetAllConfigRatesQueryDTO;
    const result = await this._getAllConfigRatesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.CONFIGRATES.FETCH_SUCCESS).build());
  };

  createConfigRate = async ( req: Request, res: Response ) => {
    const dto = req.body as CreateConfigRateDTO;
    const result = await this._createConfigRateUseCase.execute(dto);

    res.status(HttpStatusCode.CREATED).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.CONFIGRATES.CREATED ).build() )
  };

  updateConfigRate= async (req: Request, res: Response) => {
    const dto = req.body as UpdateConfigRateDTO;
    const params = req.params as ConfigRateCommandRequestDTO;
    const result = await this._updateConfigRateUseCase.execute(params, dto)

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.CONFIGRATES.UPDATED).build())
  }

  toggleStatus = async ( req: Request, res: Response) => {
    const params = req.params as ConfigRateCommandRequestDTO;
    const result = await this._toggleConfigRateStatusUseCase.execute(params);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.CONFIGRATES.STATUS_UPDATED).build())
  };

  softDelete = async ( req: Request, res: Response ) => {
    const params = req.params as ConfigRateCommandRequestDTO;
    const result = await this._softDeleteConfigRateUseCase.execute(params);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.CONFIGRATES.DELETED ).build())
  };
}
