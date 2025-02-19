import React from "react";
import logo from "../../assets/logo.png"; 

function Loading() {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[#0B0B0B] z-50 opacity-100 transition-opacity duration-1000">
      <div className="text-center">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 glow-effect"
        />
      </div>
    </div>
  );
}

export default Loading;
