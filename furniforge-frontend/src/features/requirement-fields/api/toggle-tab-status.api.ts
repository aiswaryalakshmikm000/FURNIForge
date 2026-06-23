import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { TabCommandResponseDTO } from "../types/tab-command.type";

export const toggleTabStatusApi = async ( tabId: string ): Promise<ApiResponse<TabCommandResponseDTO>> => {
  const res = await httpClient.patch( API_ENDPOINTS.ADMIN.TABS.TOGGLE_STATUS(tabId) );

  return res.data;
};

