"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 500;
      const transform = scrollPosition / 10;
      
      heroRef.current.style.opacity = Math.max(opacity, 0.1).toString();
      heroRef.current.style.transform = `translateY(${transform}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat py-24 text-white"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/464334/pexels-photo-464334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20"></div>
      <div ref={heroRef} className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Modern Solutions for
          <span className="block text-green-400">Modern Farming</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
          AgroAssist provides tools and resources to help farmers increase productivity, 
          manage resources efficiently, and adopt sustainable farming practices.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button 
            size="lg"
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce rounded-full bg-white/20 p-2">
          <svg 
            className="h-6 w-6 text-white" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}