import { GoogleLogin } from "@react-oauth/google";

type SocialAuthProps = {
  onGoogle?: (token: string) => void;
  isLoading?: boolean;
};

export const SocialAuth = ({ onGoogle, isLoading }: SocialAuthProps) => {
  return (
    <>
      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-card px-3 text-muted-foreground font-sans">
            or continue with
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid gap-3">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const token = credentialResponse.credential;
            
            if (!token) return;
            onGoogle?.(token);
          }}
          onError={() => {
            console.log("Google Login Failed");
          }}
        />
      </div>
    </>
  );
};