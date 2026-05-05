import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { NAV_LINKS } from "../../../core/config/constants/navigation.constants";
import { useSelector } from "react-redux";
import { getDashboardRoute } from "../../../core/utils/routes.utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidBg = scrolled || !isLanding;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showSolidBg ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-warm" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to={APP_ROUTES.COMMON.ROOT} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-rose flex items-center justify-center">
            <span className="text-accent-foreground font-display font-bold text-lg">
              F
            </span>
          </div>
          <span
            className={`text-xl font-bold font-display tracking-wide transition-colors ${showSolidBg ? "text-foreground" : "text-cream"}`}
          >
            <span className="tracking-[0.05em]">FURNI</span>Forge
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left 
              ${location.pathname === link.href ? "text-accent after:scale-x-100" : showSolidBg ? "text-foreground" : "text-cream/80"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && (
            <button
              className={`relative p-2 rounded-lg transition-colors ${
                showSolidBg
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
            </button>
          )}

          {!isAuthenticated ? (
            <>
              <Link to={APP_ROUTES.AUTH.LOGIN}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={
                    showSolidBg
                      ? "text-foreground hover:bg-muted"
                      : "text-cream/90 hover:text-cream hover:bg-cream/10"
                  }
                >
                  Log In
                </Button>
              </Link>

              <Link to={APP_ROUTES.AUTH.REGISTER}>
                <Button variant="nav-cta">Get Started</Button>
              </Link>
            </>
          ) : (
            <Link to={getDashboardRoute(user.role)}>
              <Button variant="nav-cta">Go to Dashboard</Button>
            </Link>
          )}
        </div>

        <button
          className={`md:hidden p-2 ${showSolidBg ? "text-foreground" : "text-cream"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium py-2 text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <Link to={APP_ROUTES.AUTH.LOGIN} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Log In
                </Button>
              </Link>
              <Link
                to={APP_ROUTES.AUTH.REGISTER}
                onClick={() => setIsOpen(false)}
              >
                <Button variant="copper" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
