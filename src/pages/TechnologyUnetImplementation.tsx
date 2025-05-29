
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUp, Trophy, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TechnologyUnetImplementation = () => {
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
              Stroke Lesion Segmentation Using U-Net and PyTorch
            </h1>
            
            <div className="glass-panel rounded-xl overflow-hidden mb-16 green-glow">
              <img 
                src="/articles/article-3.png" 
                alt="U-Net Architecture" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-foreground">
            <article className="glass-panel p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-stella-green title-font">U-Net Neural Network Implementation</h2>
                
                <p className="mb-4">
                  A U-Net convolutional neural network was utilized for stroke lesion segmentation using PyTorch, with the model configured to accept 256×256 RGB images as input. The U-Net architecture follows an encoder-decoder structure with skip connections, designed to capture both global and spatial features in medical images. It consists of a contracting path for downsampling and a symmetrical expansive path for upsampling before the final layer generates segmentation maps of multiple classes.
                </p>
                
                <p className="mb-4">
                  For multiclass labeling, pixel values in the masks were modified: 0 for the background, 1 for ischemic stroke regions, and 2 for hemorrhagic stroke areas. The dataset was prepared using a custom SegmentationDataset class, which loads images and their corresponding masks, ensuring each input image is correctly paired with its mask during training. This class also supports optional data augmentation. All images and masks were resized to 256×256 to match the model's input requirements.
                </p>
                
                <p className="mb-4">
                  To enhance model performance, data augmentation and optimization techniques were applied. Image transformations were implemented using the Albumentations library, including resizing, pixel value normalization, and conversion to tensors for PyTorch. The SegmentationDataset class was used to load preprocessed images and masks, while a DataLoader facilitated batch processing with a batch size of 16, ensuring randomness through data shuffling during training.
                </p>
                
                <p className="mb-4">
                  The U-Net model was initialized with three output classes—background, ischemic stroke, and hemorrhagic stroke—and deployed on a GPU for accelerated computation. Training utilized the CrossEntropyLoss function, well-suited for multiclass segmentation tasks, and the Adam optimizer with a learning rate of 1e-4 for weight updates. An initial test training run was conducted over five epochs to observe early trends.
                </p>
                
                <p className="mb-4">
                  The training loss, as depicted in Figure 4-1, exhibited a steady decline, beginning at approximately 1.2 and reducing to around 0.6 by the fifth epoch. This consistent decrease in loss indicates effective learning, demonstrating that the model is progressively minimizing errors. The integration of data augmentation, model architecture, and optimization techniques contributed to improved performance as training progressed.
                </p>
              </article>
            </div>
          </div>
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

export default TechnologyUnetImplementation;
