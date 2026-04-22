import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/register.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { RegisterRequestDTO, RegisterResponseDTO } from "../../../types/auth/register.type";
import { mapRegisterResponse } from "../mappers/register.mapper";
import { sessionManager } from "../../../core/auth/session-manager";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { getErrorMessage } from "../../../types/api/api-error.type";
import type { AppAxiosError } from "../../../types/api/api-error.type";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterRequestDTO) => registerApi(data),

    onSuccess: (res: ApiResponse<RegisterResponseDTO>) => {
      const mapped = mapRegisterResponse(res);
      const {message, meta} = mapped

      sessionManager.setTempUserId(meta.tempUserId)
      toast.success(message);

      navigate("/verify-otp"); 
    },

    onError: (error: AppAxiosError) => {
      toast.error(getErrorMessage(error))
    },
  });
};
