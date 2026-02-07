import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";



const testimonials = [
  {
    initials: "DS",
    name: "Dinesh Suthar",

    text: "AUNIT transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations.",
  },
  {
    initials: "GP",
    name: "Gaurang Patel",

    text: "Working with AUNIT on our mobile app was a game-changer. The app has been downloaded over 100,000 times in just three months!",
  },
  {
    initials: "AP",
    name: "Atri Patel",

    text: "AUNIT helped us streamline our fintech platform, leading to a 50% increase in user engagement.",
  },
];

const Testiminols = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slideWidth = 100; // percentage

  const { hash } = useLocation();

useEffect(() => {
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [hash]);


  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Apply translation effect when slide changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  }, [currentIndex]);

  return (
    <div className={darkThemeClass}>
      <section
        id="testimonials"
        className="py-20 bg-slate-100 dark:bg-neutral-900 text-neutral-900 dark:text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl pt-12 font-bold mb-4">
            Client <span className="text-[#FF6B00]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Don't just take our word for it. See what our clients have to say
            about working with AUNIT Tech Services.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonial-carousel relative max-w-5xl mx-auto overflow-hidden">
          <div
            ref={trackRef}
            className="testimonial-track flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="testimonial-slide w-full min-w-full px-4"
              >
              <div
  className="
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:bg-gradient-to-br
    dark:from-[#2B3441] dark:via-[#3A4351] dark:to-[#4A5568]

    border border-[#CBD5E1]
    dark:border-neutral-700

    hover:shadow-lg
    rounded-lg
    p-8 md:p-10
    shadow-lg
    relative
    transition-all duration-300
  "
>
 
                  <div className="absolute -top-5 -left-5 text-6xl text-[#FF6B00] opacity-50">
                    "
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center text-[#FF6B00] font-bold text-3xl flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-lg italic mb-6">"{t.text}"</p>
                      <div>
                        <h4 className="font-bold text-xl">{t.name}</h4>
                        <p className="text-[#FF6B00]">{t.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

                  </div>

        {/* Pagination Dots */}
        <div className="testimonial-dots flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#FF6B00]" : "bg-neutral-600"}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* <!-- Video Testimonials Section --> */}
<div id="our-work-with-clients" className="mt-20">
  <div className="text-center mb-12">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      Our Work With <span className="text-[#FF6B00]">Clients</span>
    </h3>
    <p className="max-w-2xl mx-auto opacity-80">
      Transforming Client Vision into Impactful Digital Experiences with
      Smart Execution.
    </p>
  </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Client Work 1 --> */}

            <div   id="client-ecommerce"
 className="video-testimonial dark:bg-neutral-800 bg-slate-300 rounded-lg overflow-hidden shadow-lg">
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/ecommerce.jpeg"
                  alt="E-Comerce Project"
                  className="absolute inset-0 w-full h-full object-cover  object-top scale-[1]"
                  loading="eager"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">
                  E-commerce Success Story
                </h4>

                <p className="opacity-80 mb-4">
                  Learn how we helped a retail business increase their online
                  sales by 300% in just six months.
                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-[#FF6B00] font-bold text-sm mr-3">
                    AP
                  </div>

                  <div>
                    <p className="font-semibold">Raj Singh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Client Work 2 --> */}
            <div   id="client-saas"
 className="video-testimonial dark:bg-neutral-800 bg-slate-300 rounded-lg overflow-hidden shadow-lg">
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/Saas.jpeg"
                  alt="SaaS Client Project"
                  className="absolute inset-0 w-full h-full object-cover object-top scale-[1]"
                  loading="eager"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">
                  SaaS Platform Development
                </h4>

                <p className="opacity-80 mb-4">
Look how our custom SaaS solution transformed their business operations                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-[#FF6B00] font-bold text-sm mr-3">
                    AS
                  </div>

                  <div>
                    <p className="font-semibold">Atin Sharma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Client Work 3 --> */}
            <div   id="client-mobile-app"
 className="video-testimonial dark:bg-neutral-800 bg-slate-300 rounded-lg overflow-hidden shadow-lg">
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/mobileapp.jpeg"
                  alt="Mobile App Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">
                  Mobile App Revolution
                </h4>

                <p className="opacity-80 mb-4">
                  Discover how our Mobile App Development enabled this Startup to secure funding and scale rapidly.                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-[#FF6B00] font-bold text-sm mr-3">
                    SJ
                  </div>

                  <div>
                    <p className="font-semibold">Swapnil Jadav</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testiminols;
