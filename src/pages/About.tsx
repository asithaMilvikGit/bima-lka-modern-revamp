import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring affordable and accessible solutions.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging technology to democratize healthcare and insurance across Sri Lanka.",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and exceptional service.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality products and services that exceed expectations.",
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
              About BIMA Sri Lanka
            </h1>
            <p className="text-xl text-muted-foreground">
              Transforming healthcare accessibility across Sri Lanka through innovative, affordable insurance solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6 text-center">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              BIMA is dedicated to protecting the future of every family in Sri Lanka by providing affordable, accessible healthcare and insurance solutions. We believe that quality healthcare should be a right, not a privilege, and we're committed to making it accessible to millions across emerging markets.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be Sri Lanka's most trusted healthcare and insurance partner, serving millions of families with innovative, technology-driven solutions that bridge the gap between quality care and affordability.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    We're committed to continuous innovation, exceptional customer service, and building a comprehensive ecosystem of healthcare services that cater to the unique needs of Sri Lankan families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-display font-bold gradient-text mb-2">1.5M+</div>
                <div className="text-muted-foreground">Insurance Customers</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-display font-bold gradient-text mb-2">Rs.2B+</div>
                <div className="text-muted-foreground">Claims Paid (2022)</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-display font-bold gradient-text mb-2">3M+</div>
                <div className="text-muted-foreground">Beneficiaries</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-display font-bold gradient-text mb-2">500+</div>
                <div className="text-muted-foreground">Network Providers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Local Presence, <span className="gradient-text">Global Standards</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With offices across Sri Lanka and partnerships with leading healthcare providers, we combine local expertise with international best practices to deliver world-class service to our customers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Nationwide Coverage</h3>
                  <p className="text-sm text-muted-foreground">Service centers in all major cities across Sri Lanka</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Licensed & Regulated</h3>
                  <p className="text-sm text-muted-foreground">Fully licensed by insurance regulatory authorities</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Trusted Partners</h3>
                  <p className="text-sm text-muted-foreground">Partnered with leading underwriters and hospitals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
