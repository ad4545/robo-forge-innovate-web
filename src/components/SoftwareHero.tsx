
import { Button } from "@/components/ui/button";
import { Download, Play, ArrowRight } from "lucide-react";

const SoftwareHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-theme-blue/10 rounded-full text-theme-blue text-sm mb-6">
              <span className="w-2 h-2 bg-theme-blue rounded-full mr-2"></span>
              Industrial Automation Software
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              <span className="text-white">Complete Control.</span><br />
              <span className="text-theme-blue">Maximum Performance.</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Professional-grade automation software designed for industrial robotics. 
              Monitor, control, and optimize your entire robotic fleet with enterprise-level 
              tools and real-time analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-theme-blue hover:bg-theme-blue-light text-white px-6 py-3">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
              <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 px-6 py-3">
                <Download size={18} className="mr-2" />
                Free Trial
              </Button>
            </div>

            {/* Key Features Preview */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-theme-blue mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">System Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-theme-blue mb-1">500+</div>
                <div className="text-gray-400 text-sm">Installations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-theme-blue mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Software Interface Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-gray-800">
              <div className="bg-black rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">System Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Active Robots</span>
                    <span className="text-theme-blue font-semibold">24/24</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Efficiency</span>
                    <span className="text-green-400 font-semibold">87%</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-theme-blue text-sm mb-1">Production</div>
                  <div className="text-white text-xl font-bold">1,247</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-theme-blue text-sm mb-1">Queue</div>
                  <div className="text-white text-xl font-bold">156</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-theme-blue/20 rounded-lg p-3 backdrop-blur-sm border border-theme-blue/30">
              <div className="text-theme-blue text-xs">Real-time Monitoring</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500/20 rounded-lg p-3 backdrop-blur-sm border border-green-500/30">
              <div className="text-green-400 text-xs">System Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;
