
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Battery, Shield, Settings } from "lucide-react";

const AccordionShowcase = () => {
  const [activeItem, setActiveItem] = useState("autonomous-charging");

  const accordionData = [
    {
      id: "autonomous-charging",
      title: "Autonomous Charging",
      icon: Battery,
      description: "Self-managing power systems for continuous operation",
      content: "Our AMR systems feature intelligent autonomous charging capabilities that ensure uninterrupted warehouse operations. Robots automatically navigate to charging stations when battery levels are low, optimizing uptime and maintaining peak productivity throughout your facility.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: "safety-assurance",
      title: "Safety Assurance",
      icon: Shield,
      description: "Advanced safety protocols protecting workforce and inventory",
      content: "Industry-leading safety systems with 360° environmental awareness, collision avoidance technology, and emergency stop protocols. Our AMR solutions prioritize human safety while maintaining operational efficiency in dynamic warehouse environments.",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      id: "controller",
      title: "Intelligent Controller",
      icon: Settings,
      description: "Centralized control system for fleet management",
      content: "Sophisticated fleet management through our intelligent controller system. Monitor, control, and optimize your entire AMR fleet from a single interface, with real-time analytics, predictive maintenance alerts, and seamless integration capabilities.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced <span className="text-theme-blue">AMR Capabilities</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the cutting-edge features that make our Autonomous Mobile Robots the industry standard
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Accordion 
            type="single" 
            value={activeItem} 
            onValueChange={setActiveItem}
            className="space-y-4"
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-gray-800/30 rounded-2xl overflow-hidden bg-gray-900/20 backdrop-blur-sm hover:border-theme-blue/30 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center gap-6 text-left w-full">
                    <div className="bg-theme-blue/10 p-4 rounded-xl group-hover:bg-theme-blue/20 transition-all duration-300">
                      <item.icon className="text-theme-blue w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-theme-blue transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-8 pb-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Video Section */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-theme-blue/10 group order-2 lg:order-1">
                      <video
                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        poster="/placeholder.svg"
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70"></div>
                      
                      {/* Video Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                          <h4 className="text-white font-semibold text-lg mb-1">{item.title} in Action</h4>
                          <p className="text-gray-300 text-sm">Real-world implementation showcase</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 order-1 lg:order-2">
                      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                      
                      {/* Features List */}
                      <div className="grid gap-3">
                        {item.id === "autonomous-charging" && (
                          <>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Automatic battery level monitoring</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Smart charging station navigation</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Optimized charging schedules</span>
                            </div>
                          </>
                        )}
                        
                        {item.id === "safety-assurance" && (
                          <>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>360° obstacle detection</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Emergency stop protocols</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Human-robot collaboration safety</span>
                            </div>
                          </>
                        )}
                        
                        {item.id === "controller" && (
                          <>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Real-time fleet monitoring</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Predictive maintenance alerts</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-theme-blue rounded-full"></div>
                              <span>Advanced analytics dashboard</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AccordionShowcase;
