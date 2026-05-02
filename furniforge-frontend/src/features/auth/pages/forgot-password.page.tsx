import { Navbar } from "../../../shared/components/layout/navbar";
import { motion } from "framer-motion";
import { ForgotPasswordForm } from "../components/forgot-password-form";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <ForgotPasswordForm />
        </motion.div>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;