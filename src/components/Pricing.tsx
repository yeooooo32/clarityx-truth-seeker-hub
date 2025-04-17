
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { GlowButton } from "./ui/custom-button";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  yearlyPrice: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "premium" | "free";
};

const plans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Basic fact-checking tools for everyone",
    price: "$0",
    yearlyPrice: "$0",
    features: [
      "Basic real-time claim verification (5 claims/month)",
      "Simple True/False verdict with brief evidence",
      "Track regional misinformation trends",
      "Compare claims against limited verified sources"
    ],
    buttonText: "Get Started Free",
    buttonVariant: "free"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Advanced tools for professionals",
    price: "$20",
    yearlyPrice: "$17",
    popular: true,
    features: [
      "Real-time verification (50 claims/month)",
      "Detailed verdict with in-depth evidence",
      "Track misinformation with advanced analytics",
      "Wide range of verified source comparison",
      "Camera-based verification (ClarityX Lens)",
      "High-accuracy deepfake detection",
      "Misinformation leaderboard with rewards",
      "Real-time Scout alerts while browsing"
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "default"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Comprehensive tools for organizations",
    price: "$50",
    yearlyPrice: "$42",
    features: [
      "Unlimited claim verification with premium sources",
      "Comprehensive verdicts with advanced context",
      "Global tracking with personalized insights",
      "Most comprehensive source validation",
      "Advanced camera-based detection for all content",
      "Premium deepfake detection with higher accuracy",
      "Enhanced leaderboard with exclusive rewards",
      "Enhanced Scout alerts with better accuracy",
      "Mobile deepfake detection",
      "Voice-activated fact-checking"
    ],
    buttonText: "Join Premium",
    buttonVariant: "premium"
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
                  ? "bg-gray-700 text-white" 
                  : "bg-gray-800 text-gray-300"
              }`}
              onClick={() => setBillingInterval("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-r-full ${
                billingInterval === "yearly" 
                  ? "bg-gray-700 text-white" 
                  : "bg-gray-800 text-gray-300"
              }`}
              onClick={() => setBillingInterval("yearly")}
            >
              Yearly <span className="text-xs opacity-75">Save 15%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border ${
                plan.popular 
                  ? "border-gray-500/50 glass-card relative overflow-hidden" 
                  : "border-gray-800 bg-gray-900/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gray-700 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
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
                  {plan.id !== "free" && (
                    <span className="text-gray-400">
                      /per month
                    </span>
                  )}
                  {plan.id === "free" && (
                    <span className="text-gray-400">
                      /forever
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 mt-0.5 ${plan.popular ? "text-white" : "text-green-500"}`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                {plan.buttonVariant === "free" && (
                  <Button 
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={() => handlePlanSelection(plan)}
                  >
                    {plan.buttonText}
                  </Button>
                )}
                {plan.buttonVariant === "default" && (
                  <GlowButton 
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-600"
                    onClick={() => handlePlanSelection(plan)}
                  >
                    {plan.buttonText}
                  </GlowButton>
                )}
                {plan.buttonVariant === "premium" && (
                  <Button 
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white"
                    onClick={() => handlePlanSelection(plan)}
                  >
                    {plan.buttonText}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
