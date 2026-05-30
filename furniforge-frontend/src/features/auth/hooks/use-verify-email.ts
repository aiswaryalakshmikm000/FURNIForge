import { useMutation } from "@tanstack/react-query";
import type { VerifyEmailRequestDTO, VerifyEmailResponseDTO } from "../../../types/auth/verify-email.type";
import { verifyUserApi } from "../api/verify-user.api";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { toast } from "sonner";

export const useVerifyEmail = () => {

  return useMutation({
    mutationFn: (data: VerifyEmailRequestDTO) => verifyUserApi(data),

    onSuccess: (res: ApiResponse<VerifyEmailResponseDTO>) => {
      toast.success(res.message);
    },
  });
};