import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { IGetAllDesignersUseCase } from "../../../../../application/use-cases/designer/interfaces/IGetAllDesignersUseCase";
import type { GetAllDesignersQueryDTO } from "../../../../../application/dtos/designer/GetAllDesignersDTO";

@injectable()
export class DesignerController {
  constructor(
    @inject(TYPES.IGetAllDesignerUseCase) private _getAllDesignerUseCase: IGetAllDesignersUseCase,
  ) {}

  getAllDesigners = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllDesignersQueryDTO;
    const result = await this._getAllDesignerUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.DESIGNER_FETCH_SUCCESS).build());
  };
}
