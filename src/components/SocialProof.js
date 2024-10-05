import React from 'react';
import logo1 from '../images/Social-proof/social-proof-1.png'; // Replace with your actual logo paths
import logo2 from '../images/Social-proof/social-proof-2.png'; // Replace with your actual logo paths
import logo3 from '../images/Social-proof/social-proof-3.png'; // Replace with your actual logo paths
import logo4 from '../images/Social-proof/social-proof-4.png'; // Replace with your actual logo paths
import logo5 from '../images/Social-proof/social-proof-5.png'; // Replace with your actual logo paths
import logo6 from '../images/Social-proof/social-proof-6.png'; // Replace with your actual logo paths

const SocialProof = () => {
  return (
    <section className="w-full flex flex-col items-center my-12">
      <p className="text-center text-lg font-semibold mb-4 pt-12">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap justify-between items-center pt-8 pb-12 pr-12 w-11/12">
        {/* Each company logo will take half of the row on small screens */}
        {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
          <div className="flex items-center w-1/2 sm:w-auto sm:max-w-[116.04px] h-[29.05px] p-7" key={index}>
            <img src={logo} alt={`Company ${index + 1}`} className="w-11 h-11 mr-2" />
            <span className="font-bold text-lg">{['Bolfshift', 'Nietzsche', 'GlobalBank', 'Spherule', 'FeatherDev', 'Lightbox'][index]}</span>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-300 w-7/12 mt-4" />
    </section>
  );
};

export default SocialProof;
