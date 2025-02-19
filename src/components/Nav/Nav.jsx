import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex justify-between items-center p-6 relative z-50">
        <div className="w-12 sm:w-16 2xl:w-14">
          <img onClick={() => navigate("/")} src={Logo} alt="Logo" />
        </div>

        {/* Navigation buttons (Visible in lg) */}
        <div className="hidden lg:flex gap-4">
          <Link
            to={"/"}
            className={`px-4 py-2 rounded-full border transition-all 2xl:px-6 2xl:py-3 ${
              isActive("/")
                ? "bg-white text-black border-white font-medium 2xl:font-semibold hover-cursor"
                : "border-white text-white hover-cursor"
            }`}
          >
            My Works
          </Link>
          <Link
            to={"/about"}
            className={`px-4 py-2 rounded-full border transition-all 2xl:px-6 2xl:py-3 ${
              isActive("/about")
                ? "bg-white text-black border-white font-medium 2xl:font-semibold hover-cursor"
                : "border-white text-white hover-cursor"
            }`}
          >
            About Me
          </Link>
          <Link
            to={"/contact"}
            target="_blank"
            className={`px-4 py-2 rounded-full border transition-all 2xl:px-6 2xl:py-3 ${
              isActive("/contact")
                ? "bg-white text-black border-white font-medium 2xl:font-semibold hover-cursor"
                : "border-white text-white hover-cursor"
            }`}
          >
            Contact Me
          </Link>
        </div>

        {/* Hamburger Icon */}
        <img
          className="filter invert hover-cursor sm:w-8 lg:hidden"
          src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"
          alt="Menu"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-40`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0B0B0B] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="flex justify-end p-4 text-3xl md:text-4xl">
          <button className="hover-cursor" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
        <ul className="p-6 space-y-4 md:text-xl">
          <li>
            <Link
              to={"/"}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md hover-cursor"
            >
              My Works
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md hover-cursor"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              target="_blank"
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md hover-cursor"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
