import React, { useState } from "react";

// Import images
import image1 from "../images/Avatar/avatar-1.png";
import image2 from "../images/Avatar/avatar-3.png";
import image3 from "../images/Avatar/avatar-2.png";

const FAQ = () => {
  const [open, setOpen] = useState(1);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "You can change your plan at any time to fit your needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time, effective at the end of your current billing cycle.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add additional details such as your VAT number, billing address, and more.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is automatic and you will be charged at the beginning of each billing cycle based on your chosen plan.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your email by going into your account settings and updating your contact information.",
    },
  ];

  return (
    <div className="w-full py-12 md:py-24 px-4 md:px-8">
      {/* First Container */}
      <div className="max-w-screen-xl mx-auto text-center space-y-8">
        <h1 className="text-2xl md:text-3xl font-semibold leading-8 md:leading-[44px]">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-xl font-normal leading-6 md:leading-[30px]">
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* Second Container */}
      <div className="max-w-screen-lg mx-auto py-8 md:py-16 space-y-8">
        {" "}
        {/* Adjusted max width */}
        <div className="space-y-4 md:space-y-8 w-full">
          {/* FAQ Items */}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b ${
                open === index + 1 ? "pb-6" : "pb-0"
              } cursor-pointer`}
              onClick={() => toggleFAQ(index + 1)}
            >
              <div className="flex justify-between items-center py-4">
                <p className="text-base md:text-lg font-semibold">
                  {faq.question}
                </p>
                <span className="w-6 h-6 flex justify-center items-center border border-black rounded-full">
                  {open === index + 1 ? "-" : "+"}
                </span>
              </div>
              {open === index + 1 && (
                <div className="text-base font-normal">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Third Container with Images and Background Color */}
      <div className="max-w-screen-xl mx-auto py-8 md:py-16 space-y-8 text-center bg-[#F9FAFB] rounded-tl-[16px]">
        {/* Images */}
        <div className="relative w-full mx-auto flex justify-center items-center">
          <div className="relative w-[240px] h-[240px] mx-auto">
            {/* Left Image */}
            <div
              className="absolute w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white z-0 left-[-30px] top-[40px]"
              style={{ background: "#E0E0E0" }}
            >
              <img
                src={image1}
                alt="Person 1"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Center Image (Prominent) */}
            <div
              className="absolute w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white z-10 left-[50px] top-0"
              style={{ background: "#E0E0E0" }}
            >
              <img
                src={image2}
                alt="Person 2"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Image */}
            <div
              className="absolute w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white z-0 right-[-30px] top-[40px]"
              style={{ background: "#E0E0E0" }}
            >
              <img
                src={image3}
                alt="Person 3"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="text-base">
          <h4 className="text-lg md:text-xl font-bold mb-2">
            Still have questions?
          </h4>
          <p>
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <button className="bg-[#7F56D9] text-white py-2 px-6 rounded-md">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
