
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-clarityx-purple to-clarityx-blue rounded-full transition-all duration-300 shadow-lg hover:shadow-clarityx-purple/30 hover:-translate-y-1 animate-pulse-glow focus:outline-none focus:ring-2 focus:ring-clarityx-purple/50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
