import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../shared/components/ui/button";
import { APP_ROUTES } from "../core/config/constants/routes.constants";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">

      {/* Background blur effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-rose-light/10 blur-3xl" />

      <div className="text-center relative z-10 px-4">

        {/* Main 404 Container with overall oscillation */}
        <motion.div
          initial={{ scale: 0.9, rotate: -4 }}
          animate={{
            scale: [0.95, 1.02, 0.97, 1],
            rotate: [-3, 3, -2, 2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="flex justify-center items-center mb-6"
        >
          {/* First 4 */}
          <motion.span
            className="text-[130px] md:text-[190px] font-bold font-display text-gradient-rose leading-none inline-block"
          >
            4
          </motion.span>

          {/* The Falling 0 */}
          <motion.span
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: 120,           // falls down
              rotate: [0, -35, -65], // rotates while falling
              opacity: [1, 1, 0.85],
            }}
            transition={{
              delay: 1.8,       // starts falling after oscillation
              duration: 1.1,
              ease: "easeIn",
            }}
            className="text-[130px] md:text-[190px] font-bold font-display text-gradient-rose leading-none inline-block origin-center"
          >
            0
          </motion.span>

          {/* Last 4 */}
          <motion.span
            className="text-[130px] md:text-[190px] font-bold font-display text-gradient-rose leading-none inline-block"
          >
            4
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">
            Oops! Page Not Found
          </h2>

          <p className="text-muted-foreground font-sans max-w-md mx-auto mb-8">
            Looks like this space doesn't exist yet.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 justify-center"
        >
          <Link to={APP_ROUTES.COMMON.ROOT}>
            <Button variant="copper" size="lg" className="gap-2">
              <Home size={18} /> Go Home
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} /> Go Back
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-xs text-muted-foreground font-sans"
        >
          Route:{" "}
          <span className="font-mono text-accent">
            {location.pathname}
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default NotFoundPage;