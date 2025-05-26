import React from 'react';

const TypesCard = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6 py-5">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Tilted Image */}
        <div className="flex justify-center md:justify-end ">
          <div className="w-full md:w-1/2">
            <img
              src="/writer.webp" // <-- replace with your image path
              alt="Screenwriting"
              className="rounded-2xl w-72 h-auto shadow-lg"
                   style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
              border: "1px solid #0ea5e9",
              boxShadow: "0 0 30px #0ea5e9",
              transform: "perspective(1000px) skewY(-20deg)",
              transformStyle: "preserve-3d",
            }}
       
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Enhance your <br />
            <span className="font-bold text-white">screenwriting experience</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            providing tailored solutions to overcome writer’s block and streamlining
            your creative process.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition">
            NolanAI for Screenwriters →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypesCard;
