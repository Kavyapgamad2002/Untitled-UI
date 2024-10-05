import React, { useState, useEffect } from 'react';
import desktopImage from '../images/image-1.png'; // Desktop image
import mobileImage from '../images/Features-Second/desktop.png';  // Mobile image

const ImageSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect window size and adjust the image source and styles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Mobile view if screen width is 640px or less
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
  }, []);

  return (
    <section className="w-full flex justify-center my-8">
      <div
        className={`relative ${
          isMobile
            ? 'w-[343px] h-[228px] border-t-[3px] border-l-[3px] border-r-[3px] border-black rounded-[4px]'  
            : 'w-[1216px] p-0 border-t-[10px] border-l-[10px] border-r-[10px] border-black rounded-t-2xl'   
        }`}  style={{ paddingBottom: '0px', borderBottom: 'none' }}
      >
        <img
          src={isMobile ? mobileImage : desktopImage}  // Choose image based on screen size
          alt="Analytics Dashboard"
          className={`w-full object-contain ${isMobile ? 'rounded-[4px]' : 'rounded-t-2xl'}`}  // Ensure image fits properly and rounded corners match the container
        />
      </div>
    </section>
  );
};

export default ImageSection;
