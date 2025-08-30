import { useState } from "react";
import { Calculator, DollarSign, CreditCard, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Finance = () => {
  const [loanAmount, setLoanAmount] = useState([50000]);
  const [downPayment, setDownPayment] = useState([10000]);
  const [interestRate, setInterestRate] = useState([4.5]);
  const [loanTerm, setLoanTerm] = useState([60]);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0] - downPayment[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const months = loanTerm[0];
    
    if (monthlyRate === 0) return principal / months;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                          (Math.pow(1 + monthlyRate, months) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm[0];
  const totalInterest = totalPayment - (loanAmount[0] - downPayment[0]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Auto Financing Made Simple
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Get pre-approved in minutes with competitive rates and flexible terms. 
              Calculate your payments and start your application today.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Loan Calculator */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 text-primary" size={24} />
                  Loan Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vehicle Price: {formatCurrency(loanAmount[0])}
                  </label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    min={10000}
                    max={200000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$10,000</span>
                    <span>$200,000</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Down Payment: {formatCurrency(downPayment[0])}
                  </label>
                  <Slider
                    value={downPayment}
                    onValueChange={setDownPayment}
                    min={0}
                    max={loanAmount[0] * 0.5}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$0</span>
                    <span>{formatCurrency(loanAmount[0] * 0.5)}</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Interest Rate: {interestRate[0]}%
                  </label>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    min={1.9}
                    max={12.9}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1.9%</span>
                    <span>12.9%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Loan Term: {loanTerm[0]} months
                  </label>
                  <Slider
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    min={24}
                    max={84}
                    step={12}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>24 months</span>
                    <span>84 months</span>
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monthly Payment:</span>
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Payment:</span>
                    <span>{formatCurrency(totalPayment)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Interest:</span>
                    <span>{formatCurrency(totalInterest)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Financing Application */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 text-primary" size={24} />
                  Pre-Approval Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Get pre-approved in minutes with our secure online application. 
                  No impact to your credit score for pre-qualification.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="input-premium" />
                  <Input placeholder="Last Name" className="input-premium" />
                </div>

                <Input placeholder="Email Address" type="email" className="input-premium" />
                <Input placeholder="Phone Number" type="tel" className="input-premium" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="ZIP Code" className="input-premium" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Employment Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">Employed</SelectItem>
                      <SelectItem value="self-employed">Self-Employed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Annual Income" className="input-premium" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Credit Score Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent (750+)</SelectItem>
                      <SelectItem value="good">Good (700-749)</SelectItem>
                      <SelectItem value="fair">Fair (650-699)</SelectItem>
                      <SelectItem value="poor">Poor (600-649)</SelectItem>
                      <SelectItem value="very-poor">Very Poor (&lt;600)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-xs text-muted-foreground">
                    I consent to Premium Auto and its affiliated lenders obtaining my credit report 
                    and contacting me about financing options. I understand this is not an application 
                    for credit and no impact to my credit score for pre-qualification.
                  </label>
                </div>

                <Button className="w-full btn-hero text-lg py-4">
                  Get Pre-Approved Now
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 text-primary" size={24} />
                  Why Finance With Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="text-primary mt-1" size={16} />
                    <div>
                      <h4 className="font-semibold">Competitive Rates</h4>
                      <p className="text-sm text-muted-foreground">
                        Starting as low as 1.9% APR for qualified buyers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CreditCard className="text-primary mt-1" size={16} />
                    <div>
                      <h4 className="font-semibold">Flexible Terms</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose from 24 to 84-month financing options
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1" size={16} />
                    <div>
                      <h4 className="font-semibold">Quick Approval</h4>
                      <p className="text-sm text-muted-foreground">
                        Get approved in minutes, not hours or days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="text-primary mt-1" size={16} />
                    <div>
                      <h4 className="font-semibold">All Credit Welcomed</h4>
                      <p className="text-sm text-muted-foreground">
                        We work with all credit types, including first-time buyers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trade-In Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Trade-In Your Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground mb-6">
                Get an instant estimate for your current vehicle and use it as a down payment. 
                Our trade-in process is simple, fair, and transparent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Input placeholder="Vehicle Year" className="input-premium" />
                <Input placeholder="Make" className="input-premium" />
                <Input placeholder="Model" className="input-premium" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Input placeholder="Mileage" className="input-premium" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="btn-hero text-lg px-8 py-4">
                Get Trade-In Value
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Finance;