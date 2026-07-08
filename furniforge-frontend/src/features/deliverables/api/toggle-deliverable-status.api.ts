import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client"
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DeliverableCommandResponseDTO } from "../types/deliverable-command.type";

export const toggleDeliverableStatusApi = async (deliverableId: string): Promise<ApiResponse<DeliverableCommandResponseDTO>> =>{
    const res = await httpClient.patch(API_ENDPOINTS.ADMIN.DELIVERABLES.TOGGLE_STATUS(deliverableId))
    return res.data
}

