import React from "react";

export default function HeroSection() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-30 relative">
        <div className="relative max-w-2xl mb-10 md:mb-0">
          <div className="absolute left-[-200px] top-1/2 transform -translate-y-1/2 z-0">
            <div className="relative w-[900px] h-[900px]">
              {/* Gradient Background Circle Layer */}
              <div className="absolute inset-0 m-auto w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500 to-[#16181C] opacity-20 blur-2xl mb-25 mr-55 pr-25"></div>

              {/* Circle Borders */}
              <div className="absolute inset-0 m-auto w-[800px] h-[800px] rounded-full border border-[#c79cbd] opacity-30"></div>
              <div className="absolute inset-0 m-auto w-[700px] h-[700px] rounded-full border border-[#c79cbd] opacity-30"></div>
              <div className="absolute inset-0 m-auto w-[600px] h-[600px] rounded-full border border-[#c79cbd] opacity-30"></div>
            </div>
          </div>
          {/* <div className="absolute -top-20 -left-20 w-[200px] h-[200px] border-2 border-t-0 border-r-0 rounded-full rotate-[-45deg] opacity-20 z-0 border-gray-300" />
        <div className="absolute -bottom-24 left-12 w-[250px] h-[250px] border-2 border-b-0 border-l-0 rounded-full rotate-[30deg] opacity-15 z-0 border-gray-300" />
        <div className="absolute top-1/2 -right-24 w-[180px] h-[180px] border-2 border-t-0 border-l-0 rounded-full rotate-[-60deg] opacity-10 z-0 border-gray-300" /> */}

          <p className="relative z-10 text-5xl font-medium md:text-2xl leading-tight text-white">
            <h2 className="text-4xl font-medium">
              {" "}
              Bring your film project to life
            </h2>
            <br />
            <span className="text-4xl font-medium">from</span>{" "}
            <span className="text-white text-7xl font-bold">idea</span>{" "}
            <span className="text-4xl font-medium">to </span>
            <span className="text-white text-7xl font-bold">production</span>
          </p>
          <button className="relative z-10 mt-8 bg-blue-600 hover:bg-blue-700 text-lg font-semibold px-6 py-3 rounded-full">
            Start Creating
          </button>
        </div>

        <div className="w-full md:w-1/2">
          {" "}
          <video
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
              border: "1px solid #0ea5e9",
              boxShadow: "0 0 30px #0ea5e9",
              transform: "perspective(1000px) rotateY(-15deg)",
              transformStyle: "preserve-3d",
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            {" "}
            <source src="/meet_bryce.mp4" type="video/mp4" /> Your browser does
            not support the video tag.{" "}
          </video>{" "}
        </div>
      </section>
      <section className="flex items-center justify-center px-8 text-center">
        <div>
          <h2 className="text-5xl font-bold md:text-4xl text-white mb-4">
            NolanAI is a collaborative film production suite
          </h2>
          <p className="text-xl md:text-lg text-white max-w-6xl mx-auto tracking-widest">
            "covering the full film production process from concept creation and
            screenwriting to planning and stage production."
          </p>
        </div>
      </section>
    </div>
  );
}
