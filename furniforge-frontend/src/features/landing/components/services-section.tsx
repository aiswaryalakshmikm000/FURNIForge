import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/components/ui/button";
import { useRef } from "react";

import cardWardrobe from "../../../assets/cardWardrobe.jpg";
import cardTvunit from "../../../assets/cardTvunit.jpg";
import cardDesk from "../../../assets/cardDesk.jpg";
import cardSofa from "../../../assets/cardSofa.jpg";
import cardBed from "../../../assets/cardBed.jpg";
import bannerBedroom from "../../../assets/bannerBedroom.jpg";
import bannerDining from "../../../assets/bannerDining.jpg";
import bannerLiving from "../../../assets/bannerLiving.jpg";

import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { useSelector } from "react-redux";
import { UserRole } from "../../../types/enums/user-role.enum";
import type { RootState } from "../../../app/store/store.types";

const furnitureTypes = [
  { title: "Wardrobe", desc: "Sliding, hinged & walk-in designs", icon: "👔", image: cardWardrobe },
  { title: "TV Unit", desc: "Wall-mounted & entertainment centers", icon: "📺", image: cardTvunit },
  { title: "Office Desk", desc: "Ergonomic home office setups", icon: "💻", image: cardDesk },
  { title: "Sofa", desc: "Custom upholstery & configurations", icon: "🛋️", image: cardSofa },
  { title: "Bed", desc: "Platform, storage & headboard designs", icon: "🛏️", image: cardBed },
];

const brands = {
  materials: [
    { name: "Hettich", style: "font-bold" },
    { name: "HÄFELE", style: "font-bold tracking-wider" },
    { name: "blum", style: "font-black" },
    { name: "REHAU", style: "font-bold tracking-wide" },
    { name: "GRASS", style: "font-bold tracking-wider" },
    { name: "Ebco", style: "font-semibold" },
    { name: "SALICE", style: "font-bold tracking-[0.15em]" },
  ],
  finishes: [
    { name: "Greenlam", style: "font-bold" },
    { name: "Merino", style: "font-semibold tracking-wide" },
    { name: "Century", style: "font-bold" },
    { name: "Royale Touche", style: "font-semibold italic" },
    { name: "Virgo", style: "font-bold tracking-wider" },
    { name: "EGGER", style: "font-black tracking-wider" },
  ],
  fabrics: [
    { name: "D'Decor", style: "font-bold" },
    { name: "Asian Paints", style: "font-semibold tracking-wide" },
    { name: "Nilkamal", style: "font-bold" },
    { name: "Godrej Interio", style: "font-semibold" },
    { name: "Durian", style: "font-bold italic" },
  ],
};

const brandSections = [
  { title: "Premium Hardware & Fittings", subtitle: "World-class hardware for lasting quality in every piece", items: brands.materials, bg: bannerLiving },
  { title: "Top Finish & Laminate Brands", subtitle: "Beautiful surfaces from the best manufacturers", items: brands.finishes, bg: bannerBedroom },
  { title: "Fabric & Upholstery Partners", subtitle: "Premium fabrics and materials for sofas, beds & seating", items: brands.fabrics, bg: bannerDining },
];

const reviews = [
  { name: "Priya M.", location: "Mumbai", rating: 4.9, review: "Our sliding wardrobe is stunning! The Hettich fittings are top quality. Couldn't be happier!", image: cardWardrobe },
  { name: "Rahul S.", location: "Bangalore", rating: 4.8, review: "The TV unit and office desk exceeded our expectations. FURNIForge delivered perfection.", image: cardDesk },
  { name: "Anita K.", location: "Delhi", rating: 4.9, review: "From design to installation, the team was professional. Our custom bed is a dream come true!", image: cardBed },
];

const ScrollReveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
    {children}
  </motion.div>
);

export const ServicesSection = () => {

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)

  const getCTAPath = () => {
    if(!isAuthenticated) return APP_ROUTES.AUTH.REGISTER;
    if(user?.role === UserRole.CLIENT) return APP_ROUTES.CLIENT.REQUIREMENTS ;
    return null
  }
  const ctaPath = getCTAPath()

  return (
    <>
      <section className="py-28 bg-sand-light/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] font-body">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 font-display">Custom Furniture Solutions</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body font-light">Designed with precision, built with the finest materials and world-class hardware.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {furnitureTypes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all group cursor-pointer h-64">
                  <img src={item.image} alt={`${item.title} design`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-deep/85 via-chocolate/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-cream font-display">{item.title}</h3>
                    <p className="text-xs text-cream/60 mt-1 font-body">{item.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          {ctaPath && (
            <ScrollReveal delay={0.4} className="text-center mt-14">
              <Link to={ctaPath}>
                <Button variant="copper" size="lg" className="font-body">Start Your Furniture Project</Button>
              </Link>
          </ScrollReveal>
          )}
        </div>
      </section>

      {brandSections.map((section, sectionIdx) => (
        <BrandSection key={section.title} section={section} index={sectionIdx} />
      ))}

      <section className="py-28 bg-sand-light/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] font-body">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 font-display">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <img src={review.image} alt={`Project by ${review.name}`} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-deep/90 via-chocolate/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} className={j < Math.floor(review.rating) ? "text-[hsl(40,85%,55%)] fill-[hsl(40,85%,55%)]" : "text-cream/30"} />
                      ))}
                      <span className="text-xs text-cream/60 font-body ml-1">{review.rating}</span>
                    </div>
                    <p className="text-sm text-cream/90 font-body italic mb-3 leading-relaxed">"{review.review}"</p>
                    <p className="text-xs text-cream/50 font-body font-medium tracking-wide">— {review.name}, {review.location}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const BrandSection = ({ section }: { section: typeof brandSections[0]; index: number }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img src={section.bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-chocolate-deep/80 backdrop-blur-[2px]" />
      </motion.div>
      <div className="relative container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <h3 className="text-3xl md:text-5xl font-bold text-cream font-display text-center">{section.title}</h3>
          <p className="text-cream/60 text-center mt-4 font-body text-lg font-light">{section.subtitle}</p>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {section.items.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.05}>
              <motion.div whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="px-8 py-5 bg-cream/5 backdrop-blur-md rounded-2xl border border-cream/15 transition-all flex items-center justify-center min-w-[130px]">
                <span className={`text-cream text-base ${brand.style}`}>{brand.name}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
