
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VehicleCard from "@/components/VehicleCard";
import { featuredVehicles } from "@/data/vehicles";
import heroImage from "@/assets/hero-dealership.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
              Find Your
              <span className="text-gradient block">Dream Car</span>
            </h1>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Discover premium vehicles with exceptional quality, competitive pricing, 
              and unmatched customer service. Your perfect car awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inventory">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Browse Inventory
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/finance">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Get Financing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Certified Quality</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium vehicles, 
              each offering exceptional performance and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/inventory">
              <Button size="lg" className="btn-hero">
                View All Inventory
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Get Pre-Approved in Minutes
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Quick and easy financing options with competitive rates. 
            Start your application today and drive home tomorrow.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/finance">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Apply for Financing
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Speak with Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Premium Auto?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive automotive services to ensure your complete satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Certified Pre-Owned</h3>
                <p className="text-muted-foreground">
                  Every used vehicle undergoes rigorous 150-point inspection 
                  and comes with comprehensive warranty coverage.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Service</h3>
                <p className="text-muted-foreground">
                  Our experienced team provides personalized service 
                  and expert guidance throughout your car buying journey.
                </p>
              </CardContent>
            </Card>

            <Card className="vehicle-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Customer First</h3>
                <p className="text-muted-foreground">
                  We prioritize your satisfaction with transparent pricing, 
                  flexible financing, and exceptional after-sales support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
