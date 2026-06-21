import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import type { IGetRequirementFieldDeliverablesUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IGetRequirementFieldDeliverablesUseCase";
import type { GetRequirementFieldDeliverablesQueryDTO } from "../../../../../application/dtos/requirementFields/GetRequirementFieldDeliverablesDTO";
import type { GetTemplatesByDeliverableQueryDTO } from "../../../../../application/dtos/requirementFields/GetTemplatesByDeliverableDTO";
import type { IGetTemplatesByDeliverableUseCase } from "../../../../../application/use-cases/template/interfaces/IGetTemplatesByDeliverableUseCase";
import type { GetTabsByTemplateQueryDTO } from "../../../../../application/dtos/requirementFields/GetTabsByTemplateDTO";
import type { IGetTabsByTemplateUseCase } from "../../../../../application/use-cases/templateTab/interfaces/IGetTabsByTemplateUseCase";
import type { IGetFieldsByTabUseCase } from "../../../../../application/use-cases/field/interfaces/IGetFieldsByTabUseCase";
import { GetFieldsByTabQueryDTO } from "../../../../../application/dtos/requirementFields/GetFieldsByTabDTO";

@injectable()
export class RequirementFieldController {
  constructor(
    @inject(TYPES.IGetRequirementFieldDeliverablesUseCase) private _getRequirementFieldDeliverablesUseCase: IGetRequirementFieldDeliverablesUseCase,
    @inject(TYPES.IGetTemplatesByDeliverableUseCase) private _getTemplatesByDeliverablesUseCase: IGetTemplatesByDeliverableUseCase,
    @inject(TYPES.IGetTabsByTemplateUseCase) private _getTabsByTemplateUseCase: IGetTabsByTemplateUseCase,
    @inject(TYPES.IGetFieldsByTabUseCase ) private _getFieldsByTabUseCase: IGetFieldsByTabUseCase,
  ) {}

  getDeliverables = async ( req: Request, res: Response ) => {
    const query = req.query as GetRequirementFieldDeliverablesQueryDTO
    const result = await this._getRequirementFieldDeliverablesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.REQUIREMENT_FIELDS.DELIVARABLE_FETCH_SUCCESS ).build() );
  };

  getTemplates = async ( req: Request, res: Response ) => {
    const query = req.query as GetTemplatesByDeliverableQueryDTO;
    const result = await this._getTemplatesByDeliverablesUseCase.execute(query);

    res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.REQUIREMENT_FIELDS.TEMPLATES_FETCH_SUCCESS ).build() );
  };

  getTabs = async ( req: Request, res: Response ) => {
  const query = req.query as GetTabsByTemplateQueryDTO;
  const result = await this._getTabsByTemplateUseCase.execute(query);

  res.status(HttpStatusCode.OK).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.REQUIREMENT_FIELDS.TABS_FETCH_SUCCESS ).build());
  };

  getFields = async ( req: Request, res: Response ) => {
    const query = req.query as GetFieldsByTabQueryDTO;
    const result = await this._getFieldsByTabUseCase.execute(query)

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.REQUIREMENT_FIELDS.FIELDS_FETCH_SUCCESS).build());
  }
}
