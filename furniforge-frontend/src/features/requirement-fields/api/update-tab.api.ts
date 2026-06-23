import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { TabCommandResponseDTO, UpdateTabDTO } from "../types/tab-command.type";

export const updateTabApi = async ( tabId: string, payload: UpdateTabDTO ): Promise<ApiResponse<TabCommandResponseDTO>> => {
  const res = await httpClient.patch( API_ENDPOINTS.ADMIN.TABS.UPDATE(tabId), payload );

  return res.data;
};