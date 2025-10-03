import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Heart, Users, Stethoscope, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const plans = [
    {
      name: "Basic Care",
      price: "Rs. 500",
      period: "/month",
      icon: Shield,
      popular: false,
      features: [
        "Hospital coverage up to Rs. 100,000",
        "Outpatient benefits",
        "Emergency care",
        "24/7 helpline support",
        "Accident coverage",
      ],
    },
    {
      name: "B-Care Plus",
      price: "Rs. 1,200",
      period: "/month",
      icon: Heart,
      popular: true,
      features: [
        "Hospital coverage up to Rs. 500,000",
        "Unlimited telemedicine consultations",
        "Diagnostic tests included",
        "Pharmacy benefits",
        "Maternity coverage",
        "Dental & optical care",
        "Annual health check-up",
      ],
    },
    {
      name: "Family Premium",
      price: "Rs. 2,500",
      period: "/month",
      icon: Users,
      popular: false,
      features: [
        "Coverage for up to 5 family members",
        "Hospital coverage up to Rs. 1,000,000",
        "Full telemedicine access",
        "Home healthcare services",
        "International emergency coverage",
        "Chronic disease management",
        "Wellness programs included",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Insurance Plans
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for you and your family. Affordable, comprehensive, and designed for Sri Lankan families.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-elegant scale-105' : 'border-2'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Additional <span className="gradient-text">Services</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-elegant transition-all">
                <CardContent className="p-8">
                  <Stethoscope className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Telemedicine Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with qualified doctors 24/7 through our digital platform. Get medical advice, prescriptions, and consultations from the comfort of your home.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Video & audio consultations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Digital prescriptions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Medical records access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-elegant transition-all">
                <CardContent className="p-8">
                  <Phone className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">24/7 Support Helpline</h3>
                  <p className="text-muted-foreground mb-4">
                    Our dedicated customer support team is available round the clock to assist you with claims, queries, and emergencies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Multilingual support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Emergency assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Claim tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Our insurance advisors are here to help you find the perfect plan for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">Contact an Advisor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+94112345678">Call: +94 11 234 5678</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
