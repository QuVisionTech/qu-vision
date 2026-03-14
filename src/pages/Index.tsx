import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
