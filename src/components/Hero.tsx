import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    { src: heroBg, alt: "Healthcare professionals with family" },
    { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop", alt: "Medical care for families" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop", alt: "Healthcare consultation" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&h=1080&fit=crop", alt: "Medical professionals" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up">
            Protecting the Future of Every Family
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Affordable, accessible healthcare and insurance solutions for millions across Sri Lanka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <Link to="/products">
                Explore Our Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Shield className="w-10 h-10 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-display font-bold mb-2">1.5M+</div>
              <div className="text-sm text-primary-foreground/80">Insurance Customers</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Heart className="w-10 h-10 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-display font-bold mb-2">Rs. 2B+</div>
              <div className="text-sm text-primary-foreground/80">Claims Paid in 2022</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Users className="w-10 h-10 mx-auto mb-3 text-accent" />
              <div className="text-3xl font-display font-bold mb-2">3M+</div>
              <div className="text-sm text-primary-foreground/80">Beneficiaries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
