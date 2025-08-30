import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled by Supabase integration
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-foreground/90">
              Have questions? Ready to schedule a test drive? Our team is here to help. 
              Get in touch today and experience the Premium Auto difference.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you find your perfect vehicle. Reach out to us through any of the 
                methods below, and our experienced team will be happy to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="vehicle-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Our Showroom</h3>
                      <p className="text-muted-foreground">
                        123 Auto Lane<br />
                        Premium District<br />
                        City, ST 12345
                      </p>
                      <Button variant="premium" size="sm" className="mt-3">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="vehicle-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-2">
                        Sales: (555) 123-4567<br />
                        Service: (555) 123-4568<br />
                        Parts: (555) 123-4569
                      </p>
                      <Button variant="premium" size="sm">
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="vehicle-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-2">
                        General: info@premiumauto.com<br />
                        Sales: sales@premiumauto.com<br />
                        Service: service@premiumauto.com
                      </p>
                      <Button variant="premium" size="sm">
                        Send Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="vehicle-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: 11:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 text-primary" size={24} />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="input-premium"
                      required
                    />
                    <Input
                      placeholder="Email Address *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="input-premium"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="input-premium"
                    />
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Subject *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="vehicle">Vehicle Information</SelectItem>
                        <SelectItem value="financing">Financing Question</SelectItem>
                        <SelectItem value="service">Service Appointment</SelectItem>
                        <SelectItem value="parts">Parts & Accessories</SelectItem>
                        <SelectItem value="trade-in">Trade-In Appraisal</SelectItem>
                        <SelectItem value="test-drive">Schedule Test Drive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Select 
                    value={formData.preferredContact} 
                    onValueChange={(value) => handleInputChange("preferredContact", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Contact Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="input-premium min-h-[120px]"
                    required
                  />

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" required />
                    <label htmlFor="consent" className="text-xs text-muted-foreground">
                      I consent to being contacted by Premium Auto regarding my inquiry. 
                      I understand that consent is not required as a condition of purchase.
                    </label>
                  </div>

                  <Button type="submit" className="w-full btn-hero text-lg py-4">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="premium" className="p-6 h-auto">
                <div className="text-center">
                  <Phone className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-semibold">Call Sales</div>
                  <div className="text-sm text-muted-foreground">(555) 123-4567</div>
                </div>
              </Button>
              <Button variant="premium" className="p-6 h-auto">
                <div className="text-center">
                  <MessageCircle className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Available 9AM-8PM</div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Interactive map would be integrated here</p>
                <p className="text-sm">123 Auto Lane, City, ST 12345</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;