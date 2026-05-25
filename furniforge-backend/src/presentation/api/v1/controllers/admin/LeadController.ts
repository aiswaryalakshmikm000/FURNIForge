import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../infrastructure/di/types";
import type{ IGetAllLeadsUseCase } from "../../../../../application/use-cases/lead/interfaces/IGetAllLeadUseCase";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type {GetAllLeadsQueryDTO } from "../../../../../application/dtos/lead/GetAllLeadsDTO";
import { AssignDesignerDTO } from "../../../../../application/dtos/lead/AssignDesignerDTO";
import type { IAssignDesignerUseCase } from "../../../../../application/use-cases/lead/interfaces/IAssignDesignerUseCase";
import type { IGetDesignerOptionsUseCase } from "../../../../../application/use-cases/lead/interfaces/IGetDesignerOptionsUseCase";
import { CreateLeadDTO } from "../../../../../application/dtos/lead/CreateLeadDTO";
import type { ICreateManualLeadUseCase } from "../../../../../application/use-cases/lead/interfaces/ICreateManualLeadUseCase";

@injectable()
export class LeadController {
  constructor(
    @inject(TYPES.IGetAllLeadsUseCase) private _getAllLeadsUseCase: IGetAllLeadsUseCase,
    @inject(TYPES.IAssignDesignerUseCase) private _assignDesignerUseCase: IAssignDesignerUseCase,
    @inject(TYPES.IGetDesignerOptionsUseCase) private _getDesignerOptionsUseCase: IGetDesignerOptionsUseCase,
    @inject(TYPES.ICreateManualLeadUseCase) private _createManualLeadUseCase: ICreateManualLeadUseCase,
  ) {}

  getAllLeads = async (req: Request, res: Response) => {
    const query = req.query as unknown as GetAllLeadsQueryDTO;
    const result = await this._getAllLeadsUseCase.execute(query);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEADS_FETCH_SUCCESS).build());
  };

  assignDesigner = async (req: Request, res: Response) => {
    const {id} = req.params;
    console.log("ID", id)
    const body = req.body as AssignDesignerDTO

    const result = await this._assignDesignerUseCase.execute(id, body.designerId);
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.DESIGNER_ASSIGNED).build())
  }

  getDesignerOptions = async (_req: Request, res: Response) => {
    const result = await this._getDesignerOptionsUseCase.execute();
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result).build())
  }

  createLead = async (req: Request, res: Response) => {
    const body = req.body as CreateLeadDTO;
    const result = await this._createManualLeadUseCase.execute(body)

    res.status(HttpStatusCode.CREATED).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.LEAD_CREATED).build())
  }
}
