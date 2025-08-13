import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="hover:opacity-80 transition-opacity" width={80} height={25} />
        
        {/* Center navigation links */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a 
            href="#features" 
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </div>
        
        {/* Right action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="text-white border-white/20 hover:bg-white/10"
            onClick={() => window.open('https://calendly.com/joseph-hopautomation/30min?month=2025-08', '_blank')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book a Demo
          </Button>
          <Button 
            className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
            onClick={() => window.open('tel:+19546974756', '_self')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Test it Out
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#features" 
              className="block text-white/80 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block text-white/80 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="block text-white/80 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block text-white/80 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-3 pt-4">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 w-full"
                onClick={() => {
                  window.open('https://calendly.com/joseph-hopautomation/30min?month=2025-08', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Demo
              </Button>
              <Button 
                className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full"
                onClick={() => {
                  window.open('tel:+19546974756', '_self');
                  setIsMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Test it Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;