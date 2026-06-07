import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { GetAllDeliverablesQueryDTO } from "../../../../../application/dtos/deliverables/GetAllDeliverablesDTO";
import type { IGetAllDeliverablesUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IGetAllDeliverablesUseCase";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import type { CreateDeliverableDTO } from "../../../../../application/dtos/deliverables/createDeliverableDTO";
import type { ICreateDeliverableUseCase } from "../../../../../application/use-cases/deliverable/interfaces/ICreateDeliverableUseCase";
import { AuthRequest } from "../../../middlewares/authMiddleware";
import { DeliverableCommandRequestDTO } from "../../../../../application/dtos/deliverables/deliverableCommandDTO";
import type { IToggleDeliverableStatusUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IToggleDeliverableStatusUseCase";

@injectable()
export class DeliverableController {
  constructor(
    @inject(TYPES.IGetAllDeliverablesUseCase) private _getAllDeliverablesUseCase: IGetAllDeliverablesUseCase,
    @inject(TYPES.ICreateDeliverableUseCase) private _createDeliverableUseCase: ICreateDeliverableUseCase,
    @inject(TYPES.IToggleDeliverableStatusUseCase) private _toggleDeliverableStatusUseCase: IToggleDeliverableStatusUseCase,
  ) {}

  getAllDeliverables = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllDeliverablesQueryDTO;
    const result = await this._getAllDeliverablesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.FETCH_SUCCESS).build());
  };

  createDeliverable = async ( req: AuthRequest, res: Response ) => {
    console.log("Hit")
    const dto = req.body as CreateDeliverableDTO;
    const result = await this._createDeliverableUseCase.execute({...dto, createdById: req.user!.userId});

    res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.CREATED ).build() )
  };

  toggleDeliverableStatus = async (req: Request, res: Response) => {
    const dto = req.params as DeliverableCommandRequestDTO;
    const result = await this._toggleDeliverableStatusUseCase.execute(dto);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.DELIVERABLES.STATUS_UPDATED).build());
  }
}
