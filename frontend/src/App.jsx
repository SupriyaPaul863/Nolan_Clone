import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"; // Import Navbar here
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0c0c14] to-[#121622] text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login"; // Create this page

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }









