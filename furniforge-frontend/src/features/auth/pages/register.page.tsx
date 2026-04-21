import { Navbar } from "../../../shared/components/layout/navbar";
import { RegisterForm } from "../components/register-form";

const RegisterPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;