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

export const RegisterForm = () => {
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {mutate, isPending} = useRegister();
  const { mutate: googleLogin, isPending: isGoogleLoading } = useGoogleAuth();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema), mode: "onChange",
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate(data, {
      onSuccess: (res) => {
        const {tempUserId, email, cooldown} = res.data.meta;
        sessionManager.setTempUserId(tempUserId);
        const expiry = Date.now() + cooldown * 1000;

        sessionManager.setEmailId(email);
        sessionManager.setSignupCooldown(expiry.toString())
        navigate(APP_ROUTES.AUTH.VERIFY_OTP)
      }
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
          <div>
            <label className="text-sm font-medium text-foreground font-sans">
              First Name
            </label>
            <Input
              {...register("firstName")}
              placeholder="John"
              className="mt-1.5"
            />
            <p className="text-xs text-red-500 mt-1">
              {" "}
              {errors.firstName?.message}{" "}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground font-sans">
              Last Name
            </label>
            <Input
              {...register("lastName")}
              placeholder="Doe"
              className="mt-1.5"
            />
            <p className="text-xs text-red-500 mt-1">
              {" "}
              {errors.lastName?.message}{" "}
            </p>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-foreground font-sans">
            Email
          </label>
          <Input
            type="email"
            {...register("email")}
            placeholder="john@example.com"
            className="mt-1.5"
          />
          <p className="text-xs text-red-500 mt-1">{errors.email?.message}</p>
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-foreground font-sans">
            Phone Number
          </label>
          <Input
            type="tel"
            {...register("phone")}
            placeholder="98765 43210"
            className="mt-1.5"
          />
          <p className="text-xs text-red-500 mt-1">{errors.phone?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-foreground font-sans">
            Password
          </label>

          <div className="relative">
            <Input
              type={showPw ? "text" : "password"}
              {...register("password")}
              placeholder="Create a strong password"
              className="mt-1.5 pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 mt-1 text-muted-foreground"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <p className="text-xs text-red-500 mt-1">
            {" "}
            {errors.password?.message}{" "}
          </p>
        </div>

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
