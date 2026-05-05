import { Navbar } from "../../../shared/components/layout/navbar";
import { Footer } from "../../../shared/components/layout/footer";
import { CTASection } from "../components/cta-section";
import { SectionIntro } from "../components/section-intro";
import { HowItWorksSection } from "../components/how-it-works-section";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const details = [
  {
    step: "01",
    title: "Fill Your Requirement Form",
    description: "Select your deliverable type (Wardrobe, TV Unit, Sofa, etc.) and fill in dimensions, materials, finish preferences, and budget. Upload reference images.",
    items: ["Select deliverable type", "Dimensions & material preferences", "Budget range selection", "Site photos & reference images"],
  },
  {
    step: "02",
    title: "See Quote & Confirm Design",
    description: "Our designer prepares a detailed quotation and 3D design. Review, request modifications if needed, and confirm.",
    items: ["Itemized quotation breakdown", "3D design visualization", "Modification requests (₹1,000 fee)", "Design & quote confirmation"],
  },
  {
    step: "03",
    title: "Get Installed",
    description: "After 60% advance payment, our technician visits for site measurement verification. Production begins, followed by professional installation.",
    items: ["Site visit & measurement verification", "MEP marking & approval", "Professional installation", "Quality checks at every stage"],
  },
  {
    step: "04",
    title: "Move In & Enjoy",
    description: "Final inspection, cleaning, and handover. Balance payment completed. Enjoy ongoing warranty and post-installation support.",
    items: ["Final inspection & cleaning", "Balance payment settlement", "Warranty activation", "Ongoing service support"],
  },
];

const paymentStages = [
  { stage: "Design Fee", amount: "₹1,000 per deliverable", pct: "5%" },
  { stage: "Modification Fee", amount: "₹3,000 per revision", pct: "10%" },
  { stage: "Advance Payment", amount: "60% of total cost", pct: "60%" },
  { stage: "Before Installation", amount: "40% of remaining", pct: "85%" },
  { stage: "Before Completion", amount: "10% balance", pct: "100%" },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Header */}
        <section className="py-20 gradient-espresso relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <SectionIntro
              tag="Process"
              title="How It Works"
              description="Your dream furniture in four simple steps. Here's how we bring your vision to life."
              theme="dark"
            />
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <HowItWorksSection />

        {/* Detailed Process */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-display mb-16">Detailed Process</h2>

            <div className="space-y-12 ">
              {details.map((d, i) => (
                <motion.div
                  key={d.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl gradient-copper flex items-center justify-center text-accent-foreground font-bold text-lg font-display shadow-copper">
                      {d.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-display mb-2 ">{d.title}</h3>
                    <p className="text-muted-foreground font-sans mb-4 ding-relaxed">{d.description}</p>
                    <ul className="space-y-2 mt-2">
                      {d.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground font-sans leading-relaxed">
                          <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Structure */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-display mb-12">Payment Structure</h2>

            <div className="space-y-4 mt-16">
              {paymentStages.map((p, i) => (
                <motion.div
                  key={p.stage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-warm flex items-center justify-between border border-border/50"
                >
                  <div>
                    <h4 className="font-bold text-foreground font-display">{p.stage}</h4>
                    <p className="text-sm text-muted-foreground font-sans">{p.amount}</p>
                  </div>
                  <div className="text-right">
                    <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-copper rounded-full"
                        style={{ width: p.pct }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}

              <p className="text-center text-sm text-accent font-medium font-sans mt-8">
                💡 10% discount on total cost for full advance payment
              </p>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;