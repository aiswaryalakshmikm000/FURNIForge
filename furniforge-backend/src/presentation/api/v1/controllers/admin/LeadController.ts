import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../infrastructure/di/types.js";
import { IGetAllLeadsUseCase } from "../../../../../application/use-cases/lead/interfaces/IGetAllLeadUseCase.js";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse.js";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode.js";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages.js";
import { GetAllLeadsQueryDTO } from "../../../../../application/dtos/lead/GetAllLeadsDTO.js";

@injectable()
export class LeadController {
  constructor(
    @inject(TYPES.IGetAllLeadsUseCase) private _getAllLeadsUseCase: IGetAllLeadsUseCase,
  ) {}

  getAllLeads = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllLeadsQueryDTO;
    const result = await this._getAllLeadsUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEADS_FETCH_SUCCESS).build());
  };
}
