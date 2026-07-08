import { Navbar } from "../../../shared/components/layout/navbar";
import { Footer } from "../../../shared/components/layout/footer";
import { OurWorkSection } from "../components/our-work-section";

const OurWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <OurWorkSection />
      </main>

      <Footer />
    </div>
  );
};

export default OurWorkPage;