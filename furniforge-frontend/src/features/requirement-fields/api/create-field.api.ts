import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { CreateFieldDTO, FieldCommandResponseDTO } from "../types/field-command.type";

export const createFieldApi = async ( payload: CreateFieldDTO ): Promise<ApiResponse<FieldCommandResponseDTO>> => {
  const res = await httpClient.post( API_ENDPOINTS.ADMIN.FIELDS.CREATE, payload );
  
  return res.data;
};