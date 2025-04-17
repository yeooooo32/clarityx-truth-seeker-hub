
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Apple, Monitor, Smartphone } from "lucide-react";

interface AppDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AppDownloadModal = ({ open, onOpenChange }: AppDownloadModalProps) => {
  const [platform, setPlatform] = useState<string>("desktop");
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-black/80 backdrop-blur-xl border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-white">Download ClarityX</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Choose your platform to start combating misinformation today.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="desktop" value={platform} onValueChange={setPlatform} className="mt-4">
          <TabsList className="grid grid-cols-3 bg-gray-800/50">
            <TabsTrigger value="desktop" className="data-[state=active]:bg-clarityx-purple data-[state=active]:text-white">
              <Monitor className="h-4 w-4 mr-2" />
              Desktop
            </TabsTrigger>
            <TabsTrigger value="ios" className="data-[state=active]:bg-clarityx-purple data-[state=active]:text-white">
              <Apple className="h-4 w-4 mr-2" />
              iOS
            </TabsTrigger>
            <TabsTrigger value="android" className="data-[state=active]:bg-clarityx-purple data-[state=active]:text-white">
              <Smartphone className="h-4 w-4 mr-2" />
              Android
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="desktop" className="space-y-4 mt-4">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-white mb-2">Browser Extension</h4>
              <p className="text-gray-300 text-sm mb-3">Verify content as you browse with our powerful extension.</p>
              <div className="flex gap-2">
                <Button className="w-full bg-clarityx-blue hover:bg-clarityx-blue/90">Chrome</Button>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">Firefox</Button>
              </div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-white mb-2">Desktop App</h4>
              <p className="text-gray-300 text-sm mb-3">Full-featured desktop experience for power users.</p>
              <div className="flex gap-2">
                <Button className="w-full bg-clarityx-purple hover:bg-clarityx-purple/90">macOS</Button>
                <Button className="w-full bg-clarityx-purple hover:bg-clarityx-purple/90">Windows</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ios" className="space-y-4 mt-4">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-white mb-2">iOS App</h4>
              <p className="text-gray-300 text-sm mb-3">Verify content on the go with our powerful iOS app.</p>
              <Button className="w-full bg-black hover:bg-gray-900 flex items-center justify-center gap-2">
                <Apple className="h-5 w-5" />
                Download on App Store
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="android" className="space-y-4 mt-4">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-white mb-2">Android App</h4>
              <p className="text-gray-300 text-sm mb-3">Verify content on the go with our powerful Android app.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Get it on Google Play
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="sm:justify-start border-t border-gray-800 pt-4 gap-2 flex flex-col sm:flex-row">
          <Button 
            variant="outline" 
            className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
            onClick={() => onOpenChange(false)}
          >
            Maybe Later
          </Button>
          <Button 
            className="bg-gradient-to-r from-clarityx-purple to-clarityx-blue animate-pulse-glow"
            onClick={() => {
              // Handle download logic based on platform
              onOpenChange(false);
            }}
          >
            Download Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
