import type { GetRequirementFieldDeliverablesQueryDTO, GetRequirementFieldDeliverablesResponseDTO } from "../../../dtos/requirementFields/GetRequirementFieldDeliverablesDTO";

export interface IGetRequirementFieldDeliverablesUseCase {
    execute(query: GetRequirementFieldDeliverablesQueryDTO): Promise<GetRequirementFieldDeliverablesResponseDTO>
}