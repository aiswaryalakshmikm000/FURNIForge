import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../api/logout.api";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";
import {
  getErrorMessage,
  type AppAxiosError,
} from "../../../types/api/api-error.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { toast } from "sonner";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => logoutApi(),

    onSuccess: (res: ApiResponse<null>) => {
      const { message } = res;
      dispatch(logout());
      toast.success(message);
      navigate("/login");
    },

    onError: (error: AppAxiosError) => {
      dispatch(logout());
      toast.error(getErrorMessage(error));
      navigate("/login");
    },
  });
};
