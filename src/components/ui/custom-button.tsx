
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
          "relative inline-flex items-center justify-center px-8 py-4 font-medium text-white rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400/50",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 opacity-80"></span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse-slow opacity-0 hover:opacity-100 transition-opacity"></span>
        <span className="relative z-10 flex items-center">{children}</span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
