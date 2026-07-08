import { useMutation } from "@tanstack/react-query";
import { verifyResetOtpApi } from "../api/verify-reset-otp.api";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { VerifyResetOtpRequestDTO, VerifyResetOtpResponseDTO } from "../types/forgot-password.type";

export const useVerifyResetOtp = () => {
  return useMutation({
    mutationFn: (data: VerifyResetOtpRequestDTO) => verifyResetOtpApi(data),

    onSuccess: (res: ApiResponse<VerifyResetOtpResponseDTO>) => {
      toast.success(res.message); 
    }
  });
};