import { useState } from "react";
import { Input } from "../../../shared/components/ui/input";

export const PasswordResetFields = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: any) => {
  const [error, setError] = useState("");

  const handleConfirmChange = (value: string) => {
    setConfirmPassword(value);

    if (password && value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <div className="mt-6 space-y-4 text-left">

      <div>
        <label className="text-sm font-medium">New Password</label>
        <Input
          type="password"
          placeholder="Enter new password"
          className="mt-1.5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Confirm Password</label>
        <Input
          type="password"
          placeholder="Confirm new password"
          className="mt-1.5"
          value={confirmPassword}
          onChange={(e) => handleConfirmChange(e.target.value)}
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </div>
  );
};