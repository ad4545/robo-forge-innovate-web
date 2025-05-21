
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-robotics-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-robotics-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-robotics-purple/20 border border-robotics-purple/30 text-sm text-robotics-purple-light mb-4">
              Next-Gen Industrial Automation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Advanced Robotics for <br />
              <span className="text-robotics-purple">Industrial Excellence</span>
            </h1>
            
            <p className="text-lg text-robotics-gray-light max-w-xl">
              Transform your manufacturing capabilities with our cutting-edge robotics solutions. 
              Increase productivity, enhance precision, and drive innovation in your industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-robotics-purple hover:bg-robotics-purple-light text-white px-8 py-6">
                Explore Solutions
              </Button>
              <Button variant="outline" className="border-robotics-purple text-robotics-purple hover:bg-robotics-purple/10 px-8 py-6">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-robotics-purple/30 flex items-center justify-center text-xs">98%</div>
                <div className="w-10 h-10 rounded-full bg-robotics-purple/50 flex items-center justify-center text-xs">+35%</div>
                <div className="w-10 h-10 rounded-full bg-robotics-purple/70 flex items-center justify-center text-xs">24/7</div>
              </div>
              <p className="text-sm text-robotics-gray">Trusted by leading manufacturers worldwide</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-80 sm:h-96 md:h-[450px]">
            <div className="absolute inset-0 card-gradient rounded-2xl overflow-hidden purple-glow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 relative animate-float">
                  {/* Stylized robot arm illustration */}
                  <div className="absolute w-10 h-40 bg-robotics-purple/80 rounded-full top-0 left-24 transform -rotate-45"></div>
                  <div className="absolute w-32 h-8 bg-robotics-purple/60 rounded-full top-24 left-8 transform -rotate-12"></div>
                  <div className="absolute w-16 h-16 rounded-full border-4 border-robotics-purple top-14 left-16 animate-pulse-glow"></div>
                  <div className="absolute w-6 h-6 bg-white rounded-full top-19 left-21"></div>
                </div>
              </div>
              
              {/* Data visualization elements */}
              <div className="absolute bottom-6 left-6 right-6 h-16 bg-robotics-darker/70 backdrop-blur-sm rounded-lg border border-robotics-gray/20 flex items-center justify-between px-4">
                <div className="flex flex-col">
                  <span className="text-xs text-robotics-gray">Efficiency</span>
                  <span className="text-lg text-robotics-purple">98.7%</span>
                </div>
                <div className="w-1/3 h-2 bg-robotics-darker rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-robotics-purple rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-robotics-gray">Production</span>
                  <span className="text-lg text-robotics-purple">+43.2%</span>
                </div>
              </div>
              
              {/* Animated data points */}
              <div className="absolute top-8 right-8 flex space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-robotics-purple animate-pulse-glow" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
