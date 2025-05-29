
import React, { useEffect } from 'react';
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Initialize AOS library
    const AOS = (window as any).AOS;
    if (AOS) {
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-stella-black pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(93,232,87,0.15),transparent_50%)]"></div>
      
      {/* Circular Rings Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-stella-green rounded-full"
            style={{ 
              width: `${i * 160}px`, 
              height: `${i * 160}px`,
              opacity: 1 - (i * 0.15),
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-20 pb-12" data-aos="fade-up">
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-12 bg-stella-green mr-4"></div>
            <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Brain Lesion Detection</span>
            <div className="h-px w-12 bg-stella-green ml-4"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Empowering</span>
            <span className="block text-stella-green">Stroke Diagnosis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Revolutionizing Brain Lesion Detection with AI Precision
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-stella-green text-black hover:bg-opacity-90 transition-all hover:scale-105 px-6 py-6 text-lg"
              onClick={() => window.location.href = 'mailto:francisjtinao@gmail.com?subject=STELLA.ai | Requesting for System Demonstration'}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Request a Demo
            </Button>
            <Button 
              variant="outline"
              className="border-stella-green text-stella-green hover:bg-stella-green hover:bg-opacity-10 transition-all px-6 py-6 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 relative" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute inset-0 bg-stella-green opacity-10 blur-3xl rounded-full"></div>
          <div className="scanner-effect relative glass-panel rounded-lg overflow-hidden highlight-ring animate-float">
            <img 
              src="/uploads/71131acc-ee90-44b7-a082-02243e1719da.png" 
              alt="STELLA.ai Interface with Brain CT Scan" 
              className="w-full shadow-2xl rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
