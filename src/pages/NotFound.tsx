import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <Card className="vehicle-card max-w-2xl mx-auto text-center">
          <CardContent className="p-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-6xl font-bold text-primary">404</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oops! The page you're looking for seems to have driven off the lot. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="btn-hero">
                  <Home className="mr-2" size={20} />
                  Return Home
                </Button>
              </Link>
              <Link to="/inventory">
                <Button variant="outline" className="btn-premium">
                  <Search className="mr-2" size={20} />
                  Browse Inventory
                </Button>
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Call us at{" "}
                <a href="tel:5551234567" className="text-primary hover:underline">
                  (555) 123-4567
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
