import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";
  return (
    <div className={darkThemeClass}>
      <element
        id="4004a22d-1bde-466a-8ee4-933415165448"
        data-section-id="4004a22d-1bde-466a-8ee4-933415165448"
      >
        <div id="root">
          <footer
            id="footer"
            className="pt-16 pb-8 bg-slate-50 dark:bg-neutral-900 text-neutral-800 dark:text-white"
          >
            <div className="container mx-auto px-4">
              {/* <!-- Main Footer Content --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* <!-- Column 1: About & Contact --> */}
                <div>
                  <div className="mb-6">
                    <NavLink to="/" className="flex items-center">
                      <span className="text-[#FF6B00] font-bold text-3xl">
                        AUNIT
                      </span>
                    </NavLink>
                  </div>
                  <p className="opacity-80 mb-6 text-neutral-800 dark:text-white">
                    We are a leading technology company specializing in
                    innovative digital solutions for businesses of all sizes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start text-neutral-800 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#FF6B00] mt-1 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="opacity-80">
                        Gujarat International Financa,Tech-City,
                        <br />
                        Gandhinagar, Gujarat 382050
                      </p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#FF6B00] mt-1 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href="mailto:info@aunit.in"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300"
                      >
                        info@aunit.in
                      </a>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#FF6B00] mt-1 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href="tel:+14155552671"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300"
                      >
                        +91 6353735795
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Column 2: Quick Links --> */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/portfolio"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/testiminols"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Testimonials
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Team
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* <!-- Column 3: Additional Links --> */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/contact"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/whyjoin"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Careers
                      </NavLink>
                    </li>
                    <li>
                      <a
                        href="#privacy"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#terms"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="opacity-80 hover:text-[#FF6B00] transition-colors duration-300 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Column 4: Newsletter --> */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
                  <p className="opacity-80 mb-4">
                    Subscribe to our newsletter for the latest updates, industry
                    insights, and tech trends.
                  </p>
                  <form className="mb-6">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="px-4 py-3 text-white   bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]
  border border-[#CBD5E1]
  dark:bg-neutral-800 dark:border-neutral-700
  rounded-md
focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300 w-full"
                        required
                      />
                      <button
                        type="submit"
                        className="px-4 py-3 bg-[#FF6B00]  font-medium rounded-md hover:bg-[#FF8A3D] text-white transition-colors duration-300 whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>

                  {/* <Follow Us --> */}
                  <div className=" text-neutral-800 dark:text-white">
                    <h4 className="font-semibold mb-4">Follow Us</h4>

                    {/* Facebook --> */}
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="h-10 w-10 bg-slate-300 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      {/* Twitter --> */}
                      <a
                        href="#"
                        className="h-10 w-10 bg-slate-300 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>

                      {/* <Ig --> */}
                      <a
                        href="https://www.instagram.com/aunit.in?igsh=YTQ3cjR2cTY2dTRy&utm_source=qr"
                        className="h-10 w-10 bg-slate-300 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>

                      {/* <LinkedIn --> */}
                      <a
                        href="#"
                        className="h-10 w-10 bg-slate-300 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Divider --> */}
              <div className="border-t border-neutral-800 mb-8"></div>

              {/* <!-- Bottom Footer --> */}
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="opacity-70 text-sm">
                    &copy; 2026 AUNIT Tech Services. All rights reserved.
                  </p>
                </div>
                <div className="flex space-x-6">
                  <a
                    href="#privacy"
                    className="text-sm opacity-70 hover:text-[#FF6B00] transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#terms"
                    className="text-sm opacity-70 hover:text-[#FF6B00] transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#cookies"
                    className="text-sm opacity-70 hover:text-[#FF6B00] transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>

              {/* <!-- Back to Top Button --> */}
              <div className="text-center mt-8">
                <a
                  href="#hero"
                  className="inline-flex items-center justify-center h-10 w-10 bg-[#FF6B00] rounded-full hover:bg-[#FF8A3D] transition-colors duration-300"
                  aria-label="Back to top"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </element>
      <script src="aunit\src\components\script.js"></script>
    </div>
  );
};

export default Footer;
