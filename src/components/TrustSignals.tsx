
import { Card, CardContent } from "@/components/ui/card";

export const TrustSignals = () => {
  return (
    <section id="trust-signals" className="py-16 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white text-glow">
            Trusted by Organizations Worldwide
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="w-full h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="w-32 h-8 bg-gray-700/30 rounded flex items-center justify-center">
                <span className="text-gray-400 font-medium">Partner {i+1}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="glass-card border-white/5">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-gradient-primary bg-aurora-gradient bg-clip-text text-transparent">98%</p>
                  <p className="text-gray-300 mt-2">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gradient-primary bg-aurora-gradient bg-clip-text text-transparent">5M+</p>
                  <p className="text-gray-300 mt-2">Facts Verified Daily</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gradient-primary bg-aurora-gradient bg-clip-text text-transparent">200k+</p>
                  <p className="text-gray-300 mt-2">Active Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
