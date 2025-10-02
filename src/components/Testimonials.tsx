import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Fernando",
    location: "Colombo",
    rating: 5,
    text: "BIMA has been a lifesaver for our family. The cashless claims process is so simple and the customer service is excellent. Highly recommended!",
  },
  {
    name: "Rajesh Kumar",
    location: "Kandy",
    rating: 5,
    text: "I was able to get my entire family covered at an affordable price. The telemedicine service is particularly helpful when we need quick consultations.",
  },
  {
    name: "Nimesha Silva",
    location: "Galle",
    rating: 5,
    text: "Best insurance company in Sri Lanka! They processed my claim within 48 hours. Very professional and trustworthy service.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied families across Sri Lanka who trust BIMA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-fade-in-up hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
