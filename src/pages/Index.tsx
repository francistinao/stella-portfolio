
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeLogos from '@/components/MarqueeLogos';
import About from '@/components/About';
import Features from '@/components/Features';
import ResearchPublications from '@/components/ResearchPublications';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <MarqueeLogos />
      <About />
      <Features />
      <ResearchPublications />
      <Demo />
      <Footer />
    </div>
  );
};

export default Index;
