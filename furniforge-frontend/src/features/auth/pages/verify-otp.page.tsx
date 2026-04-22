import { Navbar } from "../../../shared/components/layout/navbar";
import { OtpForm } from "../components/otp-form";
import { useVerifyOtp } from "../hooks/use-verify-otp";
// import { useResendOtp } from "../hooks/use-resend-otp";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { sessionManager } from "../../../core/auth/session-manager";

const VerifyOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tempUserId = sessionManager.getTempUserId();
  const email = location.state?.email;

  const { mutate: verifyOtp, isPending } = useVerifyOtp();
//   const { mutate: resendOtp } = useResendOtp();

  useEffect(() => {
    if (!tempUserId) {
        navigate("/register")
    }
  },[tempUserId, navigate])

  // prevent render until checked
  if (!tempUserId) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <OtpForm
          title="Verify Your Phone"
          subtitle={`OTP sent to ${email}`}
          isLoading={isPending}
          onVerify={(otp) => {
            verifyOtp(
              { tempUserId, otp }
            );
          }}
          onResend={() => {
            // resendOtp(email);
          }}
        />
      </main>
    </div>
  );
};

export default VerifyOtpPage;