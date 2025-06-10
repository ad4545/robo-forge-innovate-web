
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Check, Download } from "lucide-react";
import { useState } from "react";

const SoftwarePackage = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const packageFeatures = [
    {
      title: "One software license, everything you need",
      details: "Complete software package with all essential tools and features for optimal system management."
    },
    {
      title: "All software updates included",
      details: "Automatic updates ensure your system stays current with the latest features and security improvements."
    },
    {
      title: "Easy to use reporting & analytics with Unify Analytics",
      details: "Comprehensive reporting tools with intuitive dashboards for deep operational insights and performance tracking."
    },
    {
      title: "Total operational visibility",
      details: "Complete transparency into your system's performance with real-time monitoring and detailed analytics."
    }
  ];

  const benefits = [
    "Save time with automated monitoring & optimization.",
    "Enables data-driven operations management.",
    "Automated reporting and analytics."
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 h-96 flex items-center justify-center border border-gray-800/20">
              <div className="text-center">
                <div className="w-32 h-32 bg-theme-blue/20 rounded-lg mx-auto mb-4 flex items-center justify-center border border-theme-blue/30">
                  <div className="text-4xl text-theme-blue">📊</div>
                </div>
                <p className="text-gray-400 font-sans">Dashboard Analytics View</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              All the Essentials with one software package.
            </h2>

            <div className="space-y-4 mb-8">
              {packageFeatures.map((feature, index) => (
                <Card key={index} className="bg-dark-gray border-gray-800/20 hover:border-theme-blue/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-white font-display font-medium">{feature.title}</span>
                      <Plus 
                        className={`h-5 w-5 text-theme-blue transition-transform ${
                          expandedItems.includes(index) ? 'rotate-45' : ''
                        }`} 
                      />
                    </button>
                    {expandedItems.includes(index) && (
                      <p className="text-gray-400 text-sm mt-3 pl-0 font-sans leading-relaxed">
                        {feature.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-theme-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-sans">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-theme-blue hover:bg-theme-blue-light text-white px-8 py-3 rounded-full font-display font-medium">
              <Download className="h-4 w-4 mr-2" />
              Download software brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwarePackage;
