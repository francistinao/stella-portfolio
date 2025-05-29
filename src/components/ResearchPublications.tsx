
import React, { useEffect } from 'react';
import { Cpu, FileText, Award, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface PublicationProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  link?: string;
  delay: number;
}

const Publication = ({ title, description, tags, icon, link, delay }: PublicationProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="glass-panel p-6 rounded-lg border border-stella-green/20 hover:border-stella-green/40 transition-all duration-300 aos-fade-up"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 rounded-full bg-stella-green bg-opacity-10 flex items-center justify-center mb-4 border border-stella-green border-opacity-30">
        <div className="text-stella-green">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        {title}
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-stella-green hover:text-stella-green/80 inline-flex items-center"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className={`bg-stella-green/10 text-stella-green border-stella-green/30 ${isMobile ? 'text-xs py-0.5' : ''}`}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const ResearchPublications = () => {
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
    <section id="research" className="py-24 relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(93,232,87,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-stella-green mr-3"></div>
            <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Research & Publications</span>
            <div className="h-px w-8 bg-stella-green ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our <span className="text-stella-green">Academic Contributions</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Pushing the boundaries of AI and medical imaging through rigorous research and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Publication 
            title="Enhanced U-Net Architecture for Lesion Detection" 
            description="A novel approach to U-Net implementation that improves lesion boundary detection by 28% through feature pyramid integration."
            tags={["Deep Learning", "CNN", "Medical Imaging", "Research Paper"]}
            icon={<Cpu className="h-6 w-6" />}
            delay={100}
          />
          
          <Publication 
            title="Automated Stroke Type Classification Framework" 
            description="Development of an end-to-end pipeline for distinguishing between ischemic and hemorrhagic strokes with 92% accuracy."
            tags={["AI", "Classification", "Hounsfield Units", "Healthcare"]}
            icon={<FileText className="h-6 w-6" />}
            delay={200}
          />
          
          <Publication 
            title="Recognition for Innovation Award" 
            description="Recognition for innovation in AI-assisted diagnosis systems for underserved healthcare communities in the Philippines."
            tags={["BPI Innovation Awards", "Recognition", "Innovation", "Healthcare Impact"]}
            icon={<Award className="h-6 w-6" />}
            delay={300}
            link="https://github.com/francistinao/stella-ai"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchPublications;
