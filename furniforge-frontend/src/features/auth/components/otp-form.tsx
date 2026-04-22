import { Button } from "../../../shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const OTP_LENGTH = 6;

type OtpFormProps = {
  onVerify: (otp: string) => void;
  onResend: () => void;
  isLoading?: boolean;
  resendDelay?: number; 
  title?: string;
  subtitle?: string;
};

export const OtpForm = ({
  onVerify,
  onResend,
  isLoading = false,
  resendDelay = 30,
  title = "Verify Your Account",
  subtitle = "We've sent a 6-digit OTP",
}: OtpFormProps) => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(resendDelay);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = useCallback(() => {
    if (!canResend) return;
    onResend();
    setTimer(resendDelay);
    setCanResend(false);
    setOtp(Array(OTP_LENGTH).fill(""));
  }, [canResend, onResend, resendDelay]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // ⌨️ Backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // ⏱ Format time
  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  // ✅ Submit
  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === OTP_LENGTH) {
      onVerify(otpValue);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border text-center">
        <div className="w-12 h-12 rounded-xl gradient-copper mx-auto flex items-center justify-center text-accent-foreground font-bold text-xl font-display mb-4">
          C
        </div>

        <h1 className="text-2xl font-bold text-foreground font-display">
          {title}
        </h1>

        <p className="text-sm text-muted-foreground mt-2 font-sans">
          {subtitle}
        </p>

        {/* OTP Inputs */}
        <div className="flex gap-3 justify-center mt-8">
          {otp.map((digit, i) => (
            <input key={i} id={`otp-${i}`} type="text" inputMode="numeric"
              maxLength={1} value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center text-xl font-bold rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent font-sans"
            />
          ))}
        </div>

        {/* Timer */}
        <div className="mt-4">
          {!canResend ? (
            <p className="text-sm text-muted-foreground font-sans">
              Resend OTP in{" "}
              <span className="font-bold text-accent"> {formatTime(timer)} </span>
            </p>
          ) : (
            <p className="text-sm text-green-600 font-sans font-medium">
              You can resend now
            </p>
          )}
        </div>

        {/* Verify Button */}
        <Button onClick={handleSubmit} variant="copper" className="w-full mt-6" size="lg" disabled={otp.some((d) => !d) || isLoading} >
          {isLoading ? "Verifying..." : "Verify OTP"}{" "}
          <ArrowRight size={16} />
        </Button>

        {/* Resend */}
        <p className="text-sm text-muted-foreground mt-6 font-sans">
          Didn't receive the code?{" "}
          <button onClick={handleResend} disabled={!canResend}
            className={`font-medium ${
              canResend
                ? "text-accent hover:underline cursor-pointer"
                : "text-muted-foreground/50 cursor-not-allowed"
            }`}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </motion.div>
  );
};