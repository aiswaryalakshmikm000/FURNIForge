import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { CreateFieldDTO } from "../../../../../application/dtos/fields/createFieldDTO";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { ICreateFieldUseCase } from "../../../../../application/use-cases/field/interfaces/ICreateFieldUseCase";
import type { FieldCommandRequestDTO } from "../../../../../application/dtos/fields/fieldCommandDTO";
import type { IUpdateFieldUseCase } from "../../../../../application/use-cases/field/interfaces/IUpdateFieldUseCase";
import { UpdateFieldDTO } from "../../../../../application/dtos/fields/updateFieldDTO";
import type { ISoftDeleteFieldUseCase } from "../../../../../application/use-cases/field/interfaces/ISoftDeleteFieldUseCase";

@injectable()
export class FieldController {
  constructor(
    @inject(TYPES.ICreateFieldUseCase) private _createFieldUseCase: ICreateFieldUseCase,
    @inject(TYPES.IUpdateFieldUseCase) private _updateFieldUseCase: IUpdateFieldUseCase,
    @inject(TYPES.ISoftDeleteFieldUseCase) private _softDeleteFieldUseCase: ISoftDeleteFieldUseCase,
  ) {}
  createField = async (req: Request, res: Response) => {
    const dto = req.body as CreateFieldDTO;
    const result = await this._createFieldUseCase.execute(dto);

    res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.FIELDS.CREATED ).build() );
  };

  updateField = async ( req: Request, res: Response ) => {
    const params = req.params as FieldCommandRequestDTO;
    const dto = req.body as UpdateFieldDTO;
    console.log()

    const result = await this._updateFieldUseCase.execute( params, dto );
    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.FIELDS.UPDATED ).build() );
  };

  softDelete = async (req: Request, res: Response) => {
    const params = req.params as FieldCommandRequestDTO;
    const result = await this._softDeleteFieldUseCase.execute(params);

    res.status(HttpStatusCode.OK).json(ResponseBuilder.success(result, SUCCESS_MESSAGES.ADMIN.FIELDS.DELETED));
  };
}
