import { motion } from "framer-motion";
import { Award, Users, Target, Shield } from "lucide-react";
import aboutTeam from "../../../assets/about-team.jpg";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use only the finest materials and hardware for every piece of furniture.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Skilled designers and craftsmen with years of custom furniture expertise.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Every measurement, every cut, every installation is done with precision.",
  },
  {
    icon: Shield,
    title: "Warranty",
    description:
      "10-year warranty on fittings. Material replacement for bending or warping.",
  },
];

export const AboutContentSection = () => {
  return (
    <>
      {/* STORY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutTeam}
                alt="FURNIForge team"
                className="rounded-2xl shadow-warm-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground font-display mb-4">
                Our Story
              </h2>

              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                Founded with a vision to revolutionize custom furniture in India,
                FURNIForge has grown from a small studio to a trusted platform
                serving thousands of homeowners across 50+ cities.
              </p>

              <p className="text-muted-foreground font-sans leading-relaxed">
                We believe every home deserves premium craftsmanship. Our
                end-to-end service — from initial consultation to final
                installation — ensures a seamless experience. Whether it's a
                wardrobe, TV unit, or a complete home setup, we deliver precision
                and quality.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-display mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-warm text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-copper mx-auto flex items-center justify-center mb-4">
                  <v.icon className="text-accent-foreground" size={24} />
                </div>

                <h3 className="text-lg font-bold text-foreground font-display mb-2">
                  {v.title}
                </h3>

                <p className="text-sm text-muted-foreground font-sans">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};