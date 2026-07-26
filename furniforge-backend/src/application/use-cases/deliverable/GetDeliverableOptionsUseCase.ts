import { inject, injectable } from "inversify";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import { TYPES } from "../../../infrastructure/di/types";
import { DeliverableOptionMapper } from "../../mappers/deliverable/DeliverableOptionMapper";
import { GetDeliverableOptionsResponseDTO } from "../../dtos/deliverables/GetDeliverableOptionsDTO";

@injectable()
export class GetDeliverableOptionsUseCase {

  constructor(
   @inject(TYPES.IDeliverableRepository) private _delievrableRepository: IDeliverableRepository
  ){}

  async execute(): Promise<GetDeliverableOptionsResponseDTO>{

   const deliverables = await this._delievrableRepository.findActiveDeliverableOptions();
   return { deliverables: deliverables.map( DeliverableOptionMapper.toResponse )}; 

  }  

}