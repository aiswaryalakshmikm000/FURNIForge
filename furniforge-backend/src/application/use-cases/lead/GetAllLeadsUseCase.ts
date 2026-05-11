import { IGetAllLeadsUseCase } from "./interfaces/IGetAllLeadUseCase.js";
import { GetAllLeadsQueryDTO, GetAllLeadsResponseDTO } from "../../dtos/lead/GetAllLeadsDTO.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { ILeadRepository } from "../../../domain/repositories/ILeadRepository.js";
import { LeadResponseMapper } from "../../mappers/LeadResponseMapper.js";

@injectable()
export class GetAllLeadsUseCase implements IGetAllLeadsUseCase {
  constructor(
    @inject(TYPES.ILeadRepository) private leadRepository: ILeadRepository,
  ) {}

  async execute(query: GetAllLeadsQueryDTO): Promise<GetAllLeadsResponseDTO> {
    const skip = (query.page - 1) * query.limit;

    const rows = await this.leadRepository.findAllLeadRows({
      skip,
      take: query.limit,

      search: query.search,
      status: query.status,
      source: query.source,

      sortOrder: query.sortOrder,
    });

    const total = await this.leadRepository.countLeads({
      search: query.search,
      status: query.status,
      source: query.source,
    });

    return {
      leads: rows.map(LeadResponseMapper.toDTO),

      total,

      page: query.page,

      limit: query.limit,
    };
  }
}
