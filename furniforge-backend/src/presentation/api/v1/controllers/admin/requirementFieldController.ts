import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import type { IGetRequirementFieldDeliverablesUseCase } from "../../../../../application/use-cases/deliverable/interfaces/IGetRequirementFieldDeliverablesUseCase";
import type { GetRequirementFieldDeliverablesQueryDTO } from "../../../../../application/dtos/requirementFields/GetRequirementFieldDeliverablesDTO";

@injectable()
export class RequirementFieldController {
  constructor(
    @inject(TYPES.IGetRequirementFieldDeliverablesUseCase) private _getRequirementFieldDeliverablesUseCase: IGetRequirementFieldDeliverablesUseCase
  ) {}

  getDeliverables = async ( req: Request, res: Response ) => {

  const query = req.query as GetRequirementFieldDeliverablesQueryDTO
  const result = await this._getRequirementFieldDeliverablesUseCase.execute(query);

  res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.REQUIREMENT_FIELDS.FETCH_SUCCESS ).build() );
  };
}
