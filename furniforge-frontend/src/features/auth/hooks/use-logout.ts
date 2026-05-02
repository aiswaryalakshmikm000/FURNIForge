import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../api/logout.api";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { toast } from "sonner";
import { normalizeError } from "../../../core/error/error-handler";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => logoutApi(),

    onSuccess: (res: ApiResponse<null>) => {
      const { message } = res;
      dispatch(logout());
      toast.success(message);
      navigate(APP_ROUTES.AUTH.LOGIN);
    },

    onError: (error: unknown) => {
      const appError = normalizeError(error);

      dispatch(logout());
      toast.error(appError.message);
      navigate(APP_ROUTES.AUTH.LOGIN);
    },
  });
};
