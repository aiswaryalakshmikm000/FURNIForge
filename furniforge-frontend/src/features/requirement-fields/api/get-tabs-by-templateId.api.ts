import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetTabsByTemplateIdRequestDTO, GetTabsByTemplateIdResponseDTO } from "../types/tab.type";

export const getTabsByTemplateIdApi = async ( params: GetTabsByTemplateIdRequestDTO ): Promise<ApiResponse<GetTabsByTemplateIdResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.REQUIREMENT_FIELDS.GET_TABS_BY_TEMPLATEID, { params } );

  return res.data;
};