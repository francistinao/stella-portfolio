
import React from 'react';
import { Mail, GithubIcon, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="py-12 relative bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 overflow-hidden rounded-full flex items-center justify-center bg-black">
                <img src="/stella.png" alt="STELLA.ai LOGO" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                STELLA<span className="text-stella-green">.ai</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Stroke Tomography for Enhanced Lesion Learning Analysis
            </p>
          </div>
          
          <div className={`flex ${isMobile ? 'flex-col space-y-3' : 'flex-row space-x-8'} items-center mb-6 md:mb-0`}>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-stella-green transition-colors"
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-gray-400 hover:text-stella-green transition-colors"
            >
              Features
            </a>
            <a 
              href="#research" 
              className="text-gray-400 hover:text-stella-green transition-colors"
            >
              Research
            </a>
            <a 
              href="#demo" 
              className="text-gray-400 hover:text-stella-green transition-colors"
            >
              Demo
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:francisjtinao@gmail.com" 
              className="text-gray-400 hover:text-stella-green transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/francistinao/stella-ai" 
              className="text-gray-400 hover:text-stella-green transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/stella-ai-intelligent-system" 
              className="text-gray-400 hover:text-stella-green transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} STELLA.ai | Undergraduate Thesis Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
