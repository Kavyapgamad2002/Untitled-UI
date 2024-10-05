import React from 'react';

// Importing images
import iPhoneImage from '../images/Features-Second/iPhone.png';
import desktopImage from '../images/Features-Second/desktop.png';
import inbox from '../images/Features/inbox.png';
import instantAnswer from '../images/Features/instant-answer.png';
import reports from '../images/Features/reports.png';

const Features2 = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-16 flex flex-col items-center gap-16">
      <div className="text-center">
        <h6
          style={{
            color: '#6941C6',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            textAlign: 'center',
            background: '#F9F5FF',
            width: '83px',
            height: '35px',
            padding: '4px 12px',
            borderRadius: '16px',
            border: '1px solid transparent',
            margin: '0 auto',
            marginBottom: '10px',
          }}
        >
          Features
        </h6>
        <h2 className="text-2xl font-bold">Cutting-edge features for advanced analytics</h2>
        <p className="text-gray-600 mt-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="relative w-full flex justify-center pb-10">
        {/* Desktop Image with 10px black border (Only shown on larger screens) */}
        <img
          src={desktopImage}
          alt="Desktop Analytics"
          className="hidden md:block w-[80%] max-w-[800px] border-2 border-black-300"
          style={{
            width: '768px',
            height: '512px',
            borderWidth: '7px',
            borderRadius: '10px',
            borderColor: 'black',
          }}
        />
        {/* iPhone Image with regular positioning */}
        <img
          src={iPhoneImage}
          alt="iPhone Analytics"
          className="w-[244px] h-[497.34px] mt-4 md:absolute md:w-[244px] md:h-[497.34px] md:top-[64px] md:left-[152px]"
        />
      </div>

      {/* Feature Boxes */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full">
        {/* Box 1 */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-4 ">
          <img src={inbox} alt="Inbox" className="w-12 h-12 mb-4" />
          <h1 className="font-bold text-lg">Share team inboxes</h1>
          <p className="text-center">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
          <a href="/" className="font-medium hover:underline text-indigo-600">
            Learn more →
          </a>
        </div>
        {/* Box 2 */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-4">
          <img src={instantAnswer} alt="Instant Answer" className="w-12 h-12 mb-4" />
          <h3 className="font-bold text-lg">Deliver instant answers</h3>
          <p className="text-center">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
          <a href="/" className="font-medium hover:underline text-indigo-600">
            Learn more →
          </a>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-4">
          <img src={reports} alt="Reports" className="w-12 h-12 mb-4" />
          <h3 className="font-bold text-lg">Manage your team with reports</h3>
          <p className="text-center">
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
          </p>
          <a href="/" className="font-medium hover:underline text-indigo-600">
            Learn more →
          </a>
        </div>
      </div>

      <div className="border-b border-gray-300 w-10/12 mt-4" />
    </section>
  );
};

export default Features2;
