import { Navbar } from "../../../shared/components/layout/navbar";
import { Footer } from "../../../shared/components/layout/footer";

import { SectionIntro } from "../components/section-intro";
import { AboutContentSection } from "../components/about-content-section";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <section className="py-20 gradient-chocolate">
          <SectionIntro
            tag="About Us"
            title="Crafting Dream Interiors Since 2015"
            description="FURNIForge is a configurable furniture design platform specializing in custom furniture — wardrobes, TV units, sofas, desks, beds and more."
          />
        </section>

        <AboutContentSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;