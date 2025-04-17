
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Globe, Lock } from "lucide-react";

type FeatureCard = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const features: FeatureCard[] = [
  {
    icon: <Shield className="w-10 h-10 text-clarityx-purple" />,
    title: "Real-time Verification",
    description: "Instantly check facts as you browse with our powerful AI engine."
  },
  {
    icon: <Zap className="w-10 h-10 text-clarityx-blue" />,
    title: "Lightning Fast",
    description: "Get results in milliseconds, not minutes. Don't wait to verify."
  },
  {
    icon: <Globe className="w-10 h-10 text-clarityx-cyan" />,
    title: "Global Coverage",
    description: "Analyze content across languages, regions, and platforms."
  },
  {
    icon: <Lock className="w-10 h-10 text-green-500" />,
    title: "Privacy First",
    description: "Your browsing data stays private. We only verify what you ask us to."
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white text-glow">
            How ClarityX Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Advanced AI that brings truth to your fingertips, whenever you need it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass border-white/5 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clarityx-purple via-clarityx-blue to-clarityx-cyan" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white/5 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-6 glass border-white/5 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered Truth Detection</h3>
              <p className="text-gray-300 mb-4">
                Our proprietary machine learning algorithms analyze millions of data points to verify claims in real-time. ClarityX doesn't just match text — it understands context, detects subtle manipulation, and identifies sources of misinformation.
              </p>
              <ul className="space-y-2">
                {[
                  "Cross-references against verified databases",
                  "Detects image and video manipulation",
                  "Analyzes source credibility",
                  "Provides confidence scores for verification"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clarityx-purple"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-black/30 p-4 rounded-lg border border-white/5">
              <div className="aspect-video overflow-hidden rounded-lg flex items-center justify-center">
                {/* Placeholder for a demo video or animation */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-clarityx-purple to-clarityx-blue flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">Watch how ClarityX works</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
