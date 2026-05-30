import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IGetAllDesignersUseCase } from "./interfaces/IGetAllDesignersUseCase";
import type { GetAllDesignersQueryDTO, GetAllDesignersResponseDTO } from "../../dtos/designer/GetAllDesignersDTO";
import type { IDesignerRepository } from "../../../domain/repositories/IDesignerRepository";
import { DesignerMapper } from "../../mappers/DesignerMapper";
import { buildPaginationMeta, getPagination } from "../../../shared/utils/paginate";

@injectable()
export class GetAllDesignersUseCase implements IGetAllDesignersUseCase {
  constructor(
    @inject(TYPES.IDesignerRepository) private _designerRepository: IDesignerRepository,
  ) {}

  async execute(query: GetAllDesignersQueryDTO): Promise<GetAllDesignersResponseDTO> {

    const { skip, take } = getPagination({page: query.page, limit: query.limit});

    const [rows, total] = await Promise.all([
      this._designerRepository.findAllDesignerRows({
        skip,
        take,
        search: query.search,
        status: query.status,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
      }),

      this._designerRepository.countDesigners({
        search: query.search,
        status: query.status,
      }),
    ]);

    return { designers: rows.map(DesignerMapper.toResponse), ...buildPaginationMeta(query.page, query.limit, total) };
  }
}
