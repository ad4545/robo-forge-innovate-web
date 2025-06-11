
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Battery, Shield, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccordionShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  const carouselData = [
    {
      id: "autonomous-charging",
      title: "Autonomous Charging",
      icon: Battery,
      description: "Self-managing power systems for continuous operation",
      content: "Our AMR systems feature intelligent autonomous charging capabilities that ensure uninterrupted warehouse operations. Robots automatically navigate to charging stations when battery levels are low, optimizing uptime and maintaining peak productivity throughout your facility.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      features: [
        "Automatic battery level monitoring",
        "Smart charging station navigation", 
        "Optimized charging schedules"
      ]
    },
    {
      id: "safety-assurance",
      title: "Safety Assurance",
      icon: Shield,
      description: "Advanced safety protocols protecting workforce and inventory",
      content: "Industry-leading safety systems with 360° environmental awareness, collision avoidance technology, and emergency stop protocols. Our AMR solutions prioritize human safety while maintaining operational efficiency in dynamic warehouse environments.",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      features: [
        "360° obstacle detection",
        "Emergency stop protocols",
        "Human-robot collaboration safety"
      ]
    },
    {
      id: "controller",
      title: "Intelligent Controller",
      icon: Settings,
      description: "Centralized control system for fleet management",
      content: "Sophisticated fleet management through our intelligent controller system. Monitor, control, and optimize your entire AMR fleet from a single interface, with real-time analytics, predictive maintenance alerts, and seamless integration capabilities.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      features: [
        "Real-time fleet monitoring",
        "Predictive maintenance alerts",
        "Advanced analytics dashboard"
      ]
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced <span className="text-theme-blue">AMR Capabilities</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the cutting-edge features that make our Autonomous Mobile Robots the industry standard
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselData.map((item, index) => (
                <CarouselItem key={item.id} className="pl-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-theme-blue/20 group min-h-[600px]">
                    {/* Video Background */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      poster="/placeholder.svg"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Translucent Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-opacity duration-500 group-hover:bg-black/50"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-center">
                        {/* Text Content */}
                        <div className="text-white space-y-6 transform transition-all duration-700 translate-y-0 group-hover:-translate-y-2">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="bg-theme-blue/20 p-4 rounded-xl backdrop-blur-sm border border-theme-blue/30">
                              <item.icon className="text-theme-blue w-8 h-8" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                {item.title}
                              </h3>
                              <p className="text-theme-blue text-sm md:text-base font-medium">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                              {item.content}
                            </p>
                            
                            <div className="grid gap-3">
                              {item.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-300">
                                  <div className="w-2 h-2 bg-theme-blue rounded-full flex-shrink-0"></div>
                                  <span className="text-sm md:text-base">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className="hidden lg:block transform transition-all duration-700 translate-x-0 group-hover:translate-x-2">
                          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                            <div className="text-center">
                              <div className="w-32 h-32 bg-theme-blue/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-theme-blue/30">
                                <item.icon className="w-16 h-16 text-theme-blue" />
                              </div>
                              <h4 className="text-white font-semibold text-xl mb-2">{item.title}</h4>
                              <p className="text-gray-400 text-sm">Advanced Technology</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide Indicator */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/30">
                        <span className="text-white text-sm font-medium">
                          {index + 1} / {carouselData.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-theme-blue/30 bg-black/40 backdrop-blur-sm hover:bg-theme-blue/20 hover:border-theme-blue transition-all duration-300"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-4 w-4 text-theme-blue" />
              </Button>
              
              <div className="flex gap-2 items-center">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-theme-blue scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-theme-blue/30 bg-black/40 backdrop-blur-sm hover:bg-theme-blue/20 hover:border-theme-blue transition-all duration-300"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-4 w-4 text-theme-blue" />
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AccordionShowcase;
