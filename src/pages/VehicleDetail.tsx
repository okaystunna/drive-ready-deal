import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share, Phone, Mail, MapPin, Fuel, Calendar, Gauge, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getVehicleById } from "@/data/vehicles";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = id ? getVehicleById(id) : null;

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/inventory">
            <Button className="btn-hero">Back to Inventory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  const monthlyPayment = Math.round((vehicle.price * 0.0045) + (vehicle.price * 0.015));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/inventory" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Inventory
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Heart size={16} className="mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vehicle Image */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={vehicle.condition === "New" ? "default" : "secondary"}
                    className="bg-primary text-primary-foreground"
                  >
                    {vehicle.condition}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Vehicle Info */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl font-bold">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <MapPin size={16} className="mr-1" />
                      {vehicle.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {formatPrice(vehicle.price)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Est. ${monthlyPayment}/mo
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Key Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center">
                    <Gauge size={16} className="mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Mileage</div>
                      <div className="font-semibold">{formatMileage(vehicle.mileage)}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Fuel size={16} className="mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Fuel Type</div>
                      <div className="font-semibold">{vehicle.fuelType}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Year</div>
                      <div className="font-semibold">{vehicle.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">⚙</span>
                    <div>
                      <div className="text-sm text-muted-foreground">Transmission</div>
                      <div className="font-semibold">{vehicle.transmission}</div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Features & Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Shield size={14} className="mr-2 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Dealer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full btn-hero">
                  <Phone className="mr-2" size={16} />
                  Call (555) 123-4567
                </Button>
                <Button variant="outline" className="w-full btn-premium">
                  <Mail className="mr-2" size={16} />
                  Email Dealer
                </Button>
                <Button variant="outline" className="w-full btn-premium">
                  Schedule Test Drive
                </Button>
                <Separator />
                <div className="text-center text-sm text-muted-foreground">
                  <p>Open Today: 9:00 AM - 8:00 PM</p>
                  <div className="flex items-center justify-center mt-2">
                    <MapPin size={14} className="mr-1" />
                    <span>123 Auto Lane, City, ST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financing Card */}
            <Card>
              <CardHeader>
                <CardTitle>Financing Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    ${monthlyPayment}/mo
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estimated monthly payment
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Loan Amount:</span>
                    <span>{formatPrice(vehicle.price * 0.85)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Down Payment:</span>
                    <span>{formatPrice(vehicle.price * 0.15)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>APR:</span>
                    <span>4.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Term:</span>
                    <span>60 months</span>
                  </div>
                </div>
                <Link to="/finance" className="block">
                  <Button className="w-full btn-hero">
                    Apply for Financing
                  </Button>
                </Link>
                <Button variant="outline" className="w-full btn-premium">
                  Calculate Payment
                </Button>
              </CardContent>
            </Card>

            {/* Trade-In Card */}
            <Card>
              <CardHeader>
                <CardTitle>Trade-In Your Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get an instant estimate for your current vehicle and apply it toward this purchase.
                </p>
                <Button variant="outline" className="w-full btn-premium">
                  Get Trade-In Value
                </Button>
              </CardContent>
            </Card>

            {/* Warranty Card */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Shield size={16} className="mr-2 text-primary" />
                    <span>150-Point Inspection</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="mr-2 text-primary" />
                    <span>30-Day Return Policy</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="mr-2 text-primary" />
                    <span>Extended Warranty Available</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="mr-2 text-primary" />
                    <span>Roadside Assistance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;