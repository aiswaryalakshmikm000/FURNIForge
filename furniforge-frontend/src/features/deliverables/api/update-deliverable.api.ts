import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DeliverableCommandDTO, DeliverableCommandResponseDTO } from "../types/deliverable-command.type";

export const updateDeliverableApi = async ( deliverableId: string, payload: DeliverableCommandDTO ): Promise<ApiResponse<DeliverableCommandResponseDTO>> => {
  const res = await httpClient.patch( API_ENDPOINTS.ADMIN.DELIVERABLES.UPDATE(deliverableId), payload );

  return res.data;
};