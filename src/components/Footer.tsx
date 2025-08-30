import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">PA</span>
              </div>
              <div>
                <div className="font-bold text-xl">Premium Auto</div>
                <div className="text-xs text-secondary-foreground/70">Luxury Car Dealership</div>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Your trusted partner in finding the perfect vehicle. We provide premium cars, 
              competitive financing, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/finance" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary-foreground/80">Vehicle Sales</li>
              <li className="text-secondary-foreground/80">Auto Financing</li>
              <li className="text-secondary-foreground/80">Trade-In Appraisal</li>
              <li className="text-secondary-foreground/80">Extended Warranties</li>
              <li className="text-secondary-foreground/80">Service & Maintenance</li>
              <li className="text-secondary-foreground/80">Parts & Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  123 Auto Lane<br />
                  City, ST 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">info@premiumauto.com</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-secondary-foreground/80">
              <p className="font-semibold mb-1">Business Hours:</p>
              <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 11:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/60">
              © 2024 Premium Auto. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="text-secondary-foreground/60">|</span>
              <span className="text-secondary-foreground/60">
                Licensed Dealer #12345
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;