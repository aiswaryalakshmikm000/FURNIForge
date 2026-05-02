import { useMutation } from "@tanstack/react-query";
import { resendForgotPasswordOtpApi } from "../api/resend-forgot-password-otp.api";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ResendOtpResponseDTO } from "../../../types/auth/resend-otp.type";
import type { ResendForgotPasswordOtpRequestDTO } from "../../../types/auth/forgot-password.type";

export const useResendForgotPasswordOtp = () => {
  
  return useMutation({
    mutationFn: (data: ResendForgotPasswordOtpRequestDTO) => resendForgotPasswordOtpApi(data),

    onSuccess: (res: ApiResponse<ResendOtpResponseDTO>) => {
      toast.success(res.message);
    }
  });
};
