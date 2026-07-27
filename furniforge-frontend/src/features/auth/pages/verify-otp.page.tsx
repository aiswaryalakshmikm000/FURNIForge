import { Navbar } from "../../../shared/components/layout/navbar";
import { OtpForm } from "../components/otp-form";
import { useVerifyOtp } from "../hooks/use-verify-otp";
import { useResendOtp } from "../hooks/use-resend-otp";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sessionManager } from "../../../core/auth/session-manager";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/auth.slice";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { getDashboardRoute } from "../../../core/utils/routes.utils";

const VerifyOtpPage = () => {
  const [cooldown, setCooldown] = useState(() => {
  const storedExpiry = sessionManager.getSignupCooldown();

  if (!storedExpiry) return 0;

  const remaining = Math.floor(
    (Number(storedExpiry) - Date.now()) / 1000
  );

  return remaining > 0 ? remaining : 0;
});
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tempUserId = sessionManager.getTempUserId();
  const email = sessionManager.getEmailId();

  const { mutate: verifyOtp, isPending: isVerifying } = useVerifyOtp();
  const { mutate: resendOtp, isPending: isResending } = useResendOtp();

  useEffect(() => {
    if (!tempUserId) {
      navigate(APP_ROUTES.AUTH.REGISTER, {replace: true});
    }
  }, [tempUserId, navigate]);

  if (!tempUserId) return null; 

  const handleVerify = (otp: string) => {
    verifyOtp(
      { tempUserId, otp },
      {
        onSuccess: (res) => {
          const { user } = res.data;
          dispatch(setAuth({ user }));
          sessionManager.clearSignupFlow()
          navigate(getDashboardRoute(user.role));
        },
      }
    );
  };

  const handleResend = () => {
    resendOtp(
      { tempUserId },
      {
        onSuccess: (res) => {
          const newCooldown = res.data.meta?.cooldown ?? 30;
          const expiry = Date.now() + newCooldown*1000;
          sessionManager.setSignupCooldown(expiry.toString());
          setCooldown(newCooldown);
        },
      }
    );
  };


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <OtpForm
          key={cooldown}
          title="Verify Your Email"
          subtitle={email ? `We've sent a 6-digit OTP to ${email}` : `We've sent a 6-digit OTP`}
          isLoading={isVerifying}
          isResending={isResending}
          resendDelay={cooldown}
          onVerify={handleVerify}
          onResend={handleResend}
        />
      </main>
    </div>
  );
};

export default VerifyOtpPage;
