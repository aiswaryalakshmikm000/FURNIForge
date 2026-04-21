import { useState } from "react";
import { Button } from "../../../shared/components/ui/button";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/use-login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../validation/login.schema";
import { Input } from "../../../shared/components/ui/input";

export const LoginForm = () => {
  const [showPw, setShowPw] = useState(false);
  const loginMutation = useLogin();

  const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginFormValues>({
      resolver: zodResolver(loginSchema),
      mode: "onChange"
    })

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="bg-card rounded-2xl shadow-warm-lg p-8 border border-border">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Log in to your FURNIForge account
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        
        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <Input
            type="email"
            {...register("email")}
            placeholder="john@example.com"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.email?.message}
          </p>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm font-medium">Password</label>

          <div className="relative">
            <Input
              type={showPw ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <p className="text-red-500 text-xs mt-1">
            {errors.password?.message}
          </p>

          <div className="text-right mt-2">
            <Link to="/forgot-password" className="text-sm text-accent">
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* BUTTON */}
        <Button variant="copper" className="w-full" type="submit" disabled={!isValid || loginMutation.isPending}>
          {loginMutation.isPending ? "Logging in..." : "Log In"} <ArrowRight size={16} />
        </Button>
      </form>

      {/* SOCIAL */}
      <div className="my-6 text-center text-xs text-muted-foreground">
        or continue with
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="border rounded-xl py-2 text-sm">Google</button>
        <button className="border rounded-xl py-2 text-sm">Facebook</button>
      </div>

      {/* REGISTER */}
      <p className="text-center text-sm mt-6">
        Don't have an account?{" "}
        <Link to="/register" className="text-accent">
          Register
        </Link>
      </p>
    </div>
  );
};