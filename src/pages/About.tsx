import { Users, Award, Shield, Heart, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Premium Auto
            </h1>
            <p className="text-xl text-secondary-foreground/90">
              For over 25 years, we've been connecting customers with their perfect vehicles 
              through exceptional service, quality inventory, and transparent business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1999, Premium Auto began as a small family-owned dealership with a simple mission: 
                  to provide customers with premium vehicles and unmatched service. What started as a modest 
                  operation has grown into one of the region's most trusted automotive destinations.
                </p>
                <p>
                  We believe that buying a car should be an exciting experience, not a stressful one. 
                  That's why we've built our reputation on transparency, integrity, and putting our 
                  customers' needs first. Every member of our team is dedicated to helping you find 
                  the perfect vehicle at the right price.
                </p>
                <p>
                  Today, we're proud to offer an extensive inventory of luxury and premium vehicles, 
                  competitive financing options, and comprehensive after-sales support. Our commitment 
                  to excellence has earned us thousands of satisfied customers and numerous industry awards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Vehicles Sold Monthly</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape every customer interaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  We conduct business with honesty, transparency, and ethical practices in every transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We strive for perfection in our vehicle selection, customer service, and overall experience.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Customer Care</h3>
                <p className="text-muted-foreground text-sm">
                  Your satisfaction is our priority. We go above and beyond to exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We're proud to be part of this community and actively support local initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are here to guide you through every step of your car buying journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Michael Johnson</h3>
                <p className="text-primary font-medium mb-2">General Manager</p>
                <p className="text-muted-foreground text-sm">
                  With 20+ years in automotive sales, Michael leads our team with passion and expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">SD</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sarah Davis</h3>
                <p className="text-primary font-medium mb-2">Finance Director</p>
                <p className="text-muted-foreground text-sm">
                  Sarah specializes in finding the perfect financing solution for every customer's needs.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">RM</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Robert Martinez</h3>
                <p className="text-primary font-medium mb-2">Sales Manager</p>
                <p className="text-muted-foreground text-sm">
                  Robert's extensive product knowledge helps customers find their perfect vehicle match.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit our showroom, browse our inventory online, or speak with one of our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/inventory">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Browse Inventory
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Showroom</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Auto Lane<br />
                      Premium District<br />
                      City, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@premiumauto.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">11:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Service Department:</strong> Monday - Friday: 7:00 AM - 6:00 PM, 
                  Saturday: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;