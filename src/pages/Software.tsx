
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareStats from "@/components/SoftwareStats";
import SoftwarePackage from "@/components/SoftwarePackage";
import SoftwareIntegration from "@/components/SoftwareIntegration";
import SoftwareSupport from "@/components/SoftwareSupport";

const Software = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <SoftwareHero />
        <SoftwareStats />
        <SoftwareIntegration />
        <SoftwarePackage />
        <SoftwareSupport />
      </main>
      <Footer />
    </div>
  );
};

export default Software;
