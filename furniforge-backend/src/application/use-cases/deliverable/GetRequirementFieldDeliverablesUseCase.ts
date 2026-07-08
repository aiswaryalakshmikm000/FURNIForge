import { inject, injectable } from "inversify";
import type { IGetRequirementFieldDeliverablesUseCase } from "./interfaces/IGetRequirementFieldDeliverablesUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import type { GetRequirementFieldDeliverablesQueryDTO, GetRequirementFieldDeliverablesResponseDTO } from "../../dtos/requirementFields/GetRequirementFieldDeliverablesDTO";
import { RequirementFieldMapper } from "../../mappers/requirementField/RequirementFieldMapper";

@injectable()
export class GetRequirementFieldDeliverablesUseCase implements IGetRequirementFieldDeliverablesUseCase {
    constructor (
        @inject(TYPES.IDeliverableRepository) private _deliverableRepository: IDeliverableRepository,
    ){}
    async execute(query: GetRequirementFieldDeliverablesQueryDTO): Promise <GetRequirementFieldDeliverablesResponseDTO> {

        const rows = await this._deliverableRepository.findRequirementFieldDeliverables(query.search);

        return {deliverables: rows.map(RequirementFieldMapper.toDeliverableResponse)}
    }
}