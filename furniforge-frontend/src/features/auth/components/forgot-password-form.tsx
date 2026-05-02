import { useState } from "react";
import { Button } from "../../../shared/components/ui/button";
import { Input } from "../../../shared/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useForgotPassword } from "../hooks/use-forgot-password";
import { Logo } from "../../../shared/components/ui/logo";
import { sessionManager } from "../../../core/auth/session-manager";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const { mutate, isPending } = useForgotPassword();

  const handleSubmit = () => {
    if(!email.trim()) return toast.error(ERROR_MESSAGES.AUTH.EMAIL_REQUIRED);
    mutate(
      {email},
      {onSuccess: (res) => {
        const {email, cooldown} = res.data.meta
        sessionManager.setEmailId(email);
        const expiry = Date.now() + cooldown * 1000;
        sessionManager.setResetCooldown(expiry.toString())
        navigate(APP_ROUTES.AUTH.VERIFY_RESET_OTP);
      }}
    )
  }

  return (
    <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border">

      {/* HEADER */}
      <div className="text-center mb-8">
        <Logo />

        <h1 className="text-2xl font-bold font-display">
          Forgot Password?
        </h1>

        <p className="text-sm text-muted-foreground mt-2">
          Enter your email and we'll send you an OTP
        </p>
      </div>

      {/* FORM */}
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type= "button"
          variant="copper"
          size="lg"
          className="w-full"
          onClick={handleSubmit}
          disabled={!email.trim() || isPending}
        >
          {isPending ? "Sending..." : "Send OTP"}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};