
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Download, Menu, X, CalendarDays, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Give time for route change before scrolling
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "py-3 glass-panel" : "py-5 bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-full flex items-center justify-center bg-black">
            <img src="/stella.png" alt="STELLA.ai LOGO" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            STELLA<span className="text-stella-green">.ai</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => handleScrollToSection("about")} 
            className="text-sm font-medium hover:text-stella-green transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleScrollToSection("features")} 
            className="text-sm font-medium hover:text-stella-green transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => handleScrollToSection("demo")} 
            className="text-sm font-medium hover:text-stella-green transition-colors"
          >
            Demo
          </button>
          <Link to="/technology" className="text-sm font-medium hover:text-stella-green transition-colors flex items-center">
            <Cpu className="mr-1 h-4 w-4" />
            Technology
          </Link>
          <Button 
            className="bg-stella-green text-black hover:bg-opacity-90 transition-all hover:scale-105" 
            size="sm"
            onClick={() => window.location.href = 'mailto:francisjtinao@gmail.com?subject=STELLA.ai | Requesting for System Demonstration'}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-stella-green focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 glass-panel py-4 px-6 flex flex-col space-y-4 md:hidden animate-fade-in">
            <button 
              onClick={() => { handleScrollToSection("about"); setIsMobileMenuOpen(false); }} 
              className="text-sm font-medium hover:text-stella-green transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => { handleScrollToSection("features"); setIsMobileMenuOpen(false); }} 
              className="text-sm font-medium hover:text-stella-green transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => { handleScrollToSection("demo"); setIsMobileMenuOpen(false); }} 
              className="text-sm font-medium hover:text-stella-green transition-colors"
            >
              Demo
            </button>
            <Link 
              to="/technology" 
              className="text-sm font-medium hover:text-stella-green transition-colors flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Cpu className="mr-1 h-4 w-4" />
              Technology
            </Link>
            <Button 
              className="bg-stella-green text-black hover:bg-opacity-90 w-full transition-all" 
              size="sm"
              onClick={() => window.location.href = 'mailto:francisjtinao@gmail.com?subject=STELLA.ai | Requesting for System Demonstration'}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              Request a Demo
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
