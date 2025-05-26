import React from "react";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 py-4 ">
      <button onClick={() => navigate("/")} >
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="NOLAN Logo" className="h-15 w-25"  />
        {/* <span className="text-xl font-semibold text-white">NOLAN</span> */}
      </div></button>
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
        {["About Us", "Pricing", "Features", "Blog", "Education", "Studios"].map((item) => (
          <li key={item} className="hover:text-blue-500 cursor-pointer">{item}</li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button   onClick={() => navigate("/login")} className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 flex items-center">
          <LogIn className="mr-2 w-4 h-4" /> Log in
        </button>
     
      </div>
    </nav>
  );
}
