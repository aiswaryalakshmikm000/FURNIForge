import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../api/reset-password.api";
import type { ResetPasswordRequestDTO } from "../../../types/auth/forgot-password.type";

export const useResetPassword = () => {

  return useMutation({
    mutationFn: (data: ResetPasswordRequestDTO) => resetPasswordApi(data),
  });
};


