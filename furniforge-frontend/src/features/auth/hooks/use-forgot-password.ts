import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "../api/forgot-password.api";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ForgotPasswordRequestDTO, ForgotPasswordResponseDTO } from "../../../types/auth/forgot-password.type";

export const useForgotPassword = () => {

  return useMutation({
    mutationFn: (data: ForgotPasswordRequestDTO) => forgotPasswordApi(data),

    onSuccess: (res: ApiResponse<ForgotPasswordResponseDTO>) => {
        toast.success(res.message);
    }
  });
};

