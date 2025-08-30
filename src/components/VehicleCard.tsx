import { Link } from "react-router-dom";
import { MapPin, Fuel, Calendar, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
  location: string;
  condition: "New" | "Used" | "Certified Pre-Owned";
  features: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  return (
    <div className="vehicle-card group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant={vehicle.condition === "New" ? "default" : "secondary"}
            className="bg-primary text-primary-foreground"
          >
            {vehicle.condition}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="font-bold text-foreground text-lg">
            {formatPrice(vehicle.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin size={14} className="mr-1" />
            {vehicle.location}
          </div>
        </div>

        {/* Vehicle Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Gauge size={16} className="mr-2 text-primary" />
            {formatMileage(vehicle.mileage)} miles
          </div>
          <div className="flex items-center text-muted-foreground">
            <Fuel size={16} className="mr-2 text-primary" />
            {vehicle.fuelType}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar size={16} className="mr-2 text-primary" />
            {vehicle.year}
          </div>
          <div className="flex items-center text-muted-foreground">
            <span className="text-primary mr-2">⚙</span>
            {vehicle.transmission}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {vehicle.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{vehicle.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link to={`/vehicle/${vehicle.id}`} className="flex-1">
            <Button variant="default" className="w-full btn-hero">
              View Details
            </Button>
          </Link>
          <Button variant="outline" className="btn-premium">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;