import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (

    <div className="flex flex-col items-center text-center max-w-sm mx-auto p-4">
     
      <div className="bg-[#0c0c14] border border-gray-700 p-4 rounded-full mb-4 shadow-lg">
        <div className="bg-blue-600 p-4 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div> 
     
  );
}
