import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { AssignDesignerDTO, AssignDesignerResponseDTO } from "../../lead/types/assign-designer.type";

export const assignDesignerApi = async(leadId: string, payload: AssignDesignerDTO): Promise<ApiResponse<AssignDesignerResponseDTO>> => {
    const res = await httpClient.patch(API_ENDPOINTS.ADMIN.LEADS.ASSIGN_DESIGNER(leadId), payload);

    return res.data

}