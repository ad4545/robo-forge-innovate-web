
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Thanks for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-dark-gray relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Discuss Your <span className="text-theme-blue">Robotics Needs</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Our team of experts is ready to help you find the perfect robotics solution for your 
              specific industry challenges. Get in touch to start the conversation.
            </p>
            
            <div className="space-y-6">
              <div className="card-gradient rounded-lg p-4 flex items-start gap-4">
                <div className="min-w-10 h-10 rounded-lg bg-theme-blue/20 flex items-center justify-center text-theme-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-theme-blue">info@asrs.tech</p>
                </div>
              </div>
              
              <div className="card-gradient rounded-lg p-4 flex items-start gap-4">
                <div className="min-w-10 h-10 rounded-lg bg-theme-blue/20 flex items-center justify-center text-theme-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-theme-blue">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="card-gradient rounded-lg p-4 flex items-start gap-4">
                <div className="min-w-10 h-10 rounded-lg bg-theme-blue/20 flex items-center justify-center text-theme-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-300">101 Tech Plaza, Suite 400<br />Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-gradient rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-gray-300">Full Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black border-gray-700/30 focus:border-theme-blue"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black border-gray-700/30 focus:border-theme-blue"
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="text-sm text-gray-300">Company</label>
                <Input 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-black border-gray-700/30 focus:border-theme-blue"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm text-gray-300">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black border-gray-700/30 focus:border-theme-blue min-h-[120px]"
                  placeholder="Tell us about your project needs..."
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-theme-blue hover:bg-theme-blue-light">
                Send Message
              </Button>
            </form>
            
            <div className="mt-4 text-xs text-gray-400 text-center">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-theme-blue hover:underline">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
