
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            <span className="text-white">ASRS</span> - <span className="text-theme-blue">The future is here</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
            Automated Storage & Retrieval Systems revolutionizing industrial workflows with intelligent robotic solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button className="bg-theme-blue hover:bg-theme-blue-light text-white px-8 py-6 text-lg">
              Explore Solutions
            </Button>
            <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 px-8 py-6 text-lg">
              <Download size={20} className="mr-2" />
              Download Brochure
            </Button>
          </div>
          
          <div className="mt-24">
            <div className="flex justify-center items-center card-gradient p-6 rounded-2xl backdrop-blur-sm blue-glow">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Efficiency</p>
                  <p className="text-theme-blue text-3xl font-bold">98.7%</p>
                </div>
                <div className="h-12 w-px bg-gray-800 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Reliability</p>
                  <p className="text-theme-blue text-3xl font-bold">99.9%</p>
                </div>
                <div className="h-12 w-px bg-gray-800 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">ROI Timeline</p>
                  <p className="text-theme-blue text-3xl font-bold">14 mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
