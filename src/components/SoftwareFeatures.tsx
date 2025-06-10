
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Settings, Zap, Database } from "lucide-react";

const SoftwareFeatures = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8 text-theme-blue" />,
      title: "Automated monitoring & optimization",
      description: [
        "Continuous background monitoring & optimization of performance & efficiency.",
        "Track & monitor overall system, as well as individual AutoStore modules."
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-theme-blue" />,
      title: "Automated troubleshooting & diagnostic tool",
      description: [
        "Identifies & fixes errors without manual intervention.",
        "Preventive troubleshooting stops errors occurring or developing further.",
        "Reduces service & maintenance demands."
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-theme-blue" />,
      title: "Autonomous robot charging",
      description: [
        "Manages and optimizes charging schedule for your Robot fleet.",
        "Maintain efficiency & operational continuity during peaks",
        "Avoid overcharging."
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-theme-blue" />,
      title: "Automated backups",
      description: [
        "Automated backup of the current system state & individual module data.",
        "In case of power failure for your site."
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-dark-gray border-gray-800/20 hover:border-theme-blue/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 bg-theme-blue/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareFeatures;
