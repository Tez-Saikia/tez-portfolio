import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="bg-[#0B0B0B] flex flex-col items-center py-10 space-y-4 2xl:pt-">
      <Link 
      to={'/contact'} target="_blank"
      className="px-6 py-3 flex items-center justify-center text-black font-medium text-lg rounded-sm shadow-lg bg-white hover-cursor hover:bg-gray-200 transition md:w-56 md:h-16 md:text-2xl text-nowrap">
        Get in touch
      </Link>
      <div className="px-2 pt-4 sm:px-6">
        <p className="text-white text-sm sm:text-lg md:text-lg text-center max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl lg:text-lg 2xl:max-w-5xl">
          As a self-taught UI/UX designer and front-end developer, I thrive on
          challenges and excel at creating visually appealing and user-centered
          designs. My expertise allows me to deliver impactful and intuitive
          digital experiences, blending creativity with technical skill.
        </p>
      </div>
    </div>
  );
}

export default Footer;
