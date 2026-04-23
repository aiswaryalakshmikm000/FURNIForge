import { useMutation } from "@tanstack/react-query"
import { resendOTPApi } from "../api/resend-otp.api"
import { toast } from "sonner"
import { getErrorMessage, type AppAxiosError } from "../../../types/api/api-error.type"
import type { ApiResponse } from "../../../types/api/api-response.type"
import type { ResendOtpRequestDTO, ResendOtpResponseDTO } from "../../../types/auth/resend-otp.type"

export const useResendOtp = (options?: {
    onSuccess?: (res: ApiResponse<ResendOtpResponseDTO>) => void;
  }) => {

    return useMutation({
        mutationFn:(data: ResendOtpRequestDTO) => resendOTPApi(data),

        onSuccess: (res: ApiResponse<ResendOtpResponseDTO>) => {
            const {message} = res
            toast.success(message);
            options?.onSuccess?.(res);
        },

        onError: (error: AppAxiosError) => {
            toast.error(getErrorMessage(error))
        }
    })
}

