import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="about">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Download />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;