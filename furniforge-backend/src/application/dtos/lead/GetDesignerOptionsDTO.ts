export interface DesignerOptionResponseDTO {
  id: string;
  fullName: string;
}

export interface GetDesignerOptionsResponseDTO {
  designers: DesignerOptionResponseDTO[];
}
