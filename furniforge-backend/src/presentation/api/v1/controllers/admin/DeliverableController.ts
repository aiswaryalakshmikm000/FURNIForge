import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { GetAllDeliverablesQueryDTO } from "../../../../../application/dtos/deliverables/GetAllDeliverablesDTO";
import type { IGetAllDeliverablesUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IGetAllDeliverablesUseCase";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";

@injectable()
export class DeliverableController {
  constructor(
    @inject(TYPES.IGetAllDeliverablesUseCase) private _getAllDeliverablesUseCase: IGetAllDeliverablesUseCase,
  ) {}

  getAllDeliverables = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllDeliverablesQueryDTO;
    const result = await this._getAllDeliverablesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.DELIVERABLES.DELIVERABLES_FETCH_SUCCESS).build());
  };
}
