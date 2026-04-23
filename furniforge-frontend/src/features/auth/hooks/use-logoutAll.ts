import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logoutAllApi } from "../api/logoutAll.api";
import { logout } from "../store/auth.slice";
import { toast } from "sonner";
import { getErrorMessage } from "../../../types/api/api-error.type";

export const useLogoutAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutAllApi,

    onSuccess: (res) => {
      dispatch(logout());
      toast.success(res.message);
      navigate("/login");
    },

    onError: (error) => {
      dispatch(logout());
      toast.error(getErrorMessage(error));
      navigate("/login");
    },
  });
};