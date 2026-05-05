import { Input } from "../../../shared/components/ui/input";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import {type ResetPasswordFormValues } from "../validation/reset-password.schema";

type Props = {
  register: UseFormRegister<ResetPasswordFormValues>;
  errors: FieldErrors<ResetPasswordFormValues>;
};

export const PasswordResetFields = ({ register, errors }: Props) => {
  return (
    <div className="mt-6 space-y-4 text-left">
      
      <div>
        <label className="text-sm font-medium">New Password</label>
        <Input type="password" placeholder="Enter new password"
          className="mt-1.5"
          {...register("password")}
        />
        <p className="text-red-500 text-xs"> {errors.password?.message} </p>
      </div>

      <div>
        <label className="text-sm font-medium">Confirm Password</label>
        <Input type="password" placeholder="Confirm new password"
          className="mt-1.5"
          {...register("confirmPassword")}
        />
        <p className="text-red-500 text-xs"> {errors.confirmPassword?.message} </p>
      </div>
    </div>
  );
};