
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Code, Globe } from "lucide-react";

const SoftwareIntegration = () => {
  const integrations = [
    {
      icon: <Plug className="h-8 w-8 text-theme-blue" />,
      title: "PLC Integration",
      description: "Seamless connectivity with Siemens, Allen-Bradley, Schneider Electric, and other major PLC manufacturers.",
      features: ["Real-time data exchange", "Ladder logic compatibility", "Direct I/O mapping"]
    },
    {
      icon: <Code className="h-8 w-8 text-theme-blue" />,
      title: "ERP/MES Integration",
      description: "Connect with SAP, Oracle, Microsoft Dynamics, and other enterprise systems for complete workflow automation.",
      features: ["Work order management", "Inventory tracking", "Production scheduling"]
    },
    {
      icon: <Globe className="h-8 w-8 text-theme-blue" />,
      title: "Cloud Connectivity",
      description: "Secure cloud integration for remote monitoring, analytics, and predictive maintenance capabilities.",
      features: ["AWS/Azure compatible", "Edge computing support", "IoT device management"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise Integration
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Integrate seamlessly with your existing industrial infrastructure. Our software 
            connects with leading automation platforms and enterprise systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-dark-gray border-gray-800/20 hover:border-theme-blue/30 transition-all duration-300 group">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex flex-col items-start space-y-4 flex-grow">
                  <div className="p-3 bg-theme-blue/10 rounded-lg group-hover:bg-theme-blue/20 transition-colors">
                    {integration.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{integration.title}</h3>
                  <p className="text-gray-300 text-sm flex-grow">{integration.description}</p>
                  <ul className="space-y-2 w-full">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <ArrowRight className="h-4 w-4 text-theme-blue mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 mt-6 w-full"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareIntegration;
