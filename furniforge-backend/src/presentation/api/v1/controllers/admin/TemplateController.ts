import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../../../../infrastructure/di/types";
import type { ICreateTemplateUseCase } from "../../../../../application/use-cases/template/interfaces/ICreateTemplateUseCase";
import type { CreateTemplateDTO } from "../../../../../application/dtos/templates/CreateTemplateDTO";
import { AuthRequest } from "../../../middlewares/authMiddleware";
import { HttpStatusCode } from "../../../../../domain/enums/HttpStatusCode";
import { ResponseBuilder } from "../../../../../shared/responses/ApiResponse";
import { SUCCESS_MESSAGES } from "../../../../../infrastructure/config/messages";
import type { UpdateTemplateDTO } from "../../../../../application/dtos/templates/UpdateTemplateDTO";
import type { IUpdateTemplateUseCase } from "../../../../../application/use-cases/template/interfaces/IUpdateTemplateUseCase";
import type { TemplateCommandRequestDTO } from "../../../../../application/dtos/templates/templateCommandDTO";
import type { IDeleteTemplateUseCase } from "../../../../../application/use-cases/template/interfaces/IDeleteTemplateUseCase";
import type { IToggleTemplateStatusUseCase } from "../../../../../application/use-cases/template/interfaces/IToggleTemplateStatusUseCase";
import type { ISoftDeleteTemplateUseCase } from "../../../../../application/use-cases/template/interfaces/ISoftDeleteTemplateUseCase";

@injectable()
export class TemplateController {
  constructor(
    @inject(TYPES.ICreateTemplateUseCase) private _createTemplateUseCase: ICreateTemplateUseCase,
    @inject(TYPES.IUpdateTemplateUseCase) private _updateTemplateUseCase: IUpdateTemplateUseCase,
    @inject(TYPES.IDeleteTemplateUseCase) private _deleteTemplateUseCase: IDeleteTemplateUseCase,
    @inject(TYPES.IToggleTemplateStatusUseCase) private _toggleTemplateStatusUseCase: IToggleTemplateStatusUseCase,
    @inject(TYPES.ISoftDeleteTemplateUseCase) private _softDeleteTemplateUseCase: ISoftDeleteTemplateUseCase,
  ) {}

  createTemplate = async ( req: AuthRequest, res: Response ) => {
    const dto = req.body as CreateTemplateDTO;
    const result = await this._createTemplateUseCase.execute({...dto, createdById: req.user!.userId });

    res.status(HttpStatusCode.CREATED).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TEMPLATES.CREATED ).build() );
  };

  updateTemplate = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const dto = req.body as UpdateTemplateDTO;

  const result = await this._updateTemplateUseCase.execute( id, dto );
  res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TEMPLATES.UPDATED ).build() );
  };

  deleteTemplate = async ( req: Request, res: Response ) => {
  const params = req.params as TemplateCommandRequestDTO;
  const result = await this._deleteTemplateUseCase.execute(params);

  res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TEMPLATES.DELETED ).build());
  };

  toggleTemplateStatus = async (req: Request, res: Response) => {
  const  params = req.params as TemplateCommandRequestDTO;
  const result = await this._toggleTemplateStatusUseCase.execute(params);

  res.status(HttpStatusCode.OK).json( ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TEMPLATES.UPDATED ).build());
  };

  softDeleteTemplate = async ( req: Request, res: Response ) => {
  const params = req.params as TemplateCommandRequestDTO;
  const result = await this._softDeleteTemplateUseCase.execute( params );

  res.status(HttpStatusCode.OK).json(ResponseBuilder.success( result, SUCCESS_MESSAGES.ADMIN.TEMPLATES.DELETED ).build());
  };
}


