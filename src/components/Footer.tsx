import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-display font-bold">B</span>
              </div>
              <span className="text-xl font-display font-bold">BIMA</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Protecting the future of every family in Sri Lanka with affordable, accessible healthcare and insurance solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Health Insurance</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Life Insurance</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Accident Coverage</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">B-Care Package</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Telemedicine Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+94112345678" className="hover:text-primary-foreground transition-colors">+94 11 234 5678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@bima.lk" className="hover:text-primary-foreground transition-colors">info@bima.lk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; 2025 BIMA Sri Lanka. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
