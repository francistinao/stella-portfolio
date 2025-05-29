
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUp, Trophy, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TechnologySegmentation = () => {
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
              <span className="text-stella-green text-sm font-medium tracking-wider uppercase">Technical Article</span>
              <div className="h-px w-8 bg-stella-green ml-3"></div>
            </div>
            
            <Link to="/technology" className="inline-flex items-center text-stella-green hover:text-stella-green/80 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Technology
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-center title-font">
              Stroke Segmentation and Classification Using U-Net and Hounsfield Scale Analysis
            </h1>
            
            <div className="glass-panel rounded-xl overflow-hidden mb-16 green-glow">
              <img 
                src="/articles/article-2.png" 
                alt="Stroke Segmentation Diagram" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              <article className="glass-panel p-8 rounded-xl">
                <p className="mb-4">
                  Since U-Net requires three-channel input images, grayscale Brain CT Scans will be converted into an RGB format using OpenCV's transformation functions, as grayscale images contain only one channel. Next, the three-channeled CT scan masks will undergo contouring through a short program designed to highlight brain lesions within the dataset. This program will be developed using the OpenCV library in Python. The contoured images will then serve as the Region of Interest (ROI), enhancing detection and learning by the machine learning model during training and enabling automated segmentation.
                </p>
                
                <p className="mb-4">
                  Following segmentation, the ROI data will be processed for annotation. This step involves adjusting the pixel values of the images to align with the model's training requirements. Numerical Python (NumPy) will be utilized for this task due to its efficiency in handling image data as N-dimensional arrays (Dahal, 2020).
                </p>
                
                <p className="mb-4">
                  Stroke classification will be divided into two main types: ischemic and hemorrhagic, determined using the standardized Hounsfield Scale method. The mean pixel value will be calculated by summing all pixel intensities and dividing by the total number of pixels. This value will then be converted into Hounsfield Units (HU) using the formula:
                </p>
                
                <p className="mb-4 font-bold text-center text-stella-green">
                  HU = Pixel Value × Slope + Intercept
                </p>
                
                <p className="mb-4">
                  where the slope and intercept values, typically 1 and -1024 respectively (Fanning, 2006), are found in the DICOM file. The classification follows specific HU thresholds:
                </p>
                
                <ul className="mb-4 list-disc pl-6">
                  <li><strong className="text-stella-green">Ischemic Stroke</strong>: 20-45 HU</li>
                  <li><strong className="text-stella-green">Acute Ischemic Stroke</strong>: ≥38.5 HU</li>
                  <li><strong className="text-stella-green">Hemorrhagic Stroke</strong>: 50-100 HU</li>
                  <li><strong className="text-stella-green">Subarachnoid Hemorrhage (SAH)</strong>: 50-60 HU</li>
                  <li><strong className="text-stella-green">Intracranial Hemorrhage (ICH)</strong>: 60-100 HU</li>
                </ul>
                
                <p className="mb-4">
                  After converting pixel values to HU and computing the mean HU value of the segmented lesion, classification will be performed by comparing the mean HU with these predefined thresholds. This method ensures precise identification of ischemic and hemorrhagic strokes, facilitating an accurate and efficient stroke detection system.
                </p>
              </article>
            </div>
          </div>
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
                        src="/uploads/fab7897c-3645-4b87-94f0-916e64721896.png" 
                        alt="Algorithm Visualization" 
                        className="w-full h-40 object-contain" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 title-font">Pipeline for Stroke Classification and Identification</h3>
                    <Link to="/technology">
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

export default TechnologySegmentation;
