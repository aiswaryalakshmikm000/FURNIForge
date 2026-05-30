import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../../../shared/components/ui/input";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ResetPasswordFormValues } from "../validation/reset-password.schema";
import { FormField } from "../../../shared/components/common/forms/form-field";

type Props = {
  register: UseFormRegister<ResetPasswordFormValues>;
  errors: FieldErrors<ResetPasswordFormValues>;
};

export const PasswordResetFields = ({ register, errors }: Props) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="mt-6 space-y-4 text-left">

      <FormField
        label="New Password"
        required
        error={errors.password?.message}
      >
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            className="pr-10"
            {...register("password")}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )}
          </button>
        </div>
      </FormField>

      <FormField
        label="Confirm Password"
        required
        error={errors.confirmPassword?.message}
      >
        <div className="relative">
          <Input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm new password"
            className="pr-10"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showConfirmPassword ? (
              <EyeOff size={16} />
            ) : (
              <Eye size={16} />
            )}
          </button>
        </div>
      </FormField>

    </div>
  );
};