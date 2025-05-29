# STELLA.ai - Stroke Tomography for Enhanced Lesion Learning Analysis

<div align="center">
  <img src="/public/stella.png" alt="STELLA.ai Logo" width="200" height="200" />
  
  [![Website](https://img.shields.io/badge/Website-stella--ai--system.vercel.app-green)](https://stella-ai-system.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-stella--ai-blue)](https://github.com/francistinao/stella-ai)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-STELLA.ai-blue)](https://www.linkedin.com/company/stella-ai-intelligent-system)
</div>

## 🧠 Overview

STELLA.ai is an intelligent system that revolutionizes stroke detection and analysis through advanced AI technology. Our system automatically segments brain lesions using uploaded CT scans, harnessing the power of computer vision and machine learning to extract precise lesion segmentation points for both ischemic and hemorrhagic strokes.

The system is designed to assist medical professionals in making faster and more accurate diagnoses, particularly in resource-constrained healthcare settings. By leveraging state-of-the-art deep learning techniques and interactive visualization tools, STELLA.ai aims to improve stroke diagnosis outcomes and enhance medical education.

## ✨ Key Features

- **3D Lesion Viewer**: Interactive 3D visualization powered by Three.js, enabling 360° inspection and comprehensive analysis of stroke lesions with wireframe view and axis visualization.
- **STELLAmulator**: Advanced training simulator for Radiologic Technology students, offering interactive learning experiences in stroke identification and classification.
- **Secure API Architecture**: Robust security with hexadecimal hashing and caching mechanisms to prevent endpoint breaches and ensure data protection.
- **90% IoU Accuracy**: High-precision U-Net model for brain lesion detection.

## 🛠️ Technical Stack

### Frontend
- **Framework**: Electron (React) with TypeScript
- **Build Tool**: Vite for optimized development and production builds
- **UI Components**: shadcn-ui for consistent design patterns
- **Styling**: Tailwind CSS for responsive and modern UI
- **State Management**: React Context API for global state management

### Backend & AI
- **Deep Learning**: PyTorch implementation of U-Net architecture
- **Model Architecture**: Custom U-Net with feature pyramid integration
- **Image Processing**: OpenCV for preprocessing and augmentation
- **API Security**: Hexadecimal hashing and caching mechanisms
- **Data Storage**: Secure cloud storage for medical imaging data

### Visualization
- **3D Engine**: Three.js for interactive 3D rendering
- **Medical Imaging**: DICOM viewer integration
- **Real-time Processing**: WebGL acceleration for smooth visualization

## 🎯 Core Capabilities

### 1. Automated Lesion Detection
- Advanced U-Net implementation with 89% improved boundary detection
- Feature pyramid integration for multi-scale feature extraction
- Real-time processing of CT scan images
- Adaptive thresholding for lesion segmentation
- Hounsfield Unit analysis for density-based classification

### 2. Stroke Classification
- End-to-end pipeline for stroke type classification
- 92% classification accuracy using ensemble methods
- Hounsfield Scale analysis for density value determination
- Automated report generation with lesion measurements
- Confidence scoring for diagnostic recommendations

### 3. Interactive Learning
- Comprehensive training simulator with real cases
- Interactive 3D visualization tools
- Progress tracking and performance analytics
- Customizable learning paths for different skill levels
- Real-time feedback and assessment tools

## 🔮 Future Developments

### Short-term Goals (6-12 months)
- Integration with major PACS systems
- Mobile application development
- Enhanced real-time collaboration features
- Expanded dataset for improved model accuracy

### Long-term Vision (1-3 years)
- Multi-modal imaging support (MRI, CT, PET)
- AI-powered treatment planning
- Predictive analytics for stroke risk assessment
- Global deployment in underserved regions

## 🚀 Getting Started

### Prerequisites

- Node.js & npm installed
- Git
- Python 3.8+ (for AI model development)
- CUDA-compatible GPU (recommended for model training)

## ⚠️ Intellectual Property Notice

This project and all its components, including but not limited to:
- Source code
- AI models
- Documentation
- Design assets
- Research findings

are the exclusive intellectual property of the original authors. Unauthorized copying, modification, distribution, or use of any part of this project is strictly prohibited. All rights are reserved.

## 📞 Contact

For demonstrations or inquiries, please contact:
- Email: [francisjtinao@gmail.com](mailto:francisjtinao@gmail.com)
- LinkedIn: [STELLA.ai Intelligent System](https://www.linkedin.com/company/stella-ai-intelligent-system)

## 📄 License

This project is part of an undergraduate thesis project. All rights reserved. Unauthorized use, reproduction, or distribution of this software or its documentation is strictly prohibited.

---

<div align="center">
  <p>Built with ❤️ by Francis Tin-ao, Rhea Bete, and James Cubillas</p>
</div>
