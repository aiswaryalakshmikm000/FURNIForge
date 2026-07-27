import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVerifyEmail } from "../hooks/use-verify-email";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { sessionManager } from "../../../core/auth/session-manager";

const VerifyEmailPage = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess, isError, data } = useVerifyEmail();

  useEffect(() => {
    if (!token) return;
    mutate({ token });
  }, [token, mutate]);

  useEffect(() => {
    if (!isSuccess || !data) return;

    const res = data.data;
    sessionManager.setResetToken(res.resetToken);
    const timer = setTimeout(() => {
      navigate(`${APP_ROUTES.AUTH.RESET_PASSWORD}?mode=create`);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isSuccess, data, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        {isPending && <h1>Verifying your account...</h1>}
        {isSuccess && <h1>Email verified successfully 🎉</h1>}
        {isError && <h1>Invalid or expired link</h1>}
      </div>
    </div>
  );
};

export default VerifyEmailPage;