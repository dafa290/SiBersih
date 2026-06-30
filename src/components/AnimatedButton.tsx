"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    
    // Base styles for all buttons
    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";
    
    // Variant styles
    const variants = {
      primary: "bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]",
      secondary: "bg-zinc-800 text-white hover:bg-zinc-700 shadow-md",
      outline: "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/30",
      ghost: "bg-transparent text-white hover:bg-white/10"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
