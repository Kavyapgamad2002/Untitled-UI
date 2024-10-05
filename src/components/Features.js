import React from 'react';
import inbox from '../images/Features/inbox.png';
import instantAnswer from '../images/Features/instant-answer.png';
import reports from '../images/Features/reports.png';
import customers from '../images/Features/customers.png';
import integrations from '../images/Features/integrations.png';
import support from '../images/Features/support.png';

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center py-24 gap-16">
      {/* First Container */}
      <div className="text-center">
        <h6 className="text-[#6941C6] text-[16px] font-semibold leading-[24px] mb-2">
          Features
        </h6>
        <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] mb-2">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-[#475467] text-[20px] font-normal leading-[30px] mb-2">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. <br /> Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Second Container */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center w-full max-w-[1280px] mx-auto px-4 gap-8">
        {/* First Row of Boxes */}
        <div className="flex flex-col md:flex-row w-full gap-8">
          {/* Box 1 */}
          <div className="flex flex-col items-center w-full md:w-[384px] gap-4">
            <img src={inbox} alt="Inbox" className="w-[48px] h-[48px]" />
            <h1 className="font-bold text-[20px]">Share team inboxes</h1>
            <p>
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same
              page and in the loop.
            </p>
          </div>
          {/* Box 2 */}
          <div className="flex flex-col items-center w-full md:w-[384px] gap-4">
            <img src={instantAnswer} alt="Instant Answer" className="w-[48px] h-[48px]" />
            <h3 className="font-bold text-[20px]">Deliver instant answers</h3>
            <p>
              An all-in-one customer service platform that helps you balance everything your
              customers need to be happy.
            </p>
          </div>
          {/* Box 3 */}
          <div className="flex flex-col items-center w-full md:w-[384px] gap-4">
            <img src={reports} alt="Reports" className="w-[48px] h-[48px]" />
            <h3 className="font-bold text-[20px]">Manage your team with reports</h3>
            <p>
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and
              drill down on the data in a couple of clicks.
            </p>
          </div>
        </div>

        {/* Second Row of Boxes */}
        <div className="flex flex-col md:flex-row w-full gap-8 mt-8 md:mt-0">
          {/* Box 4 */}
          <div className="flex flex-col items-center w-full md:w-[384px] gap-4">
            <img src={customers} alt="Connect with Customers" className="w-[48px] h-[48px]" />
            <h3 className="font-bold text-[20px]">Connect with customers</h3>
            <p>
              Solve a problem or close a sale in real-time with chat. If no one is available,
              customers are seamlessly routed to email without confusion.
            </p>
          </div>
          {/* Box 5 */}
          <div className="flex flex-col items-center w-full md:w-[384px] gap-4">
            <img src={integrations} alt="Tools" className="w-[48px] h-[48px]" />
            <h3 className="font-bold text-[20px]">Connect the tools you already use</h3>
            <p>
              Explore 100+ integrations that make your day-to-day workflow more efficient and
              familiar. Plus, our extensive developer tools.
            </p>
          </div>
          {/* Box 6 */}
          <div className="flex flex-col items-center w-full md:w-[384px] gap-4">
            <img src={support} alt="Support" className="w-[48px] h-[48px]" />
            <h3 className="font-bold text-[20px]">Our people make the difference</h3>
            <p>
              We’re an extension of your customer service team, and all of our resources are free.
              Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
