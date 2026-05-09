import { Navbar } from "../../../shared/components/layout/navbar";
import { PasswordResetFields } from "../components/password-reset-fields";
import { useResetPassword } from "../hooks/use-reset-password";
import { Button } from "../../../shared/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Logo } from "../../../shared/components/ui/logo";
import { Link, useNavigate } from "react-router-dom";
import { sessionManager } from "../../../core/auth/session-manager";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, type ResetPasswordFormValues } from "../validation/reset-password.schema";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const resetToken = sessionManager.getResetToken();


  const { mutate: resetPassword, isPending } = useResetPassword();

  if (!resetToken) return null;

  const { register, handleSubmit, formState: { errors, isValid }} = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange", 
  });

  const onSubmit = (data: ResetPasswordFormValues) => {
    resetPassword(
      { resetToken, password: data.password, confirmPassword: data.confirmPassword },
      {
        onSuccess: () => {
          sessionManager.clearForgotPasswordFlow()
          navigate(APP_ROUTES.AUTH.LOGIN);
        },
      },
    );
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
            <PasswordResetFields register={register} errors={errors}/>

            {/* BUTTON */}
            <Button
              variant="copper"
              size="lg"
              className="w-full mt-6"
              disabled={!isValid || isPending}
            >
              {isPending ? "Updating..." : "Reset Password"}
              <ArrowRight size={16} />
            </Button>
            </form>

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
