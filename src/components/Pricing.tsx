
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  yearlyPrice: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
};

const plans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Basic verification for individual users",
    price: "$0",
    yearlyPrice: "$0",
    features: [
      "10 fact checks per day",
      "Basic verification",
      "Browser extension",
      "Web access"
    ],
    buttonText: "Get Started"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Unlimited scans for power users",
    price: "$12",
    yearlyPrice: "$9",
    popular: true,
    features: [
      "Unlimited fact checks",
      "Priority processing",
      "Advanced verification metrics",
      "Email alerts for trending misinformation",
      "Source verification"
    ],
    buttonText: "Start Free Trial"
  },
  {
    id: "team",
    name: "Team",
    description: "Enterprise-grade tools for organizations",
    price: "$49",
    yearlyPrice: "$39",
    features: [
      "Everything in Pro",
      "Team dashboard & analytics",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "Team training"
    ],
    buttonText: "Contact Sales"
  }
];

export const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
  
  const handlePlanSelection = (plan: PricingPlan) => {
    toast({
      title: `Selected ${plan.name} Plan`,
      description: `You've selected the ${plan.name} plan. ${plan.id === 'free' ? 'Get started now!' : 'Please complete your purchase.'}`,
      variant: "default",
    });
  };
  
  return (
    <section className="py-20 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white text-glow">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for you, from basic verification to advanced analytics.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              className={`px-4 py-2 rounded-l-full ${
                billingInterval === "monthly" 
                  ? "bg-clarityx-purple text-white" 
                  : "bg-gray-800 text-gray-300"
              }`}
              onClick={() => setBillingInterval("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-r-full ${
                billingInterval === "yearly" 
                  ? "bg-clarityx-purple text-white" 
                  : "bg-gray-800 text-gray-300"
              }`}
              onClick={() => setBillingInterval("yearly")}
            >
              Yearly <span className="text-xs opacity-75">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border ${
                plan.popular 
                  ? "border-clarityx-purple/50 glass-card relative overflow-hidden" 
                  : "border-gray-800 bg-gray-900/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-clarityx-purple text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className={`text-2xl ${plan.popular ? "text-white" : "text-gray-100"}`}>{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {billingInterval === "monthly" ? plan.price : plan.yearlyPrice}
                  </span>
                  {" "}
                  <span className="text-gray-400">
                    /{billingInterval}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 mt-0.5 ${plan.popular ? "text-clarityx-purple" : "text-green-500"}`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-clarityx-purple hover:bg-clarityx-purple/90" 
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onClick={() => handlePlanSelection(plan)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
