import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/register.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { RegisterRequestDTO, RegisterResponseDTO } from "../../../types/auth/register.type";
import { mapRegisterResponse } from "../mappers/register.mapper";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterRequestDTO) => registerApi(data),

    onSuccess: (res: RegisterResponseDTO) => {
      const mapped = mapRegisterResponse(res);
      const {message, meta} = mapped

      toast.success(message);
      navigate("/verify-otp", {state: {email: meta.email, tempUserId: meta.tempUserId}}); 
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Registration failed");
    },
  });
};
