import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { IGetAllConfigRatesUseCase } from "../../../../../application/use-cases/configRate/interfaces/IGetAllConfigRatesUseCase";
import type { GetAllConfigRatesQueryDTO } from "../../../../../application/dtos/configRates/GetAllConfigRatesDTO";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";

@injectable()
export class ConfigRateController {
  constructor(
    @inject(TYPES.IGetAllConfigRatesUseCase) private _getAllConfigRatesUseCase: IGetAllConfigRatesUseCase,
  ) {}

  getAllConfigRates = async (req: Request, res: Response) => {
    const query = req.query as GetAllConfigRatesQueryDTO;

    const result = await this._getAllConfigRatesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.CONFIGRATES.FETCH_SUCCESS).build());
  };
}
