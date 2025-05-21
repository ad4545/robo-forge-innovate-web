
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-gray py-12 border-t border-gray-800/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-theme-blue rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">ASRS</span>
            </a>
            
            <p className="text-sm text-gray-300 mb-6">
              Pioneering industrial robotics solutions for the manufacturing sector, 
              delivering efficiency and precision for tomorrow's factories.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-theme-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-theme-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-theme-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-theme-blue/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Robotic Arms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Mobile Robots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Vision Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Control Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">White Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-theme-blue transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay updated with the latest in industrial robotics and automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-black border border-gray-700/30 rounded-lg focus:outline-none focus:border-theme-blue"
              />
              <Button className="bg-theme-blue hover:bg-theme-blue-light text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} ASRS. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-theme-blue transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-theme-blue transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-theme-blue transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
