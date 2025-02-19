import React from "react";
import fitnessfury from "./Imgs/fit.png";
import feeling from "./Imgs/feeling.png";
import dreamify from "./Imgs/sleep.png";
import owaranai from "./Imgs/anime.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Project() {
  const technologies = [
    { name: "Figma", icon: <SiFigma className="text-white text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-white text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-white text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-white text-4xl" /> },
    { name: "React.js", icon: <FaReact className="text-white text-4xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-white text-4xl" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-white text-4xl" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-white text-4xl" />,
    },
  ];

  return (
    <div className="bg-[#0B0B0B] min-h-screen pt-28 pb-16 2xl:pt-36 shadow-[0px_-10px_20px_-5px_rgba(0,0,0,0.4)]">
      <h1 className="text-white text-3xl sm:text-5xl text-center mb-10 sm:mb-24 font-semibold md:text-7xl 2xl:text-7xl">
        Projects
      </h1>
      <ul className="flex flex-col items-center gap-16 xl:gap-24 pb-24">
        {/* FitnessFury - Image Left, Text Right */}
        <div
          className="w-[90%] p-12 xl:p-16 rounded-xl shadow-lg flex flex-col xl:flex-row items-center xl:justify-between gap-6"
          style={{ background: "linear-gradient(to top, #060606,  #404040)" }}
        >
          <li className="w-full flex flex-col xl:flex-row items-center xl:justify-between text-center xl:text-left">
            {/* Image */}
            <div className="w-full xl:w-1/2 flex items-center justify-center">
              <img
                src={fitnessfury}
                className="w-[250px] sm:w-[500px] md:w-[650px] h-auto object-contain mx-auto"
                alt="FitnessFury"
              />
            </div>

            {/* Text */}
            <div className="text-white pt-4 -ml-8 sm:text-left lg:text-left lg:pl-11 xl:w-1/2 xl:pl-12">
              <h2 className="text-2xl text-left sm:text-5xl font-bold md:text-6xl">
                FitnessFury
              </h2>
              <p className="text-xs text-left sm:text-xl lg:pt-4 opacity-80 md:text-2xl">
                An innovative fitness app that helps users stay on top of their
                fitness goals.
              </p>
              <h3 className="mt-4 flex items-center gap-2 text-white text-sm sm:text-2xl md:text-3xl  underline underline-offset-4">
                <a
                  href={import.meta.env.VITE_FIRST_CASESTUDY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover-cursor"
                >
                  Case Study <FaArrowRightLong className="text-white" />
                </a>
              </h3>
            </div>
          </li>
        </div>

        {/* Feeling - Image Right, Text Left */}
        <div
          className="w-[90%] p-12 xl:p-16 rounded-xl shadow-lg flex flex-col xl:flex-row-reverse items-center xl:justify-between gap-6"
          style={{ background: "linear-gradient(to top, #060606,  #404040)" }}
        >
          <li className="w-full flex flex-col xl:flex-row-reverse items-center xl:justify-between text-center xl:text-left">
            {/* Image */}
            <div className="w-full xl:w-1/2 flex items-center justify-center">
              <img
                src={feeling}
                className="w-[250px] sm:w-[500px] md:w-[650px] h-auto object-contain mx-auto"
                alt="Feeling"
              />
            </div>

            {/* Text */}
            <div className="text-white pt-4 -ml-8  sm:text-left lg:pl-8 lg:text-left xl:w-1/2 xl:pr-12">
              <h2 className="text-2xl text-left sm:text-5xl font-bold md:text-6xl">
                Feeling
              </h2>
              <p className="text-left text-xs sm:text-xl lg:pt-4 opacity-80 md:text-2xl">
                A website dedicated to artistic and creative photography
                portfolios.
              </p>
              <h3 className="mt-4 flex items-center gap-2 text-white text-sm sm:text-2xl md:text-3xl underline underline-offset-4">
                <a
                  href={import.meta.env.VITE_SECOND_CASESTUDY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover-cursor"
                >
                  Case Study <FaArrowRightLong className="text-white" />
                </a>
              </h3>
            </div>
          </li>
        </div>

        {/* Dreamify - Image Left, Text Right */}
        <div
          className="w-[90%] p-12 xl:p-16 rounded-xl shadow-lg flex flex-col xl:flex-row items-center xl:justify-between gap-6"
          style={{ background: "linear-gradient(to top, #060606,  #404040)" }}
        >
          <li className="w-full flex flex-col xl:flex-row items-center xl:justify-between text-center xl:text-left">
            {/* Image */}
            <div className="w-full xl:w-1/2 flex items-center justify-center">
              <img
                src={dreamify}
                className="w-[250px] sm:w-[500px] md:w-[650px] h-auto object-contain mx-auto"
                alt="Dreamify"
              />
            </div>

            {/* Text */}
            <div className="text-white pt-4 -ml-8  sm:text-left lg:text-left xl:w-1/2 xl:pl-12">
              <h2 className="text-2xl text-left sm:text-5xl font-bold md:text-6xl">
                Dreamify
              </h2>
              <p className="text-left text-xs sm:text-xl lg:pt-4 opacity-80 md:text-2xl">
                Track and analyze your sleep patterns with AI-powered insights.
              </p>
              <h3 className="mt-4 flex items-center gap-2 text-white text-sm sm:text-2xl md:text-3xl underline underline-offset-4">
                <a
                  href={import.meta.env.VITE_THIRD_SUMMARY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover-cursor"
                >
                  Summary <FaArrowRightLong className="text-white" />
                </a>
              </h3>
            </div>
          </li>
        </div>

        {/* Owaranai - Image Right, Text Left */}
        <div
          className="w-[90%] p-12 xl:p-16 rounded-xl shadow-lg flex flex-col xl:flex-row-reverse items-center xl:justify-between gap-6"
          style={{ background: "linear-gradient(to top, #060606,  #404040)" }}
        >
          <li className="w-full flex flex-col xl:flex-row-reverse items-center xl:justify-between text-center xl:text-left">
            {/* Image */}
            <div className="w-full xl:w-1/2 flex items-center justify-center">
              <img
                src={owaranai}
                className="w-[250px] sm:w-[500px] md:w-[650px] h-auto object-contain mx-auto"
                alt="Owaranai"
              />
            </div>

            {/* Text */}
            <div className="text-white pt-4 -ml-8 lg:pl-11 sm:text-left sm:pt-16 lg:text-left lg:pt-20 xl:w-1/2 xl:pr-12">
              <h2 className="text-2xl text-left sm:text-5xl font-bold md:text-6xl">
                Owaranai
              </h2>
              <p className="text-left text-xs sm:text-xl lg:pt-4 opacity-80 md:text-2xl">
                Explore your favorite animes and explore details of your
                favorite series.
              </p>
              <h3 className="mt-4 flex items-center gap-2 text-white text-sm sm:text-2xl md:text-3xl  underline underline-offset-4">
                <a
                  href={import.meta.env.VITE_FOURTH_SUMMARY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover-cursor"
                >
                  Summary <FaArrowRightLong className="text-white" />
                </a>
              </h3>
            </div>
          </li>
        </div>
      </ul>

      <>
        {/* Skills */}
        <h1 className="text-white text-3xl sm:text-5xl text-center mb-10 font-semibold sm:mb-24 md:text-7xl">
          My Stacks
        </h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8  text-white items-center justify-center  md:grid-cols-3 2xl:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-44  p-6 rounded-xl shadow-lg hover:scale-105 transition-transform bg-gray-900"
              >
                {tech.icon}
                <span className="mt-2 text-sm font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* Horizontal Line to Separate Footer */}
      <hr className="border-t border-gray-700 w-[90%] mx-auto my-10" />
    </div>
  );
}

export default Project;
