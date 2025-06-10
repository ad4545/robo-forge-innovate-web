
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareFeatures from "@/components/SoftwareFeatures";
import SoftwareStats from "@/components/SoftwareStats";
import SoftwarePackage from "@/components/SoftwarePackage";

const Software = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <SoftwareHero />
        <SoftwareFeatures />
        <SoftwareStats />
        <SoftwarePackage />
      </main>
      <Footer />
    </div>
  );
};

export default Software;
