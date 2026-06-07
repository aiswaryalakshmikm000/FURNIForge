import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { IGetAllLeadsUseCase } from "../../../../../application/use-cases/lead/interfaces/IGetAllLeadUseCase";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type {GetAllLeadsQueryDTO } from "../../../../../application/dtos/lead/GetAllLeadsDTO";
import type { IAssignDesignerUseCase } from "../../../../../application/use-cases/lead/interfaces/IAssignDesignerUseCase";
import type { IGetDesignerOptionsUseCase } from "../../../../../application/use-cases/lead/interfaces/IGetDesignerOptionsUseCase";
import type { ICreateManualLeadUseCase } from "../../../../../application/use-cases/lead/interfaces/ICreateManualLeadUseCase";
import type { IDeleteLeadUseCase } from "../../../../../application/use-cases/lead/interfaces/IDeleteLeadUseCase";
import type { IUpdateLeadUseCase } from "../../../../../application/use-cases/lead/interfaces/IUpdateLeadUseCase";
import type { CreateLeadDTO } from "../../../../../application/dtos/lead/CreateLeadDTO";
import type { UpdateLeadFDTO } from "../../../../../application/dtos/lead/UpdateLeadDTO";
import { LeadCommandRequestDTO } from "../../../../../application/dtos/lead/LeadCommandResponseDTO";
import { AssignDesignerDTO } from "../../../../../application/dtos/lead/AssignDesignerDTO";

@injectable()
export class LeadController {
  constructor(
    @inject(TYPES.IGetAllLeadsUseCase) private _getAllLeadsUseCase: IGetAllLeadsUseCase,
    @inject(TYPES.IAssignDesignerUseCase) private _assignDesignerUseCase: IAssignDesignerUseCase,
    @inject(TYPES.IGetDesignerOptionsUseCase) private _getDesignerOptionsUseCase: IGetDesignerOptionsUseCase,
    @inject(TYPES.ICreateManualLeadUseCase) private _createManualLeadUseCase: ICreateManualLeadUseCase,
    @inject(TYPES.IDeleteLeadUseCase) private _deleteLeadUseCase: IDeleteLeadUseCase, 
    @inject(TYPES.IUpdateLeadUseCase) private _updateLeadUseCase: IUpdateLeadUseCase, 
  ) {}

  getAllLeads = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllLeadsQueryDTO;
    const result = await this._getAllLeadsUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEAD.FETCH_SUCCESS).build());
  };

  assignDesigner = async (req: Request, res: Response) => {
    const {id} = req.params;
    const body = req.body as AssignDesignerDTO;

    const result = await this._assignDesignerUseCase.execute(id, body);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEAD.DESIGNER_ASSIGNED).build())
  }

  getDesignerOptions = async (_req: Request, res: Response) => {
    const result = await this._getDesignerOptionsUseCase.execute();
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result).build())
  }

  createManualLead = async (req: Request, res: Response) => {
    const body = req.body as CreateLeadDTO;
    const result = await this._createManualLeadUseCase.execute(body)

    res.status(HttpStatusCode.CREATED).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEAD.CREATED).build())
  }

  deleteLead = async ( req: Request, res: Response ) => {
    const id  = req.params as LeadCommandRequestDTO;
    const result = await this._deleteLeadUseCase.execute(id);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEAD.DELETED).build());
  };

  updateLead = async ( req: Request, res: Response ) => {

    const { id } = req.params
    const body = req.body as UpdateLeadFDTO;

    const result = await this._updateLeadUseCase.execute( id, body );

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.LEAD.UPDATED).build());
  };
}
