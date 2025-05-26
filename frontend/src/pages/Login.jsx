import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ You are logged in! Token: ${data.token}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Network error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute left-[-200px] top-1/2 transform -translate-y-1/2 z-0">
        <div className="relative w-[900px] h-[900px]">
          <div className="absolute inset-0 m-auto w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500 to-[#16181C] opacity-20 blur-2xl"></div>
          <div className="absolute inset-0 m-auto w-[800px] h-[800px] rounded-full border border-[#c79cbd] opacity-30"></div>
          <div className="absolute inset-0 m-auto w-[700px] h-[700px] rounded-full border border-[#c79cbd] opacity-30"></div>
          <div className="absolute inset-0 m-auto w-[600px] h-[600px] rounded-full border border-[#c79cbd] opacity-30"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center px-6 py-16 relative z-10">
        {/* Left */}
        <div className="flex-1 text-left space-y-4 z-10">
          <h2 className="text-2xl font-bold text-white uppercase">Log In</h2>
          <h1 className="text-5xl md:text-6xl font-light leading-snug">
            Unlock <span className="font-black">the</span> full{" "}
            <span className="font-extrabold">NOLAN</span>
            <br />
            Experience
          </h1>
        </div>

        {/* Right */}
        <div className="flex-1 mt-10 md:mt-0 z-10">
          <div className="bg-[#0E1014] p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
            <h3 className="text-2xl text-center mb-6 font-medium">LOG IN</h3>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full text-white focus:outline-none border-b"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full text-white focus:outline-none border-b"
              />
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-100 transition"
              >
                <FcGoogle className="text-xl" /> Continue with Google
              </button>
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-100 transition"
              >
                <FaEnvelope className="text-xl" /> Continue with Email
              </button>
            </div>

            <div className="text-center mt-6">
              <a
                href="#"
                className="text-blue-400 font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <p className="text-xs text-center text-gray-300 mt-6">
            By signing up, you agree to the
            <a href="#" className="text-blue-400 ml-1 hover:underline">
              Terms of Service
            </a>{" "}
            and
            <a href="#" className="text-blue-400 ml-1 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Feedback Message */}
          {message && (
            <p className="mt-4 text-center text-sm font-semibold text-yellow-400">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';
// import { FaGoogle, FaEnvelope } from 'react-icons/fa';
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center  text-white relative overflow-hidden">
//       {/* Circles */}
//       <div className="absolute left-[-200px] top-1/2 transform -translate-y-1/2 z-0">
//   <div className="relative w-[900px] h-[900px]">
//     {/* Gradient Background Circle Layer */}
//     <div className="absolute inset-0 m-auto w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500 to-[#16181C] opacity-20 blur-2xl "></div>

//     {/* Circle Borders */}
//     <div className="absolute inset-0 m-auto w-[800px] h-[800px] rounded-full border border-[#c79cbd] opacity-30"></div>
//     <div className="absolute inset-0 m-auto w-[700px] h-[700px] rounded-full border border-[#c79cbd] opacity-30"></div>
//     <div className="absolute inset-0 m-auto w-[600px] h-[600px] rounded-full border border-[#c79cbd] opacity-30"></div>
//   </div>
// </div>

//       <div className="flex flex-col md:flex-row w-full max-w-7xl items-center px-6 py-16 relative z-10">
//         {/* Left Side */}
//         <div className="flex-1 text-left space-y-4 z-10">
//           <h2 className="text-2xl font-bold text-white uppercase">Log In</h2>
//           <h1 className="text-5xl md:text-6xl font-light leading-snug">
//             Unlock <span className="font-black">the</span> full <span className="font-extrabold">NOLAN</span><br />
//             Experience
//           </h1>
//         </div>

//         {/* Right Side */}
//         <div className="flex-1 mt-10 md:mt-0 z-10">
//           <div className="bg-[#0E1014] p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
//             <h3 className="text-2xl text-center mb-6 font-medium">LOG IN</h3>

//             <div className="space-y-4">
//               <button className="w-full flex items-center justify-center gap-3 bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-100 transition">
//                 <FcGoogle className="text-xl" /> Continue with Google
//               </button>
//               <button className="w-full flex items-center justify-center gap-3 bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-100 transition">
//                 <FaEnvelope className="text-xl" /> Continue with Email
//               </button>
//             </div>

//             <div className="text-center mt-6">
//               <a href="#" className="text-blue-400 font-semibold hover:underline">Forgot Password?</a>
//             </div>
//           </div>

//           <p className="text-xs text-center text-gray-300 mt-6">
//             By signing up, you agree to the
//             <a href="#" className="text-blue-400 ml-1 hover:underline">Terms of Service</a> and
//             <a href="#" className="text-blue-400 ml-1 hover:underline">Privacy Policy</a>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
