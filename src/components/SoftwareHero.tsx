
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SoftwareHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-white">Manage. Maintain. Analyze.</span><br />
            <span className="text-theme-blue">Optimize. All the control you need.</span>
          </h1>
          
          <p className="text-lg text-gray-300 mt-6 max-w-3xl">
            The Controller combines dedicated hosting hardware components with advanced operating software. It provides a suite of tools to streamline operations and maximize the performance of your AutoStore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-theme-blue hover:bg-theme-blue-light text-white px-6 py-3">
              Get Started
            </Button>
            <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 px-6 py-3">
              <Download size={18} className="mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;
