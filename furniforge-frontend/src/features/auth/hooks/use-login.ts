import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/login.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../store/auth.slice";
import { toast } from "sonner";
import type { LoginRequestDTO, LoginResponseDTO } from "../../../types/auth/login.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { getErrorMessage } from "../../../types/api/api-error.type";
import type { AppAxiosError } from "../../../types/api/api-error.type";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequestDTO) => loginApi(data),

    onSuccess: (res: ApiResponse<LoginResponseDTO>) => {

      const {user, message} = res.data 
      dispatch(setAuth({user}));

      toast.success(message);
      navigate("/")
    },

    onError: (error: AppAxiosError) => {
      toast.error(getErrorMessage(error))
    }
  });
};