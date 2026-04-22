import { Navbar } from "../../../shared/components/layout/navbar";
import { motion } from "framer-motion";
import { RegisterForm } from "../components/register-form";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <RegisterForm />
        </motion.div>
      </main>
    </div>
  );
};

export default RegisterPage;