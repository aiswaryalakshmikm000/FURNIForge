import { useQuery } from "@tanstack/react-query";
import { meApi } from "../api/me.api";
import { useDispatch } from "react-redux";
import { setAuth, logout } from "../store/auth.slice";
import { useEffect } from "react";
import { type AppAxiosError } from "../../../types/api/api-error.type";
import type { MeResponseDTO } from "../../../types/auth/me";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const useAuth = () => {
  const dispatch = useDispatch();

  const query = useQuery<ApiResponse<MeResponseDTO>, AppAxiosError>({
    queryKey: ["me"],
    queryFn: meApi,
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (query.isSuccess) {
      const { user } = query.data.data;
      dispatch(setAuth({ user }));
    }
    if (query.isError) {
      const status = query.error?.response?.status;
      if (status === 401 || status === 403) {
        dispatch(logout());
      }
    }

  }, [query.isSuccess, query.isError, query.data, query.error, dispatch]);

  return query;
};
