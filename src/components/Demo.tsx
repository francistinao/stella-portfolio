import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { UploadCloud, Cpu, Layers3, CalendarDays, Award, Trophy, Users, FileText, ExternalLink, TrendingUp, Briefcase, Circle, ListTodo, ArrowRight, ListChecks, Loader, GripHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="glass-panel p-6 rounded-lg highlight-ring relative opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-stella-green text-black flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div className="mb-4 text-stella-green">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const AchievementCard = ({
  year,
  title,
  description,
  delay
}: {
  year: string;
  title: string;
  description: string;
  delay: string;
}) => {
  return (
    <div 
      className="relative bg-[#111] border border-[#222] rounded-xl p-5 opacity-0 animate-fade-in hover:border-stella-green transition-colors duration-300"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="absolute -top-3 left-4 bg-stella-green text-black px-3 py-1 rounded-full text-sm font-medium">
        {year}
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-lg title-font">{title}</h4>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-1">
          <Trophy className="h-4 w-4 text-stella-green" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-16 h-[1px] bg-gray-600"></div>
          <Circle className="h-2 w-2 fill-stella-green text-stella-green" />
        </div>
      </div>
    </div>
  );
};

// Define a new KanbanCard component for the Future Plans section
const KanbanCard = ({ title, description }: { title: string; description: string }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  return (
    <div
      draggable
      className={`bg-[#111] border border-stella-green/20 rounded-lg p-4 mb-3 cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } hover:border-stella-green transition-all duration-300 shadow-md`}
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', title);
        setIsDragging(true);
      }}
      onDragEnd={() => setIsDragging(false)}
    >
      <h4 className="font-semibold text-sm mb-2">{title}</h4>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

const Demo = () => {
  const [kanbanColumns, setKanbanColumns] = useState({
    backlog: [
      { 
        title: "Full 3D Brain Inspector with MRI", 
        description: "Developing a 3D viewer for MRI scans with interactive analysis capabilities" 
      },
      { 
        title: "Multiple AI Model training", 
        description: "Training additional AI models to improve accuracy and detect various conditions" 
      }
    ],
    next: [
      { 
        title: "In-app communication with certified radiologists", 
        description: "Implementing real-time communication with radiologists via WiFi or SMS" 
      }
    ],
    ongoing: [
      { 
        title: "CT Scan browsing slider", 
        description: "Developing an intuitive interface for browsing through CT scan slides" 
      },
      { 
        title: "Enhancing customized Hounsfield Scale unit algorithm", 
        description: "Refining the algorithm with lab testing for improved accuracy" 
      }
    ]
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, columnKey: 'backlog' | 'next' | 'ongoing') => {
    e.preventDefault();
    const title = e.dataTransfer.getData('text/plain');
    
    // Find the card and its current column
    let sourceColumn: 'backlog' | 'next' | 'ongoing' | null = null;
    let card = null;
    
    for (const col of ['backlog', 'next', 'ongoing'] as const) {
      const foundCard = kanbanColumns[col].find(c => c.title === title);
      if (foundCard) {
        sourceColumn = col;
        card = foundCard;
        break;
      }
    }
    
    if (sourceColumn && card && sourceColumn !== columnKey) {
      // Remove from source column
      const newColumns = {...kanbanColumns};
      newColumns[sourceColumn] = newColumns[sourceColumn].filter(c => c.title !== title);
      
      // Add to target column
      newColumns[columnKey] = [...newColumns[columnKey], card];
      
      setKanbanColumns(newColumns);
    }
  };

  return (
    <section id="demo" className="my-64 py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(93,232,87,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-8 bg-stella-green mr-3"></div>
            <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Application Demo</span>
            <div className="h-px w-8 bg-stella-green ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience <span className="text-stella-green">STELLA.ai</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Our desktop application provides medical professionals with powerful tools for stroke diagnosis and analysis
          </p>
        </div>
        
        <div className="mb-20 glass-panel rounded-lg overflow-hidden highlight-ring scanner-effect relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-stella-green opacity-50 z-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-stella-green opacity-50 z-20"></div>
          <div className="absolute left-0 top-0 h-full w-1 bg-stella-green opacity-50 z-20"></div>
          <div className="absolute right-0 top-0 h-full w-1 bg-stella-green opacity-50 z-20"></div>
          
          <div className="w-full h-[400px] md:h-[800px]">
          <iframe
            src="https://www.youtube.com/embed/b7Ie8_jxvJs"
            title="STELLA.ai Demo Video"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StepCard
            number={1}
            icon={<UploadCloud className="h-10 w-10" />}
            title="Upload CT Scan"
            description="Simply upload your patient's CT scan images through our intuitive interface for immediate processing."
          />
          <StepCard
            number={2}
            icon={<Cpu className="h-10 w-10" />}
            title="AI Analysis"
            description="Our dual-model AI system automatically analyzes the images to detect and segment brain lesions."
          />
          <StepCard
            number={3}
            icon={<Layers3 className="h-10 w-10" />}
            title="View Results"
            description="Receive detailed segmentation results, stroke classification, and density analysis to inform your diagnosis."
          />
        </div>

        {/* Research Paper Section */}
        <div className="my-64 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col gap-2 md:flex-row items-start md:items-center gap-4 mb-6">
            
            <div className="flex flex-col space-y-10 p-8 relative w-full">
              <h3 className="text-4xl font-bold">Read the Research Paper Behind this Technology</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Dive deeper into the methodology and technical foundations of STELLA.ai. Our comprehensive research paper details the development process, algorithms, testing procedures, and clinical validation that made this breakthrough technology possible. Understanding the science behind STELLA.ai will give you valuable insights into its capabilities and potential applications in your clinical practice.
                  </p>
                  <div className="flex justify-start">
                    <Button 
                    onClick={() => {
                      window.open('/paper.pdf', '_blank');
                    }}
                    className="group bg-stella-green text-black hover:bg-opacity-90 disabled:opacity-50 transition-all">
                      <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Access Research Paper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Completely Redesigned */}
        <div className="my-64">
          <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-3xl font-bold title-font">Meet the Team</h3>
            <p className="text-gray-400 mt-2">BSIT IV Students from Caraga State University</p>
          </div>
          
          <div className="relative glass-panel p-8 rounded-lg overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stella-green/50 to-transparent"></div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 h-48 w-1 bg-stella-green/30 rounded-full blur-sm"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <div className="md:w-1/4">
                <div className="sticky top-8">
                  <h4 className="text-xl font-bold mb-4 text-stella-green">Leadership</h4>
                  <p className="text-sm text-gray-300 mb-6">
                    Our team of passionate Information Technology students is dedicated to leveraging AI technology to improve stroke diagnosis and save lives.
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-stella-green/50 to-transparent my-4"></div>
                  <Badge className="bg-black/30 text-stella-green border border-stella-green/30 hover:bg-black/50">
                    Caraga State University
                  </Badge>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Team Member 1 */}
                  <div className="flex gap-4 items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-stella-green/30 to-transparent flex items-center justify-center flex-shrink-0 border border-stella-green/20">
                      <Users className="h-6 w-6 text-stella-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Francis Tin-ao</h4>
                      <p className="text-sm text-stella-green mb-2">Researcher and Lead Developer</p>
                      <p className="text-xs text-gray-400">
                        Specializes in developing neural networks and implementing the full-stack application.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="text-xs">Deep Learning</Badge>
                        <Badge variant="outline" className="text-xs">Python</Badge>
                        <Badge variant="outline" className="text-xs">TypeScript</Badge>
                        <Badge variant="outline" className="text-xs">React</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team Member 2 */}
                  <div className="flex gap-4 items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-stella-green/30 to-transparent flex items-center justify-center flex-shrink-0 border border-stella-green/20">
                      <Users className="h-6 w-6 text-stella-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Rhea Bete</h4>
                      <p className="text-sm text-stella-green mb-2">Researcher and Project Manager</p>
                      <p className="text-xs text-gray-400">
                        Leads research initiatives and manages the project development lifecycle.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="text-xs">Project Management</Badge>
                        <Badge variant="outline" className="text-xs">Research</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team Member 3 */}
                  <div className="flex gap-4 items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-stella-green/30 to-transparent flex items-center justify-center flex-shrink-0 border border-stella-green/20">
                      <Users className="h-6 w-6 text-stella-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Angelo Galope</h4>
                      <p className="text-sm text-stella-green mb-2">Product Designer</p>
                      <p className="text-xs text-gray-400">
                        Focuses on improving the user experience and interface design of the application.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="text-xs">Figma</Badge>
                        <Badge variant="outline" className="text-xs">Mockups</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team Member 4 */}
                  <div className="flex gap-4 items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-stella-green/30 to-transparent flex items-center justify-center flex-shrink-0 border border-stella-green/20">
                      <Users className="h-6 w-6 text-stella-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">James Cubillas</h4>
                      <p className="text-sm text-stella-green mb-2">Thesis Adviser</p>
                      <p className="text-xs text-gray-400">
                        Provides guidance and expertise throughout the research and development process.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="text-xs">Mentorship</Badge>
                        <Badge variant="outline" className="text-xs">Academic Guidance</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-bold title-font">Our Achievements</h3>
            <p className="text-gray-400 mt-2">Recognition in National Competitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AchievementCard 
              year="2024"
              title="Champion - CSU Innovation Challenge"
              description="Selected as part of the top 20 innovations"
              delay="0.4s"
            />
            <AchievementCard 
              year="2024"
              title="Champion - DICT's Philippine Start Up Challenge 9"
              description="Regional Pitching Competition"
              delay="0.5s"
            />
            <AchievementCard 
              year="2024"
              title="2nd Place - Alliance Medical Innovation Challenge (AMIC)"
              description="Hackathon"
              delay="0.6s"
            />
            <AchievementCard 
              year="2024"
              title="3rd Place - Hack4Health Hackathon"
              description="Department of Health & Development Academy of the Philippines"
              delay="0.7s"
            />
            <AchievementCard 
              year="2024"
              title="3rd Place - DICT's National Philippine Startup Challenge 9"
              description="National level competition"
              delay="0.8s"
            />
            <AchievementCard 
              year="2024"
              title="Top 10 Finalist - NSTW Startup Jam"
              description="Pitching Competition"
              delay="0.9s"
            />
            <AchievementCard 
              year="2024"
              title="Top 10 Innovation - BPI DOST Innovation Awards"
              description="Recognition for innovative solution"
              delay="1.0s"
            />
            <AchievementCard 
              year="2024"
              title="Top 10 Team - Hack4Health Hackathon"
              description="DOH & DAP, May 15-17, 2024"
              delay="1.1s"
            />
            <AchievementCard
              year="2025"
              title="Best Oral Presentation Award"
              description="SCIICOM 2025"
              delay="1.2s"
            />
          </div>
        </div>

        {/* Investor Section */}
        <div className="my-64 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="glass-panel p-8 rounded-lg relative">
            <div className="absolute -top-4 -right-4 bg-stella-green text-black py-1 px-3 rounded-full text-sm font-medium">
              <Briefcase className="inline-block mr-1 h-4 w-4" />
              Investment Opportunity
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-6">Join Us in Revolutionizing Stroke Diagnosis</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're seeking strategic partners and investors to help accelerate the development and deployment of STELLA.ai. Your investment will help bring this life-saving technology to hospitals and clinics worldwide, improving stroke diagnosis and patient outcomes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-stella-green bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-4 w-4 text-stella-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Market Growth</h4>
                      <p className="text-sm text-gray-400">The global medical imaging AI market is projected to reach $16B by 2030</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-stella-green bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-4 w-4 text-stella-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Award-Winning</h4>
                      <p className="text-sm text-gray-400">Multiple national recognition for innovation and impact</p>
                    </div>
                  </div>
                </div>
                <Button className="group bg-stella-green text-black hover:bg-opacity-90 transition-all">
                  <Briefcase className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Contact for Investment Opportunities
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-stella-green opacity-10 animate-pulse-glow"></div>
                  <div className="absolute inset-4 rounded-full bg-stella-green opacity-5 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-stella-green">90%</div>
                      <div className="text-xl font-medium text-gray-300">Accuracy</div>
                      <div className="text-sm text-gray-400 mt-2">U-Net Model Performance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Plans - Kanban Board */}
        <div className="my-64 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold title-font">Future Development Roadmap</h3>
            <p className="text-gray-400 mt-2">Track our progress and upcoming features</p>
          </div>
          
          <div className="glass-panel rounded-lg p-6 scanner-effect">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Backlog Column */}
              <div 
                className="bg-black/30 rounded-lg p-4"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, 'backlog')}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-stella-green/10 p-2 rounded-md">
                    <ListTodo className="h-5 w-5 text-stella-green" />
                  </div>
                  <h4 className="font-semibold">Backlog</h4>
                  <Badge className="ml-auto">{kanbanColumns.backlog.length}</Badge>
                </div>
                
                <div className="space-y-3">
                  {kanbanColumns.backlog.map((card, index) => (
                    <KanbanCard key={index} title={card.title} description={card.description} />
                  ))}
                </div>
              </div>
              
              {/* What to do next Column */}
              <div 
                className="bg-black/30 rounded-lg p-4"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, 'next')}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-stella-green/10 p-2 rounded-md">
                    <ListChecks className="h-5 w-5 text-stella-green" />
                  </div>
                  <h4 className="font-semibold">What to do next</h4>
                  <Badge className="ml-auto">{kanbanColumns.next.length}</Badge>
                </div>
                
                <div className="space-y-3">
                  {kanbanColumns.next.map((card, index) => (
                    <KanbanCard key={index} title={card.title} description={card.description} />
                  ))}
                </div>
              </div>
              
              {/* On-going Column */}
              <div 
                className="bg-black/30 rounded-lg p-4"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, 'ongoing')}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-stella-green/10 p-2 rounded-md">
                    <Loader className="h-5 w-5 text-stella-green" />
                  </div>
                  <h4 className="font-semibold">On-going</h4>
                  <Badge className="ml-auto">{kanbanColumns.ongoing.length}</Badge>
                </div>
                
                <div className="space-y-3">
                  {kanbanColumns.ongoing.map((card, index) => (
                    <KanbanCard key={index} title={card.title} description={card.description} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-xs text-gray-500">
              <p>Drag and drop cards between columns to simulate the development process</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <GripHorizontal className="h-3 w-3" />
                <span>Drag to reorder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Experience Section */}
        <div className="mt-64 text-center opacity-0 animate-fade-in py-16" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <h3 className="text-4xl font-bold mb-8">Ready to Experience STELLA.ai?</h3>
          <Button 
            className="bg-stella-green text-black hover:bg-opacity-90 transition-all hover:scale-105 px-12 py-8 text-xl"
          >
            <CalendarDays className="mr-2 h-6 w-6" />
            Schedule a Demo
          </Button>
          <p className="text-gray-500 text-sm mt-6">Experience the future of stroke diagnosis</p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
