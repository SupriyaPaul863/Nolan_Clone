// src/components/SecureSection.jsx
import React from 'react';

const SecureSection = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center gap-10 ">
      <div className="flex justify-center items-center w-full md:w-1/3">
        <img src="/shield.webp" alt="Secure Shield" className="w-64 h-64" />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Secure</h2>
        <p className="text-xl font-medium mb-6">
          Don’t worry, your data is secure and encrypted with <span className="text-[#A5B4FC]">NolanAI</span>
        </p>
        <p className="text-base leading-relaxed text-gray-300">
          We take your privacy and the ownership of your work very seriously.
          We respect your creative content and have no rights over it. We do not
          use your work for training our models or for any other purposes
          without your explicit consent. Your scripts and content remain your
          intellectual property. So, when you create/upload or edit content
          using our software, you retain full ownership of the intellectual
          property. We do not claim any rights to your scripts or any other
          content you produce. Your creative work is yours and yours alone.
        </p>
      </div>
    </section>
  );
};

export default SecureSection;
