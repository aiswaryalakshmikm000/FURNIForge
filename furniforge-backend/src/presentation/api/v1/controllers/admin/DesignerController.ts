import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { IGetAllDesignersUseCase } from "../../../../../application/use-cases/designer/interfaces/IGetAllDesignersUseCase";
import type { GetAllDesignersQueryDTO } from "../../../../../application/dtos/designer/GetAllDesignersDTO";
import type { CreateDesignerDTO } from "../../../../../application/dtos/designer/CreateDesignerDTO";
import type { ICreateDesignerUseCase } from "../../../../../application/use-cases/designer/interfaces/ICreateDesignerUseCase";
import type { UpdateDesignerDTO } from "../../../../../application/dtos/designer/UpdateDesignerDTO";
import type { IUpdateDesignerUseCase } from "../../../../../application/use-cases/designer/interfaces/IUpdateDesignerUseCase";

@injectable()
export class DesignerController {
  constructor(
    @inject(TYPES.IGetAllDesignerUseCase) private _getAllDesignerUseCase: IGetAllDesignersUseCase,
    @inject(TYPES.ICreateDesignerUseCase) private _createDesignerUseCase: ICreateDesignerUseCase,
    @inject(TYPES.IUpdateDesignerUseCase) private _updateDesignerUseCase: IUpdateDesignerUseCase,
  ) {}

  getAllDesigners = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllDesignersQueryDTO;
    const result = await this._getAllDesignerUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.DESIGNER_FETCH_SUCCESS).build());
  };

  createDesigner = async ( req: Request, res: Response ) => {
    const dto = req.body as CreateDesignerDTO;
    const result = await this._createDesignerUseCase.execute(dto);

    res.status(HttpStatusCode.CREATED).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DESIGNER_CREATED).build()) 
  };

  updateDesigner = async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body as UpdateDesignerDTO;

    const result = await this._updateDesignerUseCase.execute(id, body)
    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DESIGNER_UPDATED).build());
  }
}
