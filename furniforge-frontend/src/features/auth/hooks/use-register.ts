import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/register.api";
import { toast } from "sonner";
import type { RegisterRequestDTO, RegisterResponseDTO } from "../types/register.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const useRegister = () => {

  return useMutation({
    mutationFn: (data: RegisterRequestDTO) => registerApi(data),

    onSuccess: (res: ApiResponse<RegisterResponseDTO>) => {
      toast.success(res.message);
    },
  });
};
