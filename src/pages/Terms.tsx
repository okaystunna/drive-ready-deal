import { FileText, Scale, AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-secondary-foreground/90">
              Please read these terms carefully before using our website or services. 
              By accessing our site, you agree to be bound by these terms.
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

          {/* Acceptance of Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 text-primary" size={24} />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of the Premium Auto website 
                and services. By accessing or using our website, you agree to be bound by these 
                Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Description of Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Description of Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Premium Auto provides automotive sales, financing, and related services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>New and pre-owned vehicle sales</li>
                <li>Automotive financing and leasing services</li>
                <li>Vehicle appraisal and trade-in services</li>
                <li>Vehicle service and maintenance</li>
                <li>Parts and accessories sales</li>
                <li>Extended warranty and protection plans</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">By using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in fraudulent or deceptive practices</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services</li>
              </ul>
            </CardContent>
          </Card>

          {/* Vehicle Sales Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="mr-2 text-primary" size={24} />
                Vehicle Sales and Financing Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Vehicle Sales</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All vehicle sales are subject to separate purchase agreements</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Vehicle availability is not guaranteed</li>
                  <li>All vehicles are sold "as-is" unless otherwise specified</li>
                  <li>Title and registration fees apply</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Financing Services</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Financing is subject to credit approval</li>
                  <li>APR and terms may vary based on creditworthiness</li>
                  <li>Pre-approval does not guarantee final loan approval</li>
                  <li>All financing is subject to final lender approval</li>
                  <li>Early payment penalties may apply</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Trade-In Services</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Trade-in values are estimates only</li>
                  <li>Final trade-in value determined after physical inspection</li>
                  <li>Trade-in offers valid for limited time</li>
                  <li>Vehicle must be free of liens unless arranged through us</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data Use */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-primary" size={24} />
                Privacy and Data Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your privacy is important to us. Our collection and use of your personal 
                information is governed by our Privacy Policy, which is incorporated by 
                reference into these Terms. By using our services, you consent to our 
                privacy practices as described in our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                All content on our website, including but not limited to text, graphics, logos, 
                images, and software, is the property of Premium Auto or its licensors and is 
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                You may not use, reproduce, distribute, or create derivative works from our 
                content without our express written permission.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 text-primary" size={24} />
                Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Service Disclaimers</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Services provided "as is" without warranties</li>
                  <li>No guarantee of uninterrupted service availability</li>
                  <li>Vehicle information subject to errors and omissions</li>
                  <li>Pricing and availability subject to change</li>
                  <li>Third-party content not endorsed by Premium Auto</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  Premium Auto shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or use, arising from your use of our services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Indemnification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You agree to indemnify, defend, and hold harmless Premium Auto and its 
                employees, agents, and affiliates from any claims, damages, losses, or 
                expenses arising from your use of our services or violation of these Terms.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Governing Law and Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the state where Premium Auto is 
                incorporated, without regard to conflict of law principles. Any disputes 
                arising from these Terms or your use of our services shall be resolved 
                through binding arbitration or in the courts of competent jurisdiction.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend your access to our services 
                at any time, with or without cause or notice. Upon termination, your right 
                to use our services will cease immediately, and any outstanding obligations 
                will remain in effect.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify you 
                of material changes by posting the updated Terms on our website and updating 
                the "Last Updated" date. Your continued use of our services after changes 
                constitutes acceptance of the updated Terms.
              </p>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Severability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable or invalid, 
                that provision will be limited or eliminated to the minimum extent necessary 
                so that these Terms will otherwise remain in full force and effect.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Premium Auto</strong></p>
                <p>123 Auto Lane, City, ST 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: legal@premiumauto.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;