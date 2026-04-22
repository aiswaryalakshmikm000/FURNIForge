import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux"
import { verifyOtpApi } from "../api/verify-otp.api";
import { setAuth } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";
import type { VerifyOtpRequestDTO, VerifyOtpResponseDTO } from "../../../types/auth/verify-otp.type";
import type { ApiResponse } from "../../../types/api/api-response.type";
import { toast } from "sonner";
import { getErrorMessage, type AppAxiosError } from "../../../types/api/api-error.type";

export const useVerifyOtp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: VerifyOtpRequestDTO) => verifyOtpApi(data),
        onSuccess: (res: ApiResponse<VerifyOtpResponseDTO>) => {
            const {user} = res.data
            console.log(user, res.message)
            dispatch(setAuth({user}))
            toast.success(res.message)
            navigate("/dashboard")
        },
        onError: (error: AppAxiosError) => {
            toast.error(getErrorMessage(error))
        }
    });
};

  