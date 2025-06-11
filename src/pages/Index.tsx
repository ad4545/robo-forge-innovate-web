
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProductsSection from "@/components/ProductsSection";
import IndustrySection from "@/components/IndustrySection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <ProductsSection />
        <IndustrySection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
