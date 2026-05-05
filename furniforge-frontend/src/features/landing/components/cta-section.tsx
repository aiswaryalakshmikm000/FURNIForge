import { Link } from "react-router-dom";
import { Button } from "../../../shared/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getDashboardRoute } from "../../../core/utils/routes.utils";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

export const CTASection = () => {
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

const ctaRoute = isAuthenticated ? getDashboardRoute(user.role) : APP_ROUTES.AUTH.REGISTER;

  return (
    <section className="py-28 gradient-chocolate relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-rose-light blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6 font-display leading-tight">
            Ready to Transform<br />Your Space?
          </h2>
          <p className="text-lg text-cream/60 max-w-xl mx-auto mb-12 font-body font-light">
            Book a free consultation with our design experts and get started on your dream furniture.
          </p>
          <Link to={ctaRoute}>
            <Button variant="hero" size="lg" className="gap-2">
              {isAuthenticated ? "Go to Dashboard" : "Get Started"} <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
