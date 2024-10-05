import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      {/* First section */}
      <div
        className="bg-[#F9FAFB] py-24"
        style={{
          height: "374px",
          padding: "96px 0",
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Start your free trial</h2>
          <p className="text-gray-600 mt-2">
            Join over 4,000+ startups already growing with Untitled.
          </p>

          {/* Mobile and desktop button responsiveness */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-2">
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-md w-10/12 md:w-auto mb-2 md:mb-0">
              Learn more
            </button>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-md w-10/12 md:w-auto">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 md:gap-8 gap-y-8 px-6">
          {/* First Column */}
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>Overview</li>
              <li>Features</li>
              <li className="text-green-600">
                Solutions{" "}
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded ml-2 text-sm">
                  New
                </span>
              </li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h3 className="font-semibold">Use cases</h3>
            <ul className="mt-4 space-y-2">
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </div>

          {/* Fifth Column */}
          <div>
            <h3 className="font-semibold">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>

          {/* Sixth Column */}
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300 w-12/12 mt-4" />

        {/* Mobile stacking for logo and text */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between pl-5 pr-5 w-10/12 mx-auto space-y-4 md:space-y-0">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 pr-6" />
            <div className="text-xl font-semibold ml-2">Untitled UI</div>
          </div>
          <div >
            <p>&copy; 2077 Untitled UI. All rights reserved</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
