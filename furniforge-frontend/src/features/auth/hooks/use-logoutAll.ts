import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logoutAllApi } from "../api/logoutAll.api";
import { logout } from "../store/auth.slice";
import { toast } from "sonner";
import { normalizeError } from "../../../core/error/error-handler";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

export const useLogoutAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutAllApi,

    onSuccess: (res) => {
      dispatch(logout());
      toast.success(res.message);

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