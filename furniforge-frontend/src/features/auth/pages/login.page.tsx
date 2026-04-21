import { Navbar } from "../../../shared/components/layout/navbar";
import { motion } from "framer-motion";
import { Armchair } from "lucide-react";
import { LoginForm } from "../components/login-form";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-xl gradient-copper flex items-center justify-center">
              <Armchair size={24} />
            </div>
          </div>

          <LoginForm />
        </motion.div>
      </main>
    </div>
  );
};

export default LoginPage;