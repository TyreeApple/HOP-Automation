import { Card } from "@/components/ui/card";
import { Phone, Calendar, BarChart3, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "24/7 Call Handling",
      description: "Lillie answers every call instantly, ensuring no lead is ever missed, day or night"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Instant Booking",
      description: "Convert leads to appointments in under 60 seconds with automated scheduling"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Lead Analytics",
      description: "Track conversion rates, call patterns, and revenue metrics in real-time"
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Smart Follow-ups",
      description: "Automatically re-engage unresponsive leads and convert them into appointments"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Lillie's AI-Powered Capabilities
            </h2>
            <p className="text-xl text-white/60">
              Transform your medspa operations with intelligent automation that captures every lead, books appointments instantly, and maximizes your revenue potential.
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;