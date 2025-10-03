import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Health Insurance: A Complete Guide for Sri Lankan Families",
      excerpt: "Learn everything you need to know about health insurance in Sri Lanka, from coverage types to claim processes.",
      category: "Education",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "BIMA Expands Telemedicine Services to Remote Areas",
      excerpt: "Our new telemedicine initiative brings quality healthcare to underserved communities across Sri Lanka.",
      category: "News",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "5 Tips for Choosing the Right Insurance Plan",
      excerpt: "Expert advice on selecting the perfect insurance coverage for your family's unique needs and budget.",
      category: "Tips",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "BIMA Achieves Milestone: 1.5 Million Customers Served",
      excerpt: "Celebrating a major milestone as we continue our mission to protect families across Sri Lanka.",
      category: "Milestone",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "New Partnership with Leading Hospital Network",
      excerpt: "BIMA partners with Apollo Hospitals to expand cashless treatment facilities nationwide.",
      category: "Partnership",
      date: "February 20, 2025",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "The Importance of Regular Health Check-ups",
      excerpt: "Why annual health screenings are crucial for early detection and prevention of serious illnesses.",
      category: "Health",
      date: "February 15, 2025",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop",
      featured: false,
    },
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest news, tips, and insights from BIMA
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-elegant transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <Button className="bg-gradient-primary hover:opacity-90 w-fit">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card 
                  key={article.id}
                  className="overflow-hidden border-2 hover:shadow-elegant transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get the latest health tips, insurance updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
