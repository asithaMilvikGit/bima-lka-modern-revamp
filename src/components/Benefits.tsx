import { CheckCircle2, Zap, DollarSign, Globe } from "lucide-react";
import insuranceIcon from "@/assets/insurance-icon.png";
import healthcareIcon from "@/assets/healthcare-icon.png";
import familyIcon from "@/assets/family-icon.png";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Up to 5x better value compared to traditional insurance with flexible payment plans.",
  },
  {
    icon: Zap,
    title: "Instant Coverage",
    description: "Get covered within 24 hours with our streamlined digital enrollment process.",
  },
  {
    icon: CheckCircle2,
    title: "Cashless Experience",
    description: "Fully cashless experience across our network of clinics, labs, and hospitals.",
  },
  {
    icon: Globe,
    title: "Nationwide Network",
    description: "Access to 500+ healthcare providers across all provinces in Sri Lanka.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="gradient-text">BIMA</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're committed to democratizing healthcare in Sri Lanka by providing innovative, affordable, and accessible insurance solutions that protect what matters most.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src={insuranceIcon} 
                alt="Insurance protection" 
                className="w-full rounded-2xl shadow-elegant animate-scale-in"
              />
              <img 
                src={familyIcon} 
                alt="Family care" 
                className="w-full rounded-2xl shadow-elegant animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
            <div className="pt-12">
              <img 
                src={healthcareIcon} 
                alt="Healthcare technology" 
                className="w-full rounded-2xl shadow-elegant animate-scale-in"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
