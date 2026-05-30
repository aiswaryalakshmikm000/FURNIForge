import { Button } from "../../../shared/components/ui/button";
import { Input } from "../../../shared/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useForgotPassword } from "../hooks/use-forgot-password";
import { Logo } from "../../../shared/components/ui/logo";
import { sessionManager } from "../../../core/auth/session-manager";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ForgotPasswordFormValues, forgotPasswordSchema } from "../validation/forgot-password.schema";
import { FormField } from "../../../shared/components/common/forms/form-field";

export const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    mutate(
      { email: data.email },
      {
        onSuccess: (res) => {
          const { email, cooldown } = res.data.meta;
          sessionManager.setEmailId(email);
          const expiry = Date.now() + cooldown * 1000;
          sessionManager.setResetCooldown(expiry.toString());
          navigate(APP_ROUTES.AUTH.VERIFY_RESET_OTP);
        },
      },
    );
  };

  return (
    <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border">
      {/* HEADER */}
      <div className="text-center mb-8">
        <Logo />
        <h1 className="text-2xl font-bold font-display"> Forgot Password? </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Enter your email and we'll send you an OTP
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField label="Email" required error={errors.email?.message}>
          <Input
            type="email"
            placeholder="john@example.com"
            {...register("email")}
          />
        </FormField>

        <Button
          type="submit"
          variant="copper"
          size="lg"
          className="w-full"
          disabled={!isValid || isPending}
        >
          {isPending ? "Sending..." : "Send OTP"}
          <ArrowRight size={16} />
        </Button>
      </form>
    </div>
  );
};