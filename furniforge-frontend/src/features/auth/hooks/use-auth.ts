import { useQuery } from "@tanstack/react-query";
import { meApi } from "../api/me.api";
import { useDispatch } from "react-redux";
import { setAuth, logout } from "../store/auth.slice";
import { toast } from "sonner";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: ["me"],
    queryFn: meApi,
    retry: false,
  });

  useEffect(() => {
    if (query.isSuccess) {
      const { user } = query.data.data;
      dispatch(setAuth({ user }));
      toast.success(query.data.message);
    }

    if (query.isError) {
      dispatch(logout());
      toast.error("Session Expired");
    }
  }, [query.isSuccess, query.isError]);

  return query;
};
