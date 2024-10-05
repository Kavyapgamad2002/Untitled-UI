import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import ImageSection from './components/ImageSection';
import SocialProof from './components/SocialProof'; 
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Features2 from './components/Features2';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <ImageSection />
      <SocialProof /> 
      <Features />
      <Testimonial />
      <Features2 />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
