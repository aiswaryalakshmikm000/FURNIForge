import type { IGetAllLeadsUseCase } from "./interfaces/IGetAllLeadUseCase";
import type { GetAllLeadsQueryDTO, GetAllLeadsResponseDTO } from "../../dtos/lead/GetAllLeadsDTO";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ILeadRepository } from "../../../domain/repositories/ILeadRepository";
import { LeadResponseMapper } from "../../mappers/LeadResponseMapper";
import { buildPaginationMeta, getPagination } from "../../../shared/utils/paginate";

@injectable()
export class GetAllLeadsUseCase implements IGetAllLeadsUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private _leadRepository: ILeadRepository,
  ) {}

  async execute(query: GetAllLeadsQueryDTO): Promise<GetAllLeadsResponseDTO> {

    const { skip, take } = getPagination({page: query.page, limit: query.limit})

    const [rows, total] = await Promise.all([
      this._leadRepository.findAllLeadRows({
        skip,
        take,
        search: query.search,
        status: query.status,
        source: query.source,
        deliverable: query.deliverable,
        sortOrder: query.sortOrder,
      }),

      this._leadRepository.countLeads({
        search: query.search,
        status: query.status,
        source: query.source,
        deliverable: query.deliverable,
      }),
    ]);

    return { leads: rows.map(LeadResponseMapper.toDTO), ...buildPaginationMeta(query.page, query.limit, total) };
  }
}
