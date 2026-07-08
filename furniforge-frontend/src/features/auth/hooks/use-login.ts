import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/login.api";
import { toast } from "sonner";
import type { LoginRequestDTO, LoginResponseDTO } from "../types/login.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const useLogin = () => {

  return useMutation({
    mutationFn: (data: LoginRequestDTO) => loginApi(data),

    onSuccess: (res: ApiResponse<LoginResponseDTO>) => {
      toast.success(res.message);
    },
  });
};