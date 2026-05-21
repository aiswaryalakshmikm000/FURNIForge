import { Navbar } from "../../../shared/components/layout/navbar";
import { OtpForm } from "../components/otp-form";
import { useResendForgotPasswordOtp } from "../hooks/use-resend-forgot-password-otp";
import { useVerifyResetOtp } from "../hooks/use-verify-reset-otp";
import { sessionManager } from "../../../core/auth/session-manager";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

const VerifyResetOtpPage = () => {
  // const [cooldown, setCooldown] = useState(0);
  const [cooldown, setCooldown] = useState(() => {
  const storedExpiry = sessionManager.getResetCooldown();

  if (!storedExpiry) return 0;

  const remaining = Math.floor(
    (Number(storedExpiry) - Date.now()) / 1000
  );

  return remaining > 0 ? remaining : 0;
});

  const navigate = useNavigate()

  const email = sessionManager.getEmailId();

  const { mutate: verifyOtp, isPending: isVerifying } = useVerifyResetOtp();
  const { mutate: resendOtp, isPending: isResending } = useResendForgotPasswordOtp();

  useEffect(() => {
    if (!email) {
      navigate(APP_ROUTES.AUTH.FORGOT_PASSWORD, { replace: true });
    }
  }, [email, navigate]);

  // useEffect(() => {
  //   const storedExpiry = sessionManager.getResetCooldown();

  //   if (storedExpiry) {
  //     const remaining = Math.floor((Number(storedExpiry) - Date.now()) / 1000);
  //     setCooldown(remaining > 0 ? remaining : 0);
  //   } else {
  //     setCooldown(0);
  //   }
  // }, []);

  if (!email) return null;

  const handleVerify = (otp: string) => {
    verifyOtp(
      {email, otp},
      {onSuccess: (res) => { 
        const resetToken = res.data.meta?.resetToken
        if(resetToken) sessionManager.setResetToken(resetToken)
        sessionManager.clearResetCooldown()
        navigate(APP_ROUTES.AUTH.RESET_PASSWORD)
      }}
    )
  }

  const handleResend = () => {
    resendOtp(
      {email},
      {onSuccess: (res) => {
        const newCooldown = res.data.meta?.cooldown ?? 30;
        const expiry = Date.now() + newCooldown * 1000;
        sessionManager.setResetCooldown(expiry.toString())
        setCooldown(newCooldown)
      }}
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">

        <OtpForm
          title="Verify OTP"
          subtitle={`Enter OTP sent to ${email}`}
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

export default VerifyResetOtpPage;