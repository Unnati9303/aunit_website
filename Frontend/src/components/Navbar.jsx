import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import aunitLogo from "../assets/aunitLogo.png";

const Navbar = ({ mode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const darkThemeClass = mode ? "dark" : "";
  useEffect(() => {
    const handleLinkClick = () => {
      setIsMobileMenuOpen(false);
    };

    const mobileLinks = document.querySelectorAll("#mobile-menu a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div
      className={`${darkThemeClass} antialiased text-blue-500 flex flex-col`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black"
      >
        Skip to main content
      </a>

      <main id="main-content" className="flex-1 relative h-full">
        <nav className="fixed w-full z-50 text-neutral-900 bg-white dark:text-white dark:bg-neutral-900 bg-opacity-80 dark:backdrop-blur-md border-b dark:border-neutral-800">
          <div className="container mx-auto px-4 py-5">
            {" "}
            {/* Increased padding-top and padding-bottom */}
            <div className="flex justify-between items-center text-black dark:text-white">
              <NavLink to="/" className="text-3xl font-bold flex items-center">
                {" "}
                {/* Increased text size */}
                <img className="h-12 w-12" src={aunitLogo} />
              </NavLink>

              <ul className="hidden md:flex space-x-6">
                <li>
                  <NavLink to="/" className="text-lg hover:text-[#FF6B00]">
                    {" "}
                    {/* Increased text size */}
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-lg  hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size */}
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className="text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size */}
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testiminols"
                    className="text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size */}
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="text-lg hover:text-[#FF6B00]">
                    {" "}
                    {/* Increased text size */}
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size */}
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className="text-lg hover:text-[#FF6B00]">
                    {" "}
                    {/* Increased text size */}
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whyjoin"
                    className="text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size */}
                    Careers
                  </NavLink>
                </li>
              </ul>

              {/* Mobile menu button */}
              <button
                id="mobile-menu-button"
                className="md:hidden focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile menu */}
            <div
              id="mobile-menu"
              className={`md:hidden ${
                isMobileMenuOpen ? "" : "hidden"
              } animate__animated animate__fadeIn `}
            >
              <ul className="pt-4 pb-3 space-y-3 text-black dark:text-white">
                {" "}
                {/* Increased spacing between items */}
                <li>
                  <NavLink
                    to="/"
                    className="block py-3 px-4 text-lg  hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-3 px-4 text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className="block py-3 px-4 text-l hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testiminols"
                    className="block py-3 px-4 text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className="block py-3 px-4 text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-3 px-4 text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className="block py-3 px-4 text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/whyjoin"
                    className="block py-3 px-4 text-lg hover:text-[#FF6B00]"
                  >
                    {" "}
                    {/* Increased text size and padding */}
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Navbar;
