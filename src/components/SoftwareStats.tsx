
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";

const SoftwareStats = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-theme-blue" />,
      value: "99.8%",
      label: "Global uptime"
    },
    {
      icon: <Clock className="h-8 w-8 text-theme-blue" />,
      value: "24/7",
      label: "Performance & reliability"
    },
    {
      icon: <Shield className="h-8 w-8 text-theme-blue" />,
      value: "Secure",
      label: "End-to-end encryption"
    },
    {
      icon: <Zap className="h-8 w-8 text-theme-blue" />,
      value: "Smart",
      label: "Autonomous Robot charging"
    }
  ];

  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Safe, reliable operations & maximum uptime.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-theme-blue/10 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareStats;
