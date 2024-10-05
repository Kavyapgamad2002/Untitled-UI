import React from 'react';
import Logo from '../images/Testimonial/logo.png';
import ProfileImage from '../images/Testimonial/profile.png';

const Testimonial = () => {
  return (
    <div
      style={{
        background: '#F9FAFB',
        padding: '48px 16px', // Reduced padding for mobile
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Outer Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Content Box */}
        <div
          style={{
            width: '100%',
            maxWidth: '1216px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px', // Adjusted gap for better spacing
            opacity: 1,
            textAlign: 'center', // Centered text for mobile
          }}
        >
          {/* 1st Div: Logo and Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', // Centered the content
              gap: '10px',
            }}
          >
            <img
              src={Logo}
              alt="Sisyphus Logo"
              style={{ width: '24px', height: '40px' }} // Adjusted size
            />
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '40px',
                color: '#000',
                margin: 0, // Removed default margin
              }}
            >
              Sisyphus
            </h1>
          </div>

          {/* 2nd Div: Quote */}
          <div
            style={{
              width: '100%',
              maxWidth: '800px', // Added max width for mobile view
              opacity: 1,
            }}
          >
            <p
              style={{
                fontSize: '35px', // Reduced font size for mobile
                fontWeight: 500,
                lineHeight: '50px',
                letterSpacing: '-0.02em',
                color: '#000',
                margin: '0', // Removed default margin
                padding: '0 16px', // Added padding for mobile readability
              }}
            >
              “We’ve been using Untitled to kick start every new project and can’t imagine working
              without it.”
            </p>
          </div>

          {/* 3rd Div: Image, Name, and Position */}
          <div
            style={{
              width: '100%',
              maxWidth: '300px', // Limited width for the profile section
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Profile Image */}
            <img
              src={ProfileImage}
              alt="Candice Wu"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
              }}
            />

            {/* Name */}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '28px',
                margin: 0, // Removed default margin
              }}
            >
              Candice Wu
            </h3>

            {/* Position */}
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#475467',
                margin: 0, // Removed default margin
              }}
            >
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
