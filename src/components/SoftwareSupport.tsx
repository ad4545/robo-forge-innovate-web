
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, BookOpen, Users, Clock, Award } from "lucide-react";

const SoftwareSupport = () => {
  const supportOptions = [
    {
      icon: <Phone className="h-6 w-6 text-theme-blue" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance from certified engineers",
      availability: "24/7/365"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-theme-blue" />,
      title: "Comprehensive Training",
      description: "On-site and virtual training programs for your team",
      availability: "Scheduled"
    },
    {
      icon: <Users className="h-6 w-6 text-theme-blue" />,
      title: "Dedicated Account Manager",
      description: "Personal support for enterprise customers",
      availability: "Business Hours"
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security" },
    { name: "IEC 61508", description: "Functional Safety" },
    { name: "ISO 9001", description: "Quality Management" },
    { name: "CE Marking", description: "European Conformity" }
  ];

  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Support Services */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Support Services
            </h2>
            <p className="text-gray-300 mb-8">
              Get the most out of your automation investment with our comprehensive 
              support services and expert guidance.
            </p>

            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <Card key={index} className="bg-black border-gray-800/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-theme-blue/10 rounded-lg">
                        {option.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold text-white">{option.title}</h3>
                          <span className="text-xs text-theme-blue bg-theme-blue/10 px-2 py-1 rounded">
                            {option.availability}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-theme-blue hover:bg-theme-blue-light text-white">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10">
                <Mail className="h-4 w-4 mr-2" />
                Schedule Training
              </Button>
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-gray-300 mb-8">
              Our software meets the highest industry standards for safety, 
              security, and quality in industrial automation.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-black border-gray-800/20 hover:border-theme-blue/30 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-theme-blue/10 rounded-lg inline-block mb-4">
                      <Award className="h-6 w-6 text-theme-blue" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-theme-blue/5 border-theme-blue/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-theme-blue/10 rounded-lg">
                    <Clock className="h-6 w-6 text-theme-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Service Level Agreement</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 99.9% uptime guarantee</li>
                      <li>• &lt;4 hour response time for critical issues</li>
                      <li>• Dedicated support team assignment</li>
                      <li>• Regular health checks and updates</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSupport;
