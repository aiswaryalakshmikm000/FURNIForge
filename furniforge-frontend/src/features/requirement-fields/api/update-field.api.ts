import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { FieldCommandResponseDTO, UpdateFieldDTO } from "../types/field-command.type";

export const updateFieldApi = async ( fieldId: string, payload: UpdateFieldDTO ): Promise<ApiResponse<FieldCommandResponseDTO>> => {
  const res = await httpClient.put( API_ENDPOINTS.ADMIN.FIELDS.UPDATE(fieldId), payload );

  return res.data;
};