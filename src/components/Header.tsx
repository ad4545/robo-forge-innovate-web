import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/#products" },
    { title: "Software", href: "/software" },
    { title: "Industries", href: "/#industries" },
    { title: "About", href: "/#stats" },
    { title: "Contact", href: "/#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-white/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-theme-blue rounded flex items-center justify-center">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-white">Seven Robotics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a 
                  key={item.title} 
                  href={item.href}
                  className="text-white hover:text-theme-blue transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link 
                  key={item.title} 
                  to={item.href}
                  className="text-white hover:text-theme-blue transition-colors"
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-theme-blue hover:bg-theme-blue-light text-white">
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
        <div className="md:hidden bg-dark-gray border-t border-gray-800/20 py-4">
          <nav className="flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a 
                  key={item.title} 
                  href={item.href} 
                  className="text-gray-300 hover:text-theme-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ) : (
                <Link 
                  key={item.title} 
                  to={item.href} 
                  className="text-gray-300 hover:text-theme-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            ))}
            <Button className="bg-theme-blue hover:bg-theme-blue-light text-white w-full">
              Get a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
