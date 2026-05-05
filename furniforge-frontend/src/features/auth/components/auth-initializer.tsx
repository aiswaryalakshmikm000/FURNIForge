import { PremiumLoader } from "../../../shared/components/common/loader";
import { useAuth } from "../hooks/use-auth";

export const AuthInitializer = () => {
  const { isLoading } = useAuth();

  if (isLoading) return <PremiumLoader />;

  return null;
};