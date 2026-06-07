import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DeliverableCommandDTO, DeliverableCommandResponseDTO } from "../types/deliverable-command-type";

export const createDeliverableApi = async ( payload: DeliverableCommandDTO ): Promise<ApiResponse<DeliverableCommandResponseDTO>> => {
  const res = await httpClient.post( API_ENDPOINTS.ADMIN.DELIVERABLES.CREATE, payload );

  return res.data;
};