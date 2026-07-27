export interface DeliverableOptionDTO {
  id: string;
  name: string;
}

export interface GetDeliverableOptionsResponseDTO {
  deliverables: DeliverableOptionDTO[];
}