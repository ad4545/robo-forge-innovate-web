import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/drt56ija4/video/upload/v1747829397/spot_sabx6w.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* Background elements - keeping subtle effects on top of video */}
      <div className="absolute inset-0 grid-bg opacity-5 z-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl z-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl z-20"></div>
      
      <div className="container mx-auto px-4 relative z-30 top-56">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            <span className="text-white">ASRS</span> - <span className="text-theme-blue">The future is here</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 mt-6 max-w-2xl">
            Automated Storage & Retrieval Systems revolutionizing industrial workflows with intelligent robotic solutions
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-theme-blue hover:bg-theme-blue-light text-white px-6 py-5 text-base">
              Explore Solutions
            </Button>
            <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 px-6 py-5 text-base">
              <Download size={18} className="mr-2" />
              Download Brochure
            </Button>
          </div> */}
          
          {/* <div className="mt-16">
            <div className="flex justify-center items-center card-gradient p-5 rounded-2xl backdrop-blur-sm blue-glow">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Efficiency</p>
                  <p className="text-theme-blue text-2xl font-bold">98.7%</p>
                </div>
                <div className="h-12 w-px bg-gray-800 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Reliability</p>
                  <p className="text-theme-blue text-2xl font-bold">99.9%</p>
                </div>
                <div className="h-12 w-px bg-gray-800 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">ROI Timeline</p>
                  <p className="text-theme-blue text-2xl font-bold">14 mo</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;