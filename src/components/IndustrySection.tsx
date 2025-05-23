
import { Building, Factory, Database, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndustrySection = () => {
  const industries = [
    {
      id: 1,
      title: "Manufacturing",
      description: "Streamline assembly lines and increase production rates with precision robotics",
      icon: <Factory className="h-8 w-8" />
    },
    {
      id: 2,
      title: "Automotive",
      description: "Enhance quality control and assembly precision in automotive production",
      icon: <Truck className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Warehousing",
      description: "Automate inventory management and optimize warehouse operations",
      icon: <Database className="h-8 w-8" />
    },
    {
      id: 4,
      title: "Electronics",
      description: "Achieve micron-level precision for electronics assembly and testing",
      icon: <Building className="h-8 w-8" />
    }
  ];

  return (
    <section id="industries" className="py-20 bg-dark-gray relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Robotics Solutions for <span className="text-theme-blue">Every Industry</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Our specialized robotics systems are designed to meet the unique challenges and requirements 
              of various industries, delivering tangible results and ROI across sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-theme-blue"></div>
                <p className="text-gray-400">Customized for specific industrial applications</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-theme-blue"></div>
                <p className="text-gray-400">Industry-compliant safety features</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-theme-blue"></div>
                <p className="text-gray-400">Integration with existing systems</p>
              </div>
            </div>
            
            <Button className="mt-8 bg-theme-blue hover:bg-theme-blue-light text-white">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div 
                  key={industry.id}
                  className="card-gradient rounded-xl p-6 hover:blue-glow transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-lg bg-theme-blue/20 flex items-center justify-center mb-4 text-theme-blue">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-lg border border-theme-blue/30 bg-theme-blue/10">
              <p className="text-sm text-center">
                <span className="text-theme-blue font-medium">Industry 4.0 Ready:</span>{" "}
                All our solutions are designed for seamless integration with smart factory systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
