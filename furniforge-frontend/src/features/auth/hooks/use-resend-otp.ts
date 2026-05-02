import { useMutation } from "@tanstack/react-query"
import { resendOTPApi } from "../api/resend-otp.api"
import { toast } from "sonner"
import type { ApiResponse } from "../../../types/api/api-response.type"
import type { ResendOtpRequestDTO, ResendOtpResponseDTO } from "../../../types/auth/resend-otp.type"

export const useResendOtp = () => {

    return useMutation({
        mutationFn:(data: ResendOtpRequestDTO) => resendOTPApi(data),

        onSuccess: (res: ApiResponse<ResendOtpResponseDTO>) => {
            toast.success(res.message);
        }
    })
}

