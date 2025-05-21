
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Products", href: "#products" },
    { title: "Industries", href: "#industries" },
    { title: "About", href: "#stats" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-robotics-darker/80 backdrop-blur-md border-b border-robotics-gray/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-robotics-purple rounded-md flex items-center justify-center">
              <span className="text-robotics-dark font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold text-white">RoboNex</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.title} 
                href={item.href}
                className="text-robotics-gray-light hover:text-robotics-purple transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-robotics-purple hover:bg-robotics-purple-light text-white">
              Get a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-robotics-darker border-t border-robotics-gray/10 py-4">
          <nav className="flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              <a 
                key={item.title} 
                href={item.href} 
                className="text-robotics-gray-light hover:text-robotics-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Button className="bg-robotics-purple hover:bg-robotics-purple-light text-white w-full">
              Get a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
