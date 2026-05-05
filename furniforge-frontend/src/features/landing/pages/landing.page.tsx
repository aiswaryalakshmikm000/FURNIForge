import { Navbar } from "../../../shared/components/layout/navbar";
import { Footer } from "../../../shared/components/layout/footer";

import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { HowItWorksSection } from "../components/how-it-works-section";
import { CTASection } from "../components/cta-section";
import { CursorDots } from "../components/cursor-dots";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import cardWardrobe from "../../../assets/cardWardrobe.jpg";

const LandingPage = () => {
  const visualizeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: visualizeRef, offset: ["start end", "end start"]});

  const imgScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div className="min-h-screen bg-background relative">
      <CursorDots />

      <Navbar />

      <HeroSection />
      <ServicesSection />

      <section className="py-28 overflow-hidden relative z-10">
        <div ref={visualizeRef} className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
                Visualize
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                See Your Furniture in 3D Before It's Built
              </h2>

              <p className="mt-6 text-muted-foreground text-lg">
                Get a realistic 3D design preview of your custom furniture
                before production begins. Explore every detail — from materials
                to handle finishes — in an immersive walkthrough.
              </p>
              <div className="mt-10 flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground font-display leading-none">
                    100%
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-2">
                    Accurate Renders
                  </span>
                </div>

                <div className="h-10 w-px bg-border" />

                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground font-display leading-none">
                    48hrs
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-body mt-2">
                    Turnaround Time
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ scale: imgScale, opacity: imgOpacity }}
              className="rounded-2xl overflow-hidden shadow-lg border"
            >
              <img src={cardWardrobe} alt="3D preview" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <CTASection />

      <Footer />
    </div>
  );
};

export default LandingPage;
