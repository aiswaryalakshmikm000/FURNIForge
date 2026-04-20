import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/login.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenService } from "../../../core/auth/token-service";
import { setAuth } from "../store/auth.slice";
import { toast } from "sonner";
import type { LoginRequestDTO, LoginResponseDTO } from "../../../types/auth/login.type";
import { mapLoginResponseToUser } from "../mappers/auth.mapper";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequestDTO) => loginApi(data),

    onSuccess: (res: LoginResponseDTO) => {
      const user = mapLoginResponseToUser(res)
      const accessToken = res.accessToken;

      tokenService.set(accessToken);
      dispatch(setAuth({user, accessToken}));

      toast.success("Login successful!");
      navigate("/")
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    }
  });
};