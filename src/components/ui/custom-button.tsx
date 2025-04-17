
import { cn } from "@/lib/utils";
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
          "relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-gray-700 to-gray-800 rounded-full transition-all duration-300 shadow-lg hover:shadow-gray-500/30 hover:-translate-y-1 animate-slow-pulse-glow focus:outline-none focus:ring-2 focus:ring-gray-400/50",
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
