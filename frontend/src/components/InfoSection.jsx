import React from "react";

const InfoSection = ({
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  reverse = false,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className={`text-white ${reverse ? "md:order-2" : "md:order-1"}`}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            {title}
            <br />
            <span className="font-bold text-white">{highlight}</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">{description}</p>
          <a
            href={buttonLink}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            {buttonText} →
          </a>
        </div>

        {/* Image Section */}
        <div className={`flex justify-center ${reverse ? "md:order-1" : "md:order-2"}`}>
          <div
            className="w-72 md:w-80"
            style={{
              transform: `perspective(1000px) skewY(-20deg) ${reverse ? "skewY(-20deg)" : "skewY(40deg)"}`,
              borderRadius: "1rem",
              border: "1px solid #0ea5e9",
              boxShadow: "0 0 30px #0ea5e9",
              overflow: "hidden",
            }}
          >
            <img
              src={imageSrc}
              alt="Visual"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;




