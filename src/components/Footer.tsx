import { Calendar, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo className="mb-2" width={160} height={50} />
            <p className="text-white/60">
              Never miss a lead with AI-powered automation for medspas. Lillie handles calls, books appointments, and grows your revenue 24/7.
            </p>
            <div className="space-y-3">
              <p className="text-white/80 text-sm">📧 joseph@hopautomation.com</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Test it Out</h4>
              <p className="text-white/60 text-sm">Call Lillie AI and experience our technology firsthand</p>
              <p className="text-white/80 text-sm font-medium">📞 +1 (954) 697-4756</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="sm" 
                className="bg-white text-black hover:bg-white/90 flex items-center gap-2"
                onClick={() => window.open('https://calendly.com/joseph-hopautomation/30min?month=2025-08', '_blank')}
              >
                <Calendar className="w-4 h-4" />
                Book Demo
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2"
                onClick={() => window.open('tel:+19546974756', '_self')}
              >
                <Phone className="w-4 h-4" />
                Test it Out
              </Button>
            </div>

          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Lillie AI</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">24/7 Call Handling</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Instant Booking</a></li>

            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About HOP</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Medspa Resources</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-white/60 hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/cookies" className="text-white/60 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2025 HOP Automation. All rights reserved. Transforming medspas with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;