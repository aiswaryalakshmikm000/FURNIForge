import { useMutation } from "@tanstack/react-query";
import { googleAuthApi } from "../api/google-auth.api";
import { toast } from "sonner";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GoogleAuthResponseDTO } from "../types/login.type";


export const useGoogleAuth = () => {
 return useMutation({
   mutationFn: googleAuthApi,

   onSuccess: (res: ApiResponse<GoogleAuthResponseDTO>) => {
      toast.success(res.message);
    }
 });
};