import { useState, useEffect } from "react";
import { X, Cookie, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: Date.now(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const updatePreference = (key: keyof typeof preferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="vehicle-card max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Cookie Consent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                  You can customize your preferences or learn more in our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={acceptAll} className="btn-hero">
                    <Check className="mr-2" size={16} />
                    Accept All
                  </Button>
                  <Button onClick={acceptNecessary} variant="outline" className="btn-premium">
                    Necessary Only
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="btn-premium">
                        <Settings className="mr-2" size={16} />
                        Customize
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Cookie Preferences</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Necessary Cookies</h4>
                            <p className="text-sm text-muted-foreground">
                              Required for the website to function properly. Cannot be disabled.
                            </p>
                          </div>
                          <Switch checked={preferences.necessary} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Analytics Cookies</h4>
                            <p className="text-sm text-muted-foreground">
                              Help us understand how visitors interact with our website.
                            </p>
                          </div>
                          <Switch
                            checked={preferences.analytics}
                            onCheckedChange={(value) => updatePreference("analytics", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Marketing Cookies</h4>
                            <p className="text-sm text-muted-foreground">
                              Used to deliver relevant advertisements and track campaign performance.
                            </p>
                          </div>
                          <Switch
                            checked={preferences.marketing}
                            onCheckedChange={(value) => updatePreference("marketing", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Functional Cookies</h4>
                            <p className="text-sm text-muted-foreground">
                              Enable enhanced functionality and personalization.
                            </p>
                          </div>
                          <Switch
                            checked={preferences.functional}
                            onCheckedChange={(value) => updatePreference("functional", value)}
                          />
                        </div>
                        <div className="flex justify-end gap-3 pt-4 border-t">
                          <Button onClick={savePreferences} className="btn-hero">
                            Save Preferences
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={acceptNecessary}
              className="flex-shrink-0"
            >
              <X size={20} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;