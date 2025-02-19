import React from "react";
import downArrow from "../../assets/downArrow.png";

function MainContent() {
  return (
    <div className="text-center pt-6 ">
      <h1
        className="pt-24 text-5xl sm:text-8xl sm:font-medium text-center text-white md:text-[9rem] lg:text-[10rem]
     xl:text-[10rem] 2xl:text-[14rem]"
      >
        Tez Saikia
      </h1>
      <div className="xl:pt-4">
        <p className="text-xs  pt-6 sm:pt-8 text-white md:text-[1rem] 2xl:text-lg">
          Hi, I’m a dynamic UI/UX designer and front-end developer.
        </p>
        <p className="text-xs  pt-2 sm:pt-1.5 sm:px-1.5 text-white md:text-[1rem] md:px-4 2xl:text-lg 2xl:pt-1">
          I transform ideas into intuitive designs and interactive experiences
          that captivate and engage users.
        </p>
      </div>

      {/* Animated Arrow Image */}
      <div className="mt-20 flex justify-center 2xl:mt-20">
        <div className="w-8 sm:w-10 h-14  bg-white  rounded-4xl shadow-lg flex items-center justify-center relative ">
          <img
            src={downArrow}
            alt="Scroll Down"
            className="w-4  h-4  animate-bounce filter invert-[20%] sepia-[10%] saturate-[500%] hue-rotate-[220deg] brightness-[90%] contrast-[90%]"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
