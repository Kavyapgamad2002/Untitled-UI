import React from 'react';

const MainSection = () => {
  return (
    <section className="w-full flex flex-col items-center my-12">
      {/* New feature and dashboard link */}
      <div
        className="flex items-center gap-3 p-1.5"
        style={{
          width: '340px',
          height: '32px',
          padding: '4px 10px 4px 4px',
          borderRadius: '16px',
          border: '1px solid #E9D7FE',
          marginBottom: '-10px', // Moves the box up a bit
          backgroundColor: '#E9D7FE',
        }}
      >
        {/* New feature badge */}
        <span
          className="px-4 py-1 font-medium text-sm"
          style={{
            backgroundColor: 'white',
            color: '#7F56D9',
            border: '1px solid #D6BBFB',
            borderRadius: '16px', // Full border-radius for the badge
            padding: '2px',
          }}
        >
          New feature
        </span>

        {/* Check out the team dashboard link */}
        <p
          href="#"
          className="text-sm font-medium hover:no-underline"
          style={{ color: '#7F56D9' }}
        >
          Check out the team dashboard →
        </p>
      </div>

      {/* Main Heading and Description */}
      <div className="text-center max-w-4xl mt-6"> {/* Increase margin-top to add more space */}
        <h1 className="text-5xl font-bold mb-4">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center w-full">
          <button className="px-6 py-3 w-11/12 sm:w-auto border border-[#7F56D9] text-[#7F56D9] rounded-lg bg-white mx-auto sm:mx-0">
            Demo
          </button>
          <button className="px-6 py-3 w-11/12 sm:w-auto bg-[#7F56D9] text-white rounded-lg mx-auto sm:mx-0">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
