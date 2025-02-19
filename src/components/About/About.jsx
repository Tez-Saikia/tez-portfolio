import React from "react";
import Nav from "../Nav/Nav";
import img from "./img.jpg";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <Nav />

      {/* Image & First Two Paragraphs */}
      <div className="px-4 pt-20 sm:flex sm:items-start sm:gap-6 lg:items-center lg:justify-center lg:px-12 ">
        <img
          className="rounded-lg sm:w-72 lg:w-[28rem] md:w-96 flex-shrink-0 xl:w-[25rem] transition-all duration-300 ease-in-out filter sm:blur-none md:blur-none lg:blur-md xl:blur-md 2xl:blur-md  hover:blur-none"
          src={img}
          alt="Your Image Description"
        />

        <div className="pt-4 space-y-4 sm:w-1/2 sm:pt-6 md:pt-0 lg:pt-6 xl:pt-2 lg:space-y-3">
          <p className="text-white text-sm font-light md:text-[1.1rem] lg:text-lg 2xl:text-[1.3rem]">
            I am a passionate UI/UX designer and front-end developer based in
            Assam, India. I specialize in creating user-centered designs and
            developing functional, visually appealing websites. With expertise
            in HTML, CSS, JavaScript, React.js, Tailwind CSS, and TypeScript, I
            am dedicated to transforming ideas into seamless digital
            experiences.
          </p>
          <p className="text-white text-sm font-light md:text-[1.1rem] lg:text-lg 2xl:text-[1.3rem]">
            Outside of the digital realm, I am a fervent Karate enthusiast and a
            National-level Gold medalist. The way I tackle opponents with
            different techniques in tournaments mirrors my approach to solving
            design challenges. I apply diverse strategies and innovative
            solutions to create exceptional designs that meet users' needs.
          </p>
          <p className="text-white text-sm font-light md:text-[1.1rem] lg:text-lg 2xl:text-[1.3rem] hidden sm:hidden md:hidden lg:block">
            In addition to my design and development pursuits, I am currently
            pursuing my graduation with honors in English. This academic journey
            enhances my ability to communicate effectively, think critically,
            and approach problems with a well-rounded perspective.
          </p>
        </div>
      </div>

      {/* Remaining Paragraphs */}
      <div className="px-4  pb-8 space-y-4 lg:pt-6 lg:px-12 lg:space-y-6 xl:px-28 xl:pb-19 2xl:px-44">
        <p className="text-white text-sm font-light md:text-[1.1rem] lg:hidden  xl:hidden 2xl:text-[1.3rem] 2xl:hidden">
          In addition to my design and development pursuits, I am currently
          pursuing my graduation with honors in English. This academic journey
          enhances my ability to communicate effectively, think critically, and
          approach problems with a well-rounded perspective.
        </p>

        <p className="text-white text-sm font-light md:text-[1.1rem] lg:text-lg 2xl:text-[1.3rem]">
          My journey in design and development is driven by a commitment to
          quality and continuous learning. Whether I am working on innovative
          projects like the FitnessFury app or crafting impactful websites for
          clients, my goal is to blend aesthetics with functionality to deliver
          exceptional results.
        </p>
        <p className="text-white text-sm font-light md:text-[1.1rem] lg:text-lg 2xl:text-[1.3rem]">
          Currently, I am seeking new opportunities to leverage my skills and
          passion for design in a professional setting. I hope you enjoy
          exploring my portfolio. If there's an opportunity to work together,
          I'd love to connect →
          <span className="inline-flex items-center space-x-3.5 ml-2 relative top-[7px] ">
            <a
              href="http://www.linkedin.com/in/tez-saikia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover-cursor text-[20px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[27px]"
            >
              <FaLinkedin  />
            </a>
            <a
              href="https://wa.me/916901037694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover-cursor text-[20px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[27px]"
            >
              <FaWhatsapp  />
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
