import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { useVideoSecurity } from "@/hooks/useVideoSecurity";
import "./VideoSecurity.css";

const Hero = () => {
  useVideoSecurity();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-[73px] bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Never Miss a Lead with Lillie AI
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Meet Lillie, your AI receptionist for medspas. Book appointments in under 60 seconds, answer calls 24/7, and convert unresponsive leads into paying clients automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
              onClick={() => window.open('https://calendly.com/joseph-hopautomation/30min?month=2025-08', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Button>
            <Button 
              className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2"
              onClick={() => window.open('tel:+19546974756', '_self')}
            >
              <Phone className="w-5 h-5" />
              Test it Out
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/60">AI Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">&lt;60s</div>
              <div className="text-white/60">Booking Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/60">Lead Capture</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl video-container">
            <video 
              src="/Demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-auto object-cover select-none"
              style={{ maxHeight: '500px', pointerEvents: 'auto' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;