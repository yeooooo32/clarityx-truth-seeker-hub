
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 py-4 px-6 md:px-10 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-clarityx-purple to-clarityx-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CX</span>
          </div>
          <span className="text-xl font-bold text-white">ClarityX</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">Features</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">About</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Pricing</Button>
          <Button className="rounded-full w-10 h-10 p-0 bg-white/10 hover:bg-white/20 border border-white/10">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
