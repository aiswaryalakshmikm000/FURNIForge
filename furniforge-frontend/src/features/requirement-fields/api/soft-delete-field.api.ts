import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { FieldCommandResponseDTO } from "../types/field-command.type";

export const softDeleteFieldApi = async ( fieldId: string ): Promise<ApiResponse<FieldCommandResponseDTO>> => {
  const res = await httpClient.patch(API_ENDPOINTS.ADMIN.FIELDS.SOFT_DELETE(fieldId));

  return res.data;
};