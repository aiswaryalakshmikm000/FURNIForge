import { inject, injectable } from "inversify";
import type { IGetAllDeliverablesUseCase } from "./interfaces/IGetAllDeliverablesUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { GetAllDeliverablesQueryDTO, GetAllDeliverablesResponseDTO } from "../../dtos/deliverables/GetAllDeliverablesDTO";
import { buildPaginationMeta, getPagination } from "../../../shared/utils/paginate";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import { DeliverableMapper } from "../../mappers/deliverable/DeliverableMapper";

@injectable()
export class GetAllDeliverablesUseCase implements IGetAllDeliverablesUseCase {
    constructor (
        @inject(TYPES.IDeliverableRepository) private _deliverableRepository: IDeliverableRepository,
    ){}

    async execute(query: GetAllDeliverablesQueryDTO): Promise<GetAllDeliverablesResponseDTO> {
        
        const {skip, take } = getPagination({
            page: query.page,
            limit: query.limit,
        });

        const [rows, total] = await Promise.all([
            this._deliverableRepository.findAllDeliverableRows({
                skip, 
                take,
                search: query.search,
                status: query.status,
                sortBy: query.sortBy,
                sortOrder: query.sortOrder,
            }),
            this._deliverableRepository.countDeliverables({
                search: query.search,
                status: query.status,
            })
        ]);

        return {deliverables: rows.map(DeliverableMapper.toResponse), ...buildPaginationMeta(query.page, query.limit, total)}
    }
}