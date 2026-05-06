import { Link } from "react-router-dom";
import { Button } from "../../../shared/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "./count-up";
import heroImg from "../../../assets/heroLivingRoom.jpg";
import { useSelector } from "react-redux";
import { getDashboardRoute } from "../../../core/utils/routes.utils";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import type { RootState } from "../../../app/store/store.types";

export const HeroSection = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const primaryRoute = isAuthenticated && user?.role ? getDashboardRoute(user.role) : APP_ROUTES.AUTH.REGISTER;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury custom furniture by FURNIForge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-deep/70 via-chocolate/50 to-chocolate-deep/85" />
      </motion.div>

      <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full bg-rose-light/10 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-chocolate-light/40 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-cream/80 font-body">
              Trusted by 1000+ homeowners across India
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] mb-6 font-display">
            Custom Furniture{" "}
            <span className="text-gradient-rose">Crafted for You</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-cream/65 max-w-2xl mx-auto mb-12 font-body font-light"
          >
            Premium wardrobes, TV units, sofas, desks & beds. From concept to
            installation, we bring your dream furniture to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to={primaryRoute}>
              <Button variant="hero" size="lg" className="gap-2">
                {isAuthenticated ? "Go to Dashboard" : "Start Your Project"}
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to={APP_ROUTES.COMMON.OUR_WORK}>
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Play size={18} /> See Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-2xl mx-auto"
        >
          {[
            { value: 500, suffix: "+", label: "Projects Delivered" },
            { value: 1000, suffix: "+", label: "Happy Clients" },
            { value: 50, suffix: "+", label: "Cities Served" },
            { value: 10, suffix: "+", label: "Years of Expertise" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl font-bold text-gradient-rose font-display"
              />
              <p className="text-xs text-cream/50 mt-1 font-body uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
