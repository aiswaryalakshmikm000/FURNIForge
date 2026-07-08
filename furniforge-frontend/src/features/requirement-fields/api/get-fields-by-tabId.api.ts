import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetFieldsByTabIdRequestDTO, GetFieldsByTabIdResponseDTO } from "../types/field.type";

export const getFieldsByTabIdApi = async ( params: GetFieldsByTabIdRequestDTO ): Promise<ApiResponse<GetFieldsByTabIdResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.REQUIREMENT_FIELDS.GET_FIELDS_BY_TABID, { params } );

  return res.data;
};