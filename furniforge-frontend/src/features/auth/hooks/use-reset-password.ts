import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../api/reset-password.api";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { ResetPasswordRequestDTO } from "../../../types/auth/forgot-password.type";
import { sessionManager } from "../../../core/auth/session-manager";

export const useResetPassword = () => {

  return useMutation({
    mutationFn: (data: ResetPasswordRequestDTO) => resetPasswordApi(data),

    onSuccess: (res: ApiResponse<null>) => {
      sessionManager.clearResetToken();
      toast.success(res.message);
    }
  });
};


