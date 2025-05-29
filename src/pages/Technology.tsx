
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, ArrowUp, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Technology = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-8 mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-stella-green mr-3"></div>
              <Trophy className="h-5 w-5 text-stella-green mr-1" />
              <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Technical Overview</span>
              <div className="h-px w-8 bg-stella-green ml-3"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-center title-font">
              Pipeline for Stroke Classification and Identification
            </h1>
            
            <div className="glass-panel rounded-xl overflow-hidden mb-16 green-glow">
              <img 
                src="/uploads/fab7897c-3645-4b87-94f0-916e64721896.png" 
                alt="Stroke Classification Pipeline Diagram" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              <article className="mb-16 glass-panel p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-stella-green title-font">Pipeline for Stroke Classification and Identification</h2>
                
                <p className="mb-4">
                  The classification and identification process begins with CT scan images as input data. These images undergo preprocessing, where enhancement techniques are applied to optimize them for segmentation.
                </p>
                
                <p className="mb-4">
                  Once preprocessed, the images are fed into a Convolutional Neural Network (CNN) specifically designed for image segmentation. The CNN generates a segmentation map, highlighting regions of interest that may correspond to different stroke types.
                </p>
                
                <p className="mb-4">
                  Next, post-processing techniques are applied to refine the segmentation results by removing noise and artifacts. The cleaned segmentation map, which clearly outlines areas of interest, proceeds to further analysis.
                </p>
                
                <p className="mb-4">
                  A Hounsfield Scale analysis is then conducted to determine tissue density values within the segmented regions. This step is essential for distinguishing between ischemic and hemorrhagic strokes based on predefined Hounsfield Unit (HU) thresholds.
                </p>
                
                <p className="mb-4">
                  Finally, the classified image is generated, displaying the original CT scan with clearly marked ischemic or hemorrhagic stroke areas, ensuring accurate and efficient stroke detection.
                </p>
              </article>
              
              
            </div>
          </div>
        </div>
        
        {/* Next Articles Section */}
        <div className="mt-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-stella-green title-font">Next Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Article Card 1 */}
                <div className="glass-panel rounded-xl overflow-hidden hover:border-stella-green/50 transition-all duration-300 card-tilted">
                  <div className="p-6">
                    <div className="bg-black/30 p-4 rounded-lg mb-4">
                      <img 
                        src="/articles/article-2.png" 
                        alt="Algorithm Visualization" 
                        className="w-full h-40 object-contain" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 title-font">Stroke Segmentation and Classification Using U-Net and Hounsfield Scale Analysis</h3>
                    <Link to="/technology/segmentation">
                      <Button variant="ghost" className="text-stella-green px-0 hover:bg-transparent hover:text-stella-green/80 mt-2">
                        Read more <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Article Card 2 */}
                <div className="glass-panel rounded-xl overflow-hidden hover:border-stella-green/50 transition-all duration-300 card-tilted">
                  <div className="p-6">
                    <div className="bg-black/30 p-4 rounded-lg mb-4">
                      <img 
                        src="/articles/article-3.png" 
                        alt="Algorithm Diagram" 
                        className="w-full h-40 object-contain" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 title-font">Stroke Lesion Segmentation Using U-Net and PyTorch</h3>
                    <Link to="/technology/unet-implementation">
                      <Button variant="ghost" className="text-stella-green px-0 hover:bg-transparent hover:text-stella-green/80 mt-2">
                        Read more <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-stella-green text-stella-black shadow-lg hover:bg-stella-green/80 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
      
      <Footer />
    </div>
  );
};

export default Technology;
