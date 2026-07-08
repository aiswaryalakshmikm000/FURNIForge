import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { GetAllDeliverablesQueryDTO } from "../../../../../application/dtos/deliverables/GetAllDeliverablesDTO";
import type { IGetAllDeliverablesUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IGetAllDeliverablesUseCase";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import type { DeliverableFormDTO } from "../../../../../application/dtos/deliverables/DeliverableFormDTO";
import type { ICreateDeliverableUseCase } from "../../../../../application/use-cases/deliverable/interfaces/ICreateDeliverableUseCase";
import { AuthRequest } from "../../../middlewares/authMiddleware";
import { DeliverableCommandRequestDTO } from "../../../../../application/dtos/deliverables/DeliverableCommandDTO";
import type { IToggleDeliverableStatusUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IToggleDeliverableStatusUseCase";
import type { IUpdateDeliverableUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IUpdateDeliverableUseCase";
import type { ISoftDeleteDeliverableUseCase } from "../../../../../application/use-cases/deliverable/interfaces/ISoftDeleteDeliverableUseCase";
import type { IDeleteDeliverableUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IDeleteDeliverableUseCase";

@injectable()
export class DeliverableController {
  constructor(
    @inject(TYPES.IGetAllDeliverablesUseCase) private _getAllDeliverablesUseCase: IGetAllDeliverablesUseCase,
    @inject(TYPES.ICreateDeliverableUseCase) private _createDeliverableUseCase: ICreateDeliverableUseCase,
    @inject(TYPES.IToggleDeliverableStatusUseCase) private _toggleDeliverableStatusUseCase: IToggleDeliverableStatusUseCase,
    @inject(TYPES.IUpdateDeliverableUseCase) private _updateDeliverableUseCase: IUpdateDeliverableUseCase,
    @inject(TYPES.ISoftDeleteDeliverableUseCase) private _softDeleteDeliverableUseCase: ISoftDeleteDeliverableUseCase,
    @inject(TYPES.IDeleteDeliverableUseCase) private _deleteDeliverableUseCase: IDeleteDeliverableUseCase,
  ) {}
  

  getAllDeliverables = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllDeliverablesQueryDTO;
    const result = await this._getAllDeliverablesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.FETCH_SUCCESS).build());
  };

  createDeliverable = async ( req: AuthRequest, res: Response ) => {
    const dto = req.body as DeliverableFormDTO;
    const result = await this._createDeliverableUseCase.execute({...dto, createdById: req.user!.userId});

    res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.CREATED ).build() )
  };

  toggleDeliverableStatus = async (req: Request, res: Response) => {
    const params = req.params as DeliverableCommandRequestDTO;
    const result = await this._toggleDeliverableStatusUseCase.execute(params);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.STATUS_UPDATED).build());
  }

  updateDeliverable = async (req: Request, res: Response) => {
    const dto = req.body as DeliverableFormDTO;
    const params = req.params as DeliverableCommandRequestDTO;
    const result = await this._updateDeliverableUseCase.execute(params.id, dto)

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.UPDATED ).build());
  }

  softDeleteDeliverable = async ( req: Request, res: Response ) => {
    const params = req.params as DeliverableCommandRequestDTO;
    const result = await this._softDeleteDeliverableUseCase.execute( params );

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.ARCHIVED ).build())
  };

  deleteDeliverable = async ( req: Request, res: Response ) => {
    const params = req.params as DeliverableCommandRequestDTO;
    const result = await this._deleteDeliverableUseCase.execute( params );

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.DELETED ).build())
  };
}
