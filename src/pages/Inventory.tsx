import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [makeFilter, setMakeFilter] = useState("all");
  const [conditionFilter, setConditionFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-low");

  // Get unique makes for filter
  const uniqueMakes = [...new Set(vehicles.map(v => v.make))].sort();
  const uniqueYears = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a);

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      const matchesSearch = searchTerm === "" || 
        `${vehicle.make} ${vehicle.model} ${vehicle.year}`.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMake = makeFilter === "all" || vehicle.make === makeFilter;
      const matchesCondition = conditionFilter === "all" || vehicle.condition === conditionFilter;
      const matchesYear = yearFilter === "all" || vehicle.year.toString() === yearFilter;
      
      let matchesPrice = true;
      if (priceFilter !== "all") {
        switch (priceFilter) {
          case "under-50k":
            matchesPrice = vehicle.price < 50000;
            break;
          case "50k-80k":
            matchesPrice = vehicle.price >= 50000 && vehicle.price < 80000;
            break;
          case "80k-120k":
            matchesPrice = vehicle.price >= 80000 && vehicle.price < 120000;
            break;
          case "over-120k":
            matchesPrice = vehicle.price >= 120000;
            break;
        }
      }

      return matchesSearch && matchesMake && matchesCondition && matchesYear && matchesPrice;
    });

    // Sort vehicles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "year-new":
          return b.year - a.year;
        case "year-old":
          return a.year - b.year;
        case "mileage-low":
          return a.mileage - b.mileage;
        case "mileage-high":
          return b.mileage - a.mileage;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, makeFilter, conditionFilter, yearFilter, priceFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setMakeFilter("all");
    setConditionFilter("all");
    setYearFilter("all");
    setPriceFilter("all");
    setSortBy("price-low");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Inventory</h1>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl">
            Browse our extensive collection of premium vehicles. Use the filters below to find your perfect match.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search by make, model, or year..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 input-premium"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
              <Select value={makeFilter} onValueChange={setMakeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Makes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Makes</SelectItem>
                  {uniqueMakes.map(make => (
                    <SelectItem key={make} value={make}>{make}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={conditionFilter} onValueChange={setConditionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Conditions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Used">Used</SelectItem>
                  <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
                </SelectContent>
              </Select>

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {uniqueYears.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-50k">Under $50,000</SelectItem>
                  <SelectItem value="50k-80k">$50,000 - $80,000</SelectItem>
                  <SelectItem value="80k-120k">$80,000 - $120,000</SelectItem>
                  <SelectItem value="over-120k">Over $120,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                  <SelectItem value="mileage-high">Mileage: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={clearFilters} className="btn-premium">
                <SlidersHorizontal size={16} className="mr-2" />
                Clear Filters
              </Button>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm("")}>
                  Search: {searchTerm} ×
                </Badge>
              )}
              {makeFilter !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setMakeFilter("all")}>
                  Make: {makeFilter} ×
                </Badge>
              )}
              {conditionFilter !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setConditionFilter("all")}>
                  Condition: {conditionFilter} ×
                </Badge>
              )}
              {yearFilter !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setYearFilter("all")}>
                  Year: {yearFilter} ×
                </Badge>
              )}
              {priceFilter !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setPriceFilter("all")}>
                  Price: {priceFilter} ×
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredVehicles.length} of {vehicles.length} vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        {filteredVehicles.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-muted-foreground mb-4">
              <Filter size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
              <p>Try adjusting your search criteria or clearing the filters.</p>
            </div>
            <Button onClick={clearFilters} className="btn-hero mt-4">
              Clear All Filters
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;