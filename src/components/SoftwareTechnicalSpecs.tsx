
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Database, Wifi, Shield } from "lucide-react";

const SoftwareTechnicalSpecs = () => {
  const specifications = [
    {
      category: "System Requirements",
      specs: [
        "Windows 10/11 (64-bit) or Linux Ubuntu 18.04+",
        "Minimum 8GB RAM (16GB recommended)",
        "Intel Core i5 or AMD equivalent processor",
        "DirectX 11 compatible graphics card",
        "10GB available disk space"
      ]
    },
    {
      category: "Supported Protocols",
      specs: [
        "Modbus TCP/RTU",
        "EtherNet/IP",
        "PROFINET",
        "OPC UA",
        "REST API"
      ]
    },
    {
      category: "Database Support",
      specs: [
        "PostgreSQL 12+",
        "Microsoft SQL Server 2019+",
        "MySQL 8.0+",
        "SQLite (embedded)",
        "InfluxDB (time-series data)"
      ]
    },
    {
      category: "Security Features",
      specs: [
        "AES-256 encryption",
        "Role-based access control",
        "Active Directory integration",
        "SSL/TLS communication",
        "Audit logging"
      ]
    }
  ];

  const icons = [Cpu, Database, Wifi, Shield];

  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade software designed for industrial environments with robust 
            performance and comprehensive compatibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specifications.map((category, index) => {
            const IconComponent = icons[index];
            return (
              <Card key={index} className="bg-black border-gray-800/20 hover:border-theme-blue/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-theme-blue/10 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-theme-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.specs.map((spec, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-theme-blue mr-3 mt-1">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTechnicalSpecs;
