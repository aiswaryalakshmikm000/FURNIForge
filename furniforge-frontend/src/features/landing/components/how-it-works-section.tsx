import { motion, useScroll } from "framer-motion";
import { ClipboardList, FileCheck, Wrench, Home } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: ClipboardList,
    title: "Fill Your Requirements",
    description:
      "Share your vision, measurements, and preferences through our detailed requirement form.",
  },
  {
    icon: FileCheck,
    title: "Quote & Design Confirm",
    description:
      "Receive a detailed quotation with design options. Review, revise, and confirm your plan.",
  },
  {
    icon: Wrench,
    title: "Get Installed",
    description:
      "Our expert technicians handle the complete installation with precision and care.",
  },
  {
    icon: Home,
    title: "Move In",
    description:
      "Enjoy your beautifully transformed space with our 10-year quality assurance guarantee.",
  },
];

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.7", "end 0.5"] });

  return (
    <section ref={sectionRef} className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand-light/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Four Simple Steps to Your Dream Space
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[32px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
              }}
              className="w-full h-full gradient-rose"
            />
          </div>

          {steps.map((step, i) => (
            <StepItem
              key={step.title}
              step={step}
              index={i}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepItem = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollProgress: any;
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-center gap-8 mb-16 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Step circle */}
      <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white font-bold text-sm">{index + 1}</span>
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
          index % 2 === 0 ? "md:pr-4" : "md:pl-4"
        }`}
      >
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-card rounded-2xl p-6 border border-border/50 shadow-md hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <step.icon className="text-accent" size={24} />
          </div>

          <h3 className="text-xl font-bold">{step.title}</h3>

          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-[calc(50%-40px)]" />
    </motion.div>
  );
};
