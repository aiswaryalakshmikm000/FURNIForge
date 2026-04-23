import { useAuth } from "../hooks/use-auth";

export const AuthInitializer = () => {
  const { isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return null;
};