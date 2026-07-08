import { useMutation } from "@tanstack/react-query";
import { verifyOtpApi } from "../api/verify-otp.api";
import type { VerifyOtpRequestDTO, VerifyOtpResponseDTO } from "../types/verify-otp.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { toast } from "sonner";

export const useVerifyOtp = () => {

    return useMutation({
        mutationFn: (data: VerifyOtpRequestDTO) => verifyOtpApi(data),

        onSuccess: (res: ApiResponse<VerifyOtpResponseDTO>) => {
            toast.success(res.message)
        }
    });
};

  