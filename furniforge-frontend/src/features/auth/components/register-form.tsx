import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormValues } from "../validation/register.validation";
import { useRegister } from "../hooks/use-register";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";

export const RegisterForm = () => {
  const { mutate, isPending } = useRegister();
  const [showPw, setShowPw] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input {...register("firstName")} placeholder="John" />
          <p>{errors.firstName?.message}</p>
        </div>

        <div>
          <input {...register("lastName")} placeholder="Doe" />
          <p>{errors.lastName?.message}</p>
        </div>
      </div>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input {...register("phone")} placeholder="Phone" />
      <p>{errors.phone?.message}</p>

      <div className="relative">
        <input
          type={showPw ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        <button type="button" onClick={() => setShowPw(!showPw)}>
          {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      <p>{errors.password?.message}</p>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Account"} <ArrowRight size={16} />
      </Button>
    </form>
  );
};