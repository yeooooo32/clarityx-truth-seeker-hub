import { useState } from "react";
import { Download } from "lucide-react";
import { AppDownloadModal } from "./AppDownloadModal";
import { GlowButton } from "@/components/ui/custom-button";
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 inline-block">
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>New: Enhanced Fact-Checking for Social Media</span>
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl mb-6 text-glow bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 animate-fade-in-up font-light lg:text-5xl">
          Combat Misinformation in Real-Time.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{
        animationDelay: "0.2s"
      }}>
          ClarityX lets you instantly verify headlines, posts, and links — powered by AI and truth.
        </p>
        
        <div className="flex justify-center animate-fade-in-up" style={{
        animationDelay: "0.4s"
      }}>
          <GlowButton onClick={() => setIsModalOpen(true)} className="px-8 py-6 text-lg bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 shadow-xl border border-white/5">
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </GlowButton>
        </div>
        
        <div className="mt-16 flex justify-center animate-fade-in-up" style={{
        animationDelay: "0.6s"
      }}>
          <div className="glass p-4 rounded-xl flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center border-2 border-gray-800">
                  <span className="text-xs font-medium text-white">{i}</span>
                </div>)}
            </div>
            <div className="text-sm text-gray-300">
              <p><span className="text-white font-medium">1,000+</span> journalists & analysts use ClarityX</p>
            </div>
          </div>
        </div>
      </div>
      
      <AppDownloadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>;
};