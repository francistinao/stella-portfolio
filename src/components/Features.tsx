
import React, { useEffect } from 'react';
import { BrainCircuit, Layers, Zap, Cpu, Microscope, LineChart, Eye, Lock, Server } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLeft?: boolean;
  delay?: number;
}

const Feature = ({ icon, title, description, isLeft = true, delay = 0 }: FeatureProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`flex ${isMobile ? 'flex-row' : isLeft ? 'flex-row' : 'flex-row-reverse text-right'} gap-4 items-start`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 rounded-full bg-stella-green bg-opacity-10 flex items-center justify-center flex-shrink-0 border border-stella-green border-opacity-30">
        <div className="text-stella-green">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    // Initialize AOS library
    const AOS = (window as any).AOS;
    if (AOS) {
      AOS.refresh();
    }
  }, []);

  return (
    <section id="features" className="py-24 relative bg-black bg-opacity-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-stella-green mr-3"></div>
            <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Key Features</span>
            <div className="h-px w-8 bg-stella-green ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Advanced <span className="text-stella-green">AI Capabilities</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <Feature 
              icon={<Eye className="h-6 w-6" />}
              title="3D Lesion Viewer"
              description="Interactive 3D visualization powered by Three.js, enabling 360° inspection and comprehensive analysis of stroke lesions with wireframe view and axis visualization."
              delay={100}
            />
            <Feature 
              icon={<BrainCircuit className="h-6 w-6" />}
              title="STELLAmulator"
              description="Advanced training simulator for Radiologic Technology students, offering interactive learning experiences in stroke identification and classification."
              delay={200}
            />
            <Feature 
              icon={<Lock className="h-6 w-6" />}
              title="Secure API Architecture"
              description="Robust security with hexadecimal hashing and caching mechanisms to prevent endpoint breaches and ensure data protection."
              delay={300}
            />
          </div>
          
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <img 
              src="./demo.gif" 
              alt="STELLA.ai Brain Scan Interface" 
              className="w-full rounded-lg glass-panel highlight-ring"
            />
            
            <div className="mt-8">
              <div className="glass-panel p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-stella-green">90%</h4>
                    <p className="text-sm text-gray-400">IoU Accuracy</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">U-Net Model</p>
                    <p className="text-xs text-gray-400">Brain Lesion Detection</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-stella-green animate-pulse-glow" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
