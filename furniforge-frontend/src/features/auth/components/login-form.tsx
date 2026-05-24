import { useState } from "react";
import { Button } from "../../../shared/components/ui/button";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/use-login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../validation/login.schema";
import { Input } from "../../../shared/components/ui/input";
import { Armchair } from "lucide-react";
import { SocialAuth } from "../../../shared/components/auth/social-auth";
import { setAuth } from "../store/auth.slice";
import { useDispatch } from "react-redux";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { useGoogleAuth } from "../hooks/use-google-auth";

export const LoginForm = () => {
  const [showPw, setShowPw] = useState(false);
  const { mutate, isPending } = useLogin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate:googleLogin , isPending: isGoogleLoading} = useGoogleAuth();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onSuccess: (res) => {
        const {user} = res.data;
        dispatch(setAuth({user}))
        navigate(APP_ROUTES.COMMON.ROOT)
      }
    });
  };

  return (
    <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border">
      {/* HEADER */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl gradient-copper mx-auto flex items-center justify-center text-accent-foreground mb-4">
          <Armchair size={24} />
        </div>

        <h1 className="text-2xl font-bold text-foreground font-display">
          Welcome Back
        </h1>

        <p className="text-sm text-muted-foreground mt-2 font-sans">
          Log in to your FURNIForge account
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium text-foreground font-sans">
            Email
          </label>

          <Input
            type="email"
            {...register("email")}
            placeholder="john@example.com"
          />
          <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm font-medium text-foreground font-sans">
            Password
          </label>

          <div className="relative">
            <Input
              type={showPw ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 text-muted-foreground"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <p className="text-red-500 text-xs mt-1">
            {" "}
            {errors.password?.message}{" "}
          </p>

          <div className="text-right mt-2">
            <Link
              to={APP_ROUTES.AUTH.FORGOT_PASSWORD}
              className="text-sm text-accent hover:underline font-sans"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* BUTTON */}
        <Button
          variant="copper"
          className="w-full"
          size="lg"
          type="submit"
          disabled={!isValid || isPending}
        >
          {isPending ? "Logging in..." : "Log In"} <ArrowRight size={16} />
        </Button>
      </form>

      <SocialAuth
        isLoading={isGoogleLoading}
        onGoogle={(token) => {
          googleLogin(token, {
            onSuccess: (res) => {
              const { user } = res.data;

              dispatch( setAuth({ user }) );
              navigate(APP_ROUTES.COMMON.ROOT);
            },
          });
        }}
      />

      {/* FOOTER */}
      <p className="text-center text-sm text-muted-foreground mt-6 font-sans">
        Don't have an account?{" "}
        <Link
          to={APP_ROUTES.AUTH.REGISTER}
          className="text-accent font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};
