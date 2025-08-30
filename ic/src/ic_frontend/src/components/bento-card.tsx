import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "large";
}

export function BentoCard({ children, className, size = "default" }: BentoCardProps) {
  return (
    <div
      className={cn(
        "glassmorphism rounded-2xl p-6 border border-border/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl glow-hover",
        size === "large" && "lg:col-span-2 lg:row-span-2 p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
