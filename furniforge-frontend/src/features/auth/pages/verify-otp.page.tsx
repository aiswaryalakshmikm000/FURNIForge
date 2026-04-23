import { Navbar } from "../../../shared/components/layout/navbar";
import { OtpForm } from "../components/otp-form";
import { useVerifyOtp } from "../hooks/use-verify-otp";
import { useResendOtp } from "../hooks/use-resend-otp";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sessionManager } from "../../../core/auth/session-manager";

const VerifyOtpPage = () => {
  const navigate = useNavigate();
  const [cooldown, setCooldown] = useState(0);

  const tempUserId = sessionManager.getTempUserId();
  const email = sessionManager.getEmailId();

  const { mutate: verifyOtp, isPending } = useVerifyOtp();
  const { mutate: resendOtp } = useResendOtp({
    onSuccess: (res) => {
      setCooldown(res.data.meta.cooldown);
    },
  });

  useEffect(() => {
    if (!tempUserId) {
      navigate("/register");
    }
  }, [tempUserId, navigate]);

  if (!tempUserId) return null; 

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <OtpForm
          title="Verify Your Email"
          subtitle={email ? `We've sent a 6-digit OTP to ${email}` : `We've sent a 6-digit OTP`}
          isLoading={isPending}
          resendDelay={cooldown}
          onVerify={(otp) => {
            verifyOtp({ tempUserId, otp });
          }}
          onResend={() => {
            resendOtp({ tempUserId });
          }}
        />
      </main>
    </div>
  );
};

export default VerifyOtpPage;
