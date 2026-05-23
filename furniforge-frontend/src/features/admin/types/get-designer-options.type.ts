export interface DesignerOptionDTO {
  id: string;
  fullName: string;
}

export interface GetDesignerOptionsResponseDTO {
  designers: DesignerOptionDTO[];
}