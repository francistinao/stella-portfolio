import React from 'react';
import { Trophy } from "lucide-react";

const MarqueeLogos = () => {
  const logos = [
    { 
      src: '/logos/bpi.png', 
      alt: 'BPI-DOST Innovation Awards', 
      width: 450 
    },
    { 
      src: '/logos/psc.png', 
      alt: 'Philippine Startup Challenge 9', 
      width: 450 
    },
    { 
      src: '/logos/h4h.png', 
      alt: 'Hack4Health', 
      width: 400 
    },
    { 
      src: '/logos/amic.png', 
      alt: 'Alliance Medical Innovation Challenge', 
      width: 390 
    },
    { 
      src: '/logos/showdown.png', 
      alt: 'Startup Showdown: CSU Innovation Challenge 2024', 
      width: 450 
    },
  ];

  return (
    <section className="relative py-16 bg-stella-black overflow-hidden mt-64">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-stella-green mr-3"></div>
            <Trophy className="h-5 w-5 text-stella-green mr-1" />
            <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Recognition</span>
            <div className="h-px w-8 bg-stella-green ml-3"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 title-font">Have Seen and Recognized On</h2>
        </div>
      </div>

      {/* Single Marquee container */}
      <div className="relative w-full opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-stella-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-stella-black to-transparent"></div>
        
        {/* Single marquee - moves right to left */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-left flex items-center py-4">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="mx-10 p-4 rounded-lg flex items-center justify-center hover:shadow-lg hover:transition-all duration-300" 
                style={{ height: '500px' }} 
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-auto w-auto max-h-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ maxWidth: `${logo.width}px` }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeLogos;
