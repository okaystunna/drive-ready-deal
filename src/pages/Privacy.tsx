import { Shield, Eye, Lock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-secondary-foreground/90">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> December 15, 2024
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-primary" size={24} />
                Privacy Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Premium Auto ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or interact with us 
                in any way. Please read this privacy policy carefully.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 text-primary" size={24} />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Driver's license information and other identification documents</li>
                  <li>Financial information for financing applications</li>
                  <li>Vehicle preferences and purchase history</li>
                  <li>Communication preferences and marketing consents</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Information Collected Automatically</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP address, browser type, and operating system</li>
                  <li>Pages visited, time spent on site, and referral sources</li>
                  <li>Device information and mobile device identifiers</li>
                  <li>Location data (with your permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Information from Third Parties</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Credit reports and financial information from credit bureaus</li>
                  <li>Vehicle history reports and valuation data</li>
                  <li>Social media profile information (with your consent)</li>
                  <li>Marketing and advertising partners</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 text-primary" size={24} />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Process vehicle sales, financing applications, and service requests</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and maintain security</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and customer behavior</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with business operations</li>
                <li><strong>Financial Partners:</strong> Lenders and financing companies for loan applications</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Consent:</strong> When you explicitly agree to share your information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 text-primary" size={24} />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and data centers</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation on processing of your data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand site usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Third-Party Links and Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites or services. We are not 
                responsible for the privacy practices of these external sites. We encourage you 
                to review their privacy policies before providing any personal information.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If we become 
                aware that we have collected personal information from a child under 13, we 
                will take steps to delete such information.
              </p>
            </CardContent>
          </Card>

          {/* Policy Changes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating the 
                "Last Updated" date. Your continued use of our services after any changes 
                constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Premium Auto</strong></p>
                <p>123 Auto Lane, City, ST 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: privacy@premiumauto.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;