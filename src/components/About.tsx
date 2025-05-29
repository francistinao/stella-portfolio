
import React from 'react';
import { Brain, MicroscopeIcon, Calculator, Award } from "lucide-react";

const AboutCard = ({ 
  icon, 
  title, 
  description,
  delay = "0.4s",
  className = ""
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: string;
  className?: string;
}) => {
  return (
    <div 
      className={`glass-panel p-6 rounded-lg card-tilted group transition-all duration-300 opacity-0 animate-fade-in ${className}`} 
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="mb-4 text-stella-green group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-stella-green transition-colors title-font">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="my-64 py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-stella-green mr-3"></div>
            <span className="text-stella-green text-sm font-medium tracking-wider uppercase">About Our Study</span>
            <div className="h-px w-8 bg-stella-green ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 title-font">Transforming <span className="text-stella-green">Stroke Analysis</span></h2>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <p className="text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">STELLA.ai</span> is an intelligent system that automatically segments brain lesions using the uploaded CT scan. We harness the power of computer vision and machine learning to extract the brain lesion segmentation points of stroke, whether it's an ischemic or hemorrhagic type of stroke. We built this application from the ground up to an actual implementation in a usable desktop application.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We're strategizing to train a state-of-the-art model. Given the available datasets, adjustments will be made to the U-Net model to optimize its performance due to differing dimensions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            In classifying strokes, we're utilizing the Hounsfield Scale, a linear transformation of the original linear attenuation coefficient measurement. Here, the radiodensity of distilled water at standard pressure and temperature (STP) is set as 0 Hounsfield units (HU), while air at STP is defined as -1000 HU. This approach aids in determining the density value of lesion tissue by calculating the mean of the segmented area through the summation of all pixel values.
          </p>
        </div>
        
        {/* Bento Grid Layout with tilted cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          <AboutCard
            icon={<Brain className="h-10 w-10" />}
            title="Lesion Segmentation"
            description="Automatically identify and segment brain lesions from CT scans with high precision using deep learning."
            delay="0.3s"
          />
          <AboutCard
            icon={<MicroscopeIcon className="h-10 w-10" />}
            title="State-of-the-Art Model"
            description="Utilizing U-Net, a cutting-edge deep learning architecture, to ensure precise and reliable stroke detection results."
            delay="0.4s"
            className="md:col-span-2 lg:col-span-1"
          />
          <AboutCard
            icon={<Calculator className="h-10 w-10" />}
            title="Hounsfield Analysis"
            description="Using the Hounsfield Scale to accurately determine lesion density values for enhanced diagnostic precision."
            delay="0.5s"
          />
          <AboutCard
            icon={<Award className="h-10 w-10" />}
            title="90% IoU Accuracy"
            description="Achieving industry-leading 90% Intersection over Union accuracy in brain lesion segmentation with our U-Net model."
            delay="0.6s"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
