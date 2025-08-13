import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight } from "lucide-react";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Medspa?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            See Lillie in action and discover how AI automation can boost your bookings, capture every lead, and increase revenue by up to 40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
              onClick={() => window.open('https://calendly.com/joseph-hopautomation/30min?month=2025-08', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Book a Free Demo
            </Button>
            <Button 
              className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2"
              onClick={() => window.open('tel:+19546974756', '_self')}
            >
              <Phone className="w-5 h-5" />
              Test it Out
            </Button>
          </div>
          <div className="mt-12 p-8 bg-accent/10 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Experience Lillie AI Yourself
            </h3>
            <p className="text-white/70 text-center mb-6 max-w-xl mx-auto">
              Don't just take our word for it. Call Lillie directly and see how she handles your questions, books appointments, and provides instant responses.
            </p>
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Call now to test Lillie AI:</p>
              <p className="text-3xl font-bold text-white mb-4">+1 (954) 697-4756</p>
              <Button 
                className="px-6 py-3 bg-[#F2FF44] text-black hover:bg-[#E2EF34] font-semibold"
                onClick={() => window.open('tel:+19546974756', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Lillie Now
              </Button>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-white/40 text-sm mb-4">Join 500+ medspas already using Lillie</p>
            <div className="flex items-center justify-center gap-2 text-white/60">
              <span>No setup fees</span>
              <ArrowRight className="w-4 h-4" />
              <span>30-day free trial</span>
              <ArrowRight className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;