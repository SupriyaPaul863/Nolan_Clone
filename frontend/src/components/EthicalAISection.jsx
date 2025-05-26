import React from 'react';
import Button from './ui/button';

const EthicalAISection = () => {
  return (
    <section className=" text-white py-20 px-4 text-center space-y-12">
      {/* Top CTA Button */}
      <button className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300  text-lg px-6 py-3">
        Sign Up For Free →
      </button>

      {/* Heading and description */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold">
          Leading the charge in <span className="font-bold text-white">Ethical AI</span>
        </h2>
        <p className="text-lg text-gray-300">
          At NolanAI, we prioritize the ethical implications of AI in the creative industry.
          <br />
          We believe in AI-powered tools that enhance human-driven storytelling.
        </p>
      </div>

      {/* Learn More Button */}
      <button className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300  text-lg px-6 py-3">
        Learn more →
      </button>
      {/* Final bold statement */}
      <h3 className="text-3xl sm:text-4xl font-medium">
        From <span className="font-bold text-white">screen writing</span> to <span className="font-bold text-white">pre-production</span>,<br />
        we got you covered!
      </h3>
    </section>
  );
};

export default EthicalAISection;
