
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Activity, Settings } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "NexusArm X200",
      description: "Advanced robotic arm with 6-axis precision control for assembly lines",
      icon: <Box className="h-10 w-10 text-theme-blue" />,
      specs: [
        { label: "Payload", value: "150kg" },
        { label: "Reach", value: "2.8m" },
        { label: "Precision", value: "±0.05mm" }
      ]
    },
    {
      id: 2,
      title: "AutoTrack T500",
      description: "Autonomous mobile robot for warehouse logistics and inventory management",
      icon: <Activity className="h-10 w-10 text-theme-blue" />,
      specs: [
        { label: "Speed", value: "2.3m/s" },
        { label: "Payload", value: "500kg" },
        { label: "Battery", value: "12h" }
      ]
    },
    {
      id: 3,
      title: "VisionBot AI",
      description: "Machine vision system with advanced AI for quality control applications",
      icon: <Settings className="h-10 w-10 text-theme-blue" />,
      specs: [
        { label: "Resolution", value: "4K" },
        { label: "Detection", value: "99.8%" },
        { label: "Processing", value: "60fps" }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge <span className="text-theme-blue">Robotics Solutions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our product lineup features state-of-the-art industrial robots designed for 
            maximum efficiency, precision, and reliability in demanding environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="card-gradient rounded-xl p-6 hover:blue-glow transition-all duration-300"
            >
              <div className="mb-6">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-gray-400 mb-6">{product.description}</p>
              
              <div className="space-y-3 mb-8">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="text-theme-blue font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="ghost" className="w-full justify-between text-theme-blue hover:bg-theme-blue/10">
                View Details <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-theme-blue hover:bg-theme-blue-light text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
