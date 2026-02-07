import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import backend from "./logo/backend/backend.svg";
import backend1 from "./logo/backend/backend1.svg";
import backend2 from "./logo/backend/backend2.svg";
import backend3 from "./logo/backend/backend3.svg";
import dotnet from "./logo/backend/dotnet.svg";
import ex from "./logo/backend/ex.svg";
import java from "./logo/backend/java.svg";
import cloud1 from "./logo/CLOUD/cloud1.svg";
import cloud2 from "./logo/CLOUD/cloud2.svg";
import design1 from "./logo/design/design1.svg";
import design2 from "./logo/design/design2.svg";
import design3 from "./logo/design/design3.svg";
import design4 from "./logo/design/design4.svg";
import design5 from "./logo/design/design5.svg";
import design6 from "./logo/design/design6.svg";
import design7 from "./logo/design/design7.svg";
import design8 from "./logo/design/design8.svg";
import design9 from "./logo/design/design9.webp";
import ecom1 from "./logo/E-commerce/ecom1.svg";
import ecom2 from "./logo/E-commerce/ecom2.svg";
import ecom3 from "./logo/E-commerce/ecom3.svg";
import ecom4 from "./logo/E-commerce/ecom4.svg";
import ecom5 from "./logo/E-commerce/ecom5.svg";
import f1 from "./logo/frontend/f1.svg";
import f2 from "./logo/frontend/f2.svg";
import f3 from "./logo/frontend/f3.svg";
import f4 from "./logo/frontend/f4.svg";
import f5 from "./logo/frontend/f5.svg";
import f6 from "./logo/frontend/f6.svg";
import f7 from "./logo/frontend/f7.svg";
import f8 from "./logo/frontend/f8.svg";
import f9 from "./logo/frontend/f9.svg";
import f10 from "./logo/frontend/f10.svg";
import m1 from "./logo/MOBILE/m1.svg";
import m2 from "./logo/MOBILE/m2.svg";
import m3 from "./logo/MOBILE/m3.svg";
import m4 from "./logo/MOBILE/m4.svg";
import m5 from "./logo/MOBILE/m5.svg";
const images = [
  backend,
  backend1,
  backend2,
  backend3,
  dotnet,
  ex,
  java,
  cloud1,
  cloud2,
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
  ecom1,
  ecom2,
  ecom3,
  ecom4,
  ecom5,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
  m1,
  m2,
  m3,
  m4,
  m5,
];

const Home1 = ({ mode }) => {
  const sliderRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [totalImages, setTotalImages] = useState(images.length);
  const [index, setIndex] = useState(0);
  const darkThemeClass = mode ? "dark" : "";

  useEffect(() => {
    // Initialize image width and total images
    if (sliderRef.current) {
      const firstImage = sliderRef.current.querySelector("img");
      if (firstImage) {
        setImageWidth(firstImage.clientWidth + 10); // Add margin
        setTotalImages(images.length);
      }
    }

    // Clone the first few images for infinite loop
    const slider = sliderRef.current;
    if (slider) {
      for (let i = 0; i < 5; i++) {
        const clone = slider.children[i].cloneNode(true);
        slider.appendChild(clone);
      }
    }
  }, [images]);

  useEffect(() => {
    const slider = sliderRef.current;

    const slideIcons = () => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (slider) {
          slider.style.transition = "transform 0.5s ease-in-out";
          slider.style.transform = `translateX(${-newIndex * imageWidth}px)`;

          // Reset to the start without transition when reaching the end
          if (newIndex >= totalImages) {
            setTimeout(() => {
              if (slider) {
                slider.style.transition = "none";
                slider.style.transform = `translateX(0px)`;
                setIndex(0);
              }
            }, 500);
          }
        }
        return newIndex;
      });
    };

    const interval = setInterval(slideIcons, 2000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [imageWidth, totalImages]);

  return (
    <div className={`${darkThemeClass} `}>
      <element
        id="a06b7b02-039b-4240-b2ac-f60166cbd89b"
        data-section-id="a06b7b02-039b-4240-b2ac-f60166cbd89b"
      >
        <div id="root text-neutral-900 bg-white dark:text-white dark:bg-neutral-900">
          <section
            id="hero"
            className="relative min-h-screen text-neutral-900 bg-white dark:text-white dark:bg-neutral-900 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 opacity-30">
                <svg
                  viewBox="0 0 1440 800"
                  preserveAspectRatio="none"
                  className="absolute w-full h-full"
                >
                  <path
                    d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    fill="#FF6B00"
                    fillOpacity="0.2"
                    className="animate-pulse"
                  >
                    <animate
                      attributeName="d"
                      dur="20s"
                      repeatCount="indefinite"
                      values="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,170.7C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></animate>
                  </path>
                </svg>
                <svg
                  viewBox="0 0 1440 800"
                  preserveAspectRatio="none"
                  className="absolute w-full h-full"
                >
                  <path
                    d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,122.7C672,149,768,235,864,240C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    fill="#C0C0C0"
                    fillOpacity="0.15"
                    className="animate-pulse"
                  >
                    <animate
                      attributeName="d"
                      dur="25s"
                      repeatCount="indefinite"
                      values="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,122.7C672,149,768,235,864,240C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,208C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,122.7C672,149,768,235,864,240C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></animate>
                  </path>
                </svg>
              </div>

              <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')]"
                opacity-10
              ></div>
            </div>

            <div className="absolute w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute w-40 h-40 top-1/4 -left-10 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] opacity-20 rounded-full blur-md animate-float"></div>
              <div className="absolute w-32 h-32 bottom-1/4 right-20 bg-gradient-to-tr from-[#C0C0C0] to-[#E0E0E0] opacity-20 rounded-full blur-md animate-float-slow"></div>
              <div className="absolute w-24 h-24 top-1/3 right-1/4 bg-gradient-to-bl from-[#FF6B00] to-[#C0C0C0] opacity-15 rounded-lg blur-md animate-float-medium"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <div className="mb-8 animate__animated animate__fadeIn">
                  <div className="inline-flex items-center">
                    <span className="text-5xl md:text-7xl font-bold">
                      <span className="text-[#FF6B00]">A</span>
                      <span className="dark:text-[#C0C0C0] text-neutral-600">
                        UNIT
                      </span>
                    </span>
                  </div>
                </div>

                <h1 className="dark:text-[#C0C0C0] text-neutral-600 text-4xl md:text-6xl font-bold mb-6 leading-tight animate__animated animate__fadeInUp">
                  Innovate. <span className="text-[#FF6B00]">Transform</span>.
                  Succeed.
                </h1>

                <p className="text-xl md:text-2xl dark:text-[#C0C0C0] text-neutral-600  mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                  Cutting-edge technology solutions designed to propel your
                  business into the future
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
                  {/* <div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s"> */}
                  <a
                    href="#services"
                    className="px-8 py-4 bg-[#FF6B00] hover:bg-[#FF8C00] dark:text-[#C0C0C0] text-neutral-900  font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  >
                    Explore Services
                  </a>
                  <NavLink
                    to="/contact"
                    className="px-8 py-4 bg-transparent border-2 border-neutral-900 dark:border-[#C0C0C0] dark:text-[#C0C0C0] text-neutral-900  hover:bg-[#C0C0C0]/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-8 w-8 animate-bounce ">
              <a
                href="#services"
                className="dark:text-white text-neutral-900 bg-white dark:bg-neutral-900 opacity-75 hover:opacity-100 transition-opacity"
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
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </a>
            </div>
          </section>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </div>
      </element>
      <element
        id="9d939d38-d2e8-4762-b9d0-f0ee873b1246"
        data-section-id="9d939d38-d2e8-4762-b9d0-f0ee873b1246"
      >
        <div id="root">
          <section id="services" className="py-20 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900  dark:text-white">
                  Our <span className="text-[#FF6B00]">Services</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-lg opacity-80 text-neutral-900  dark:text-white">
                  We offer a comprehensive range of digital solutions to help
                  your business grow and succeed in the digital landscape.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="bg-slate-100 dark:bg-neutral-800 h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center  rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    Website Development
                  </h3>
                  <p className="opacity-80 mb-4">
                    Create stunning, responsive websites that drive conversions
                    and enhance user experience.
                  </p>
                  <a
                    href="#website-development"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 bg-slate-100 dark:bg-neutral-800 mb-6 text-[#FF6B00] flex items-center justify-center rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    Mobile App Development
                  </h3>
                  <p className="opacity-80 mb-4">
                    Build native and cross-platform mobile apps that engage
                    users and drive business growth.
                  </p>
                  <a
                    href="#mobile-app-development"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-100 dark:bg-neutral-800 rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    SaaS Development
                  </h3>
                  <p className="opacity-80 mb-4">
                    Develop scalable and secure software-as-a-service solutions
                    tailored to your business needs.
                  </p>
                  <a
                    href="#saas-development"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-100 dark:bg-neutral-800 rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    E-commerce Solutions
                  </h3>
                  <p className="opacity-80 mb-4">
                    Create powerful online stores with seamless checkout
                    experiences and robust backend systems.
                  </p>
                  <a
                    href="#ecommerce-solutions"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-100 dark:bg-neutral-800 rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    Branding & UI/UX Design
                  </h3>
                  <p className="opacity-80 mb-4">
                    Craft memorable brand identities and intuitive user
                    interfaces that captivate your audience.
                  </p>
                  <a
                    href="#branding-design"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-100 dark:bg-neutral-800 rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    No-Code Development
                  </h3>
                  <p className="opacity-80 mb-4">
                    Quickly build and deploy applications without coding using
                    our powerful no-code platforms.
                  </p>
                  <a
                    href="#no-code-development"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-100 dark:bg-neutral-800 rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    CMS Development
                  </h3>
                  <p className="opacity-80 mb-4">
                    Build custom content management systems that make updating
                    your website simple and efficient.
                  </p>
                  <a
                    href="#cms-development"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>

                <div className="service-card text-neutral-900  dark:text-white bg-slate-300 dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-100 dark:bg-neutral-800 rounded-lg group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
                    Cloud Solutions
                  </h3>
                  <p className="opacity-80 mb-4">
                    Implement secure, scalable cloud infrastructure to improve
                    performance and reduce costs.
                  </p>
                  <a
                    href="#cloud-solutions"
                    className="text-[#FF6B00] inline-flex items-center group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </a>
                </div>
              </div>

              <div className="mt-16 text-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#FF6B00] dark:text-neutral-800 font-medium rounded-md hover:bg-[#FF8A3D] transition-colors duration-300 animate__animated animate__fadeIn"
                >
                  Discuss Your Project With Us
                </a>
              </div>
            </div>

            <div className="container mx-auto px-4 mt-24">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-neutral-800">
                  Our Tech <span className="text-[#FF6B00]">Stack</span>
                </h3>
                <div className="w-16 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto opacity-80 dark:text-white text-neutral-800">
                  We leverage cutting-edge technologies to build robust,
                  scalable, and secure applications.
                </p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="slider-container">
                  {/* <!-- Tech Stack Section --> */}
                  <div className="container mx-auto px-4 ">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                      {/* <!-- Tech Icons --> */}
                      <div className="slider-container">
                        <div className="slider-container overflow-hidden">
                          <div ref={sliderRef} className="slider flex">
                            {images.map((image, idx) => (
                              <img key={idx} src={image} alt={`Slide ${idx}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </element>
    </div>
  );
};

export default Home1;
