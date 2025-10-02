import { Shield, Heart, Users, Stethoscope, Umbrella, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family with cashless claims at our network hospitals.",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Protect your loved ones' future with affordable life insurance plans tailored to your needs.",
  },
  {
    icon: Stethoscope,
    title: "Telemedicine",
    description: "24/7 access to qualified doctors through our digital telemedicine platform from anywhere.",
  },
  {
    icon: Umbrella,
    title: "Accident Coverage",
    description: "Financial protection against unexpected accidents with instant claim processing.",
  },
  {
    icon: Users,
    title: "Family Packages",
    description: "Complete family health and insurance solutions at discounted rates for peace of mind.",
  },
  {
    icon: FileCheck,
    title: "Easy Claims",
    description: "Hassle-free claim process with digital submission and fast approval within 48 hours.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare and insurance solutions designed for the modern Sri Lankan family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
