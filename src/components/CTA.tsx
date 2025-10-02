import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Protect Your Family's Future?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get started today with BIMA and experience affordable, accessible healthcare coverage that you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <Link to="/products">
                View Our Plans <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
              <a href="tel:+94112345678">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Network Providers</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">48hrs</div>
              <div className="text-sm text-primary-foreground/80">Claim Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
