import { Navbar } from "../../../shared/components/layout/navbar";
import { PasswordResetFields } from "../components/password-reset-fields";
import { useResetPassword } from "../hooks/use-reset-password";
import { useState } from "react";
import { Button } from "../../../shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Logo } from "../../../shared/components/ui/logo";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { sessionManager } from "../../../core/auth/session-manager";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const resetToken = sessionManager.getResetToken();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate: resetPassword, isPending } = useResetPassword();

  if (!resetToken) return null

  const handleSubmit = () => {
    if(!password || !confirmPassword) return toast.error(ERROR_MESSAGES.AUTH.PASSWORD_REQUIRED);
    if(password !== confirmPassword) return toast.error(ERROR_MESSAGES.AUTH.PASSWORD_MISMATCH);

    resetPassword(
      {resetToken, password, confirmPassword},
      {onSuccess: (res) => {
        navigate(APP_ROUTES.AUTH.LOGIN);
      }
    })}

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border">
            {/* HEADER */}
            <div className="text-center mb-8">
              <Logo />

              <h1 className="text-2xl font-bold font-display">
                Reset Password
              </h1>

              <p className="text-sm text-muted-foreground mt-2">
                Create a new password
              </p>
            </div>

            {/* FORM */}
            <PasswordResetFields
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />

            {/* BUTTON */}
            <Button
              variant="copper"
              size="lg"
              className="w-full mt-6"
              disabled={isPending}
              onClick={handleSubmit}
            >
              {isPending ? "Updating..." : "Reset Password"}
              <ArrowRight size={16} />
            </Button>

            {/* BACK */}
            <div className="text-center mt-6">
              <Link
                to={APP_ROUTES.AUTH.LOGIN}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent"
              >
                <ArrowLeft size={14} /> Back to Login
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
