import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { CreateFieldDTO } from "../../../../../application/dtos/fields/createFieldDTO";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { ICreateFieldUseCase } from "../../../../../application/use-cases/field/interfaces/ICreateFieldUseCase";

@injectable()
export class FieldController {
  constructor(
    @inject(TYPES.ICreateFieldUseCase) private _createFieldUseCase: ICreateFieldUseCase,
  ) {}
  createField = async (req: Request, res: Response) => {
    const dto = req.body as CreateFieldDTO;
    const result = await this._createFieldUseCase.execute(dto);

    res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.FIELDS.CREATED ).build() );
  };
}
