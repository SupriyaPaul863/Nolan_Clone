import React from 'react';
import { FaInstagram, FaXTwitter, FaYoutube, FaRedditAlien, FaDiscord } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#16181C] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row m-7 p-7 justify-between items-center gap-6 md:gap-0">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo1.jpg" alt="Nolan Logo" className="h-8" />
          <span className="font-bold text-lg">NOLAN</span>
        </div>

        {/* Middle: Text Links */}
        <div className="text-center text-sm text-gray-300 space-y-2">
          <p>© NolanAI, Inc. 2025</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="#" className="hover:underline">Testimonials</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:underline">Referral Program</a>
            <span>|</span>
            <a href="#" className="hover:underline">Releases</a>
            <span>|</span>
            <a href="#" className="hover:underline">FAQ</a>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-gray-300 text-xl">
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaXTwitter /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
          <a href="#" className="hover:text-white"><FaRedditAlien /></a>
          <a href="#" className="hover:text-white"><FaDiscord /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
