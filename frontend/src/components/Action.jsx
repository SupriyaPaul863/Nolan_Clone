// src/components/HeroSection.jsx
import React, { useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

const Action = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className=" text-white px-6 md:px-24 py-16 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl  mb-4">
            NolanAI <span className="text-white font-extrabold">in Action</span>
          </h1>
          <h2 className="text-gray-400 text-xl mb-6">Meet Bryce</h2>
          <p className="text-lg mb-4">
            An independent filmmaker who is utilizing the full power of NolanAI to break down scripts, create pitch decks and storyboards, and reach his ultimate goal.
          </p>
          <p className="text-lg mb-6">
            With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
            View premium plans <span>→</span>
          </button>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-1/2 relative">
          <video
            ref={videoRef}
            className="rounded-xl shadow-lg w-full"
            controls={false}
            src="/meet_bryce.mp4"
            poster="/bryce_thumbnail.png"
          />
          <button
  onClick={togglePlayback}
  className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-all"

//   className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all"
>
  {isPlaying ? (
    <PauseIcon className="h-6 w-6" />
  ) : (
    <PlayIcon className="h-6 w-6" />
  )}
</button>

       
        </div>
      </div>

      {/* Bottom Content */}
      <div className="mt-20 text-center md:text-center">
        <h2 className="text-6xl font-extrabold mb-8 tracking-wider">
          Up your Game <span className="text-white font-light">with NolanAI</span>
        </h2>
        <p className="text-lg text-gray-300">
          NolanAI is the ultimate tool for filmmakers looking to improve their craft. With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
        </p>
      </div>
    </section>
  );
};

export default Action;
