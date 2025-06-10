
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareFeatures from "@/components/SoftwareFeatures";
import SoftwareStats from "@/components/SoftwareStats";
import SoftwarePackage from "@/components/SoftwarePackage";
import SoftwareTechnicalSpecs from "@/components/SoftwareTechnicalSpecs";
import SoftwareIntegration from "@/components/SoftwareIntegration";
import SoftwareSupport from "@/components/SoftwareSupport";

const Software = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <SoftwareHero />
        <SoftwareFeatures />
        <SoftwareStats />
        <SoftwareIntegration />
        <SoftwareTechnicalSpecs />
        <SoftwarePackage />
        <SoftwareSupport />
      </main>
      <Footer />
    </div>
  );
};

export default Software;
