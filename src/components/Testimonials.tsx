import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lillie has transformed our booking process. We went from missing 30% of calls to capturing every single lead. Our revenue increased by 45% in just 3 months.",
      author: "Dr. Sarah Martinez",
      role: "Owner, Radiance MedSpa"
    },
    {
      quote: "The AI is incredible - it books appointments faster than our human staff and never makes mistakes. Our clients love the instant responses.",
      author: "Jessica Chen",
      role: "Manager, Luxe Aesthetics"
    },
    {
      quote: "Lillie pays for itself. We're booking 60% more appointments and our staff can focus on patient care instead of answering phones all day.",
      author: "Michael Rodriguez",
      role: "Director, Elite Wellness Spa"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          What Medspa Owners Say About Lillie
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join hundreds of successful medspas who have transformed their booking process and increased revenue with Lillie AI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;