import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormValues } from "../validation/register.validation";
import { useRegister } from "../hooks/use-register";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { Input } from "../../../shared/components/ui/input";
import { SocialAuth } from "../../../shared/components/auth/social-auth";
import { Link, useNavigate } from "react-router-dom";
import { sessionManager } from "../../../core/auth/session-manager";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { setAuth } from "../store/auth.slice";
import { useDispatch } from "react-redux";
import { useGoogleAuth } from "../hooks/use-google-auth";
import { FormField } from "../../../shared/components/common/forms/form-field";

export const RegisterForm = () => {
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending } = useRegister();
  const { mutate: googleLogin, isPending: isGoogleLoading } = useGoogleAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate(data, {
      onSuccess: (res) => {
        const { tempUserId, email, cooldown } = res.data.meta;
        sessionManager.setTempUserId(tempUserId);
        const expiry = Date.now() + cooldown * 1000;

        sessionManager.setEmailId(email);
        sessionManager.setSignupCooldown(expiry.toString());
        navigate(APP_ROUTES.AUTH.VERIFY_OTP);
      },
    });
  };

  return (
    <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl gradient-copper mx-auto flex items-center justify-center text-accent-foreground font-bold text-xl font-display mb-4">
          F
        </div>
        <h1 className="text-2xl font-bold text-foreground font-display">
          Create Your Account
        </h1>
        <p className="text-sm text-muted-foreground mt-2 font-sans">
          Start your interior transformation journey
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* First + Last */}
        <div className="grid grid-cols-2 gap-3">
          <FormField
            label="First Name"
            required
            error={errors.firstName?.message}
          >
            <Input {...register("firstName")} placeholder="John" />
          </FormField>

          <FormField label="Last Name" error={errors.lastName?.message}>
            <Input {...register("lastName")} placeholder="Doe" />
          </FormField>
        </div>

        {/* Email */}
        <FormField label="Email" required error={errors.email?.message}>
          <Input
            type="email"
            {...register("email")}
            placeholder="john@example.com"
          />
        </FormField>

        {/* Phone */}
        <FormField label="Phone Number" required error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} placeholder="9876543210" />
        </FormField>

        {/* Password */}
        <FormField label="Password" required error={errors.password?.message}>
          <div className="relative">
            <Input
              type={showPw ? "text" : "password"}
              {...register("password")}
              placeholder="Create a strong password"
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </FormField>

        {/* Submit */}
        <Button
          type="submit"
          variant="copper"
          className="w-full mt-2"
          size="lg"
          disabled={!isValid || isPending}
        >
          {isPending ? "Creating..." : "Create Account"}
          <ArrowRight size={16} />
        </Button>
      </form>

      <SocialAuth
        isLoading={isGoogleLoading}
        onGoogle={(token) => {
          googleLogin(token, {
            onSuccess: (res) => {
              const { user } = res.data;

              dispatch(setAuth({ user }));
              navigate(APP_ROUTES.COMMON.ROOT);
            },
          });
        }}
      />

      {/* FOOTER */}
      <p className="text-center text-sm text-muted-foreground mt-6 font-sans">
        Already have an account?{" "}
        <Link
          to={APP_ROUTES.AUTH.LOGIN}
          className="text-accent font-medium hover:underline"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};
