import React, { useEffect } from "react";

const Portfolio1 = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";
  useEffect(() => {
    // Portfolio filtering
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    const handleFilterClick = (event) => {
      // Remove active class from all buttons
      filterBtns.forEach((button) => {
        button.classList.remove("active", "bg-[#FF6B00]");
        button.classList.add("bg-neutral-700");
      });

      // Add active class to clicked button
      event.target.classList.add("active", "bg-[#FF6B00]");
      event.target.classList.remove("bg-neutral-700");

      const filterValue = event.target.getAttribute("data-filter");

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        item.classList.add("animate__animated");

        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
          item.classList.remove("animate__fadeOutUp");
          item.classList.add("animate__fadeInUp");
        } else {
          item.classList.remove("animate__fadeInUp");
          item.classList.add("animate__fadeOutUp");

          // Hide element after animation
          setTimeout(() => {
            if (
              filterValue !== "all" &&
              item.getAttribute("data-category") !== filterValue
            ) {
              item.style.display = "none";
            }
          }, 500);
        }
      });
    };

    filterBtns.forEach((btn) =>
      btn.addEventListener("click", handleFilterClick),
    );

    // Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInUp",
              );
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    portfolioItems.forEach((item) => observer.observe(item));

    // Cleanup function
    return () => {
      filterBtns.forEach((btn) =>
        btn.removeEventListener("click", handleFilterClick),
      );
      observer.disconnect();
    };
  }, []);
  return (
    <div className={darkThemeClass}>
      <element
        id="9ef89459-0189-4a73-bebc-c4a3d68aa504"
        data-section-id="9ef89459-0189-4a73-bebc-c4a3d68aa504"
      >
        <div id="root" className="bg-slate-100 dark:bg-neutral-900">
          <section id="portfolio" className="py-20 ">
            <div className="container mx-auto px-4 text-neutral-800 dark:text-slate-100">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl pt-12 font-bold mb-4 text-neutral-800 dark:text-slate-100">
                  Our <span className="text-[#FF6B00]">Portfolio</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-lg opacity-80 text-neutral-800 dark:text-slate-100">
                  Explore our recent projects that showcase our expertise and
                  creativity in delivering exceptional digital solutions.
                </p>
              </div>

              {/* <!-- Filter Buttons --> */}
              <div className="flex flex-wrap justify-center mb-12 gap-3">
                <button
                  className="filter-btn active px-6 py-2 bg-[#FF6B00] text-white rounded-md transition-all duration-300"
                  data-filter="all"
                >
                  All Projects
                </button>
                <button
                  className="filter-btn px-6 py-2 bg-neutral-800 hover:bg-[#FF6B00] text-white rounded-md transition-all duration-300"
                  data-filter="web"
                >
                  Web Development
                </button>
                <button
                  className="filter-btn px-6 py-2 bg-neutral-800 hover:bg-[#FF6B00] text-white rounded-md transition-all duration-300"
                  data-filter="mobile"
                >
                  Mobile Apps
                </button>
                <button
                  className="filter-btn px-6 py-2 bg-neutral-800 hover:bg-[#FF6B00] text-white rounded-md transition-all duration-300"
                  data-filter="saas"
                >
                  SaaS Products
                </button>
                <button
                  className="filter-btn px-6 py-2 bg-neutral-800 hover:bg-[#FF6B00] text-white rounded-md transition-all duration-300"
                  data-filter="ecommerce"
                >
                  E-Commerce
                </button>
              </div>

              {/* <!-- Portfolio Grid --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Portfolio Item 1 --> */}
                <div className="portfolio-item group" data-category="web">
                  <div className="relative overflow-hidden rounded-lg bg-slate-300 dark:bg-neutral-600 h-64">
                    {/* <!-- Portfolio background with gradient overlay --> */}
<div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:from-[#1F2937]
    dark:via-[#374151]
    dark:to-[#4B5563]

    border border-[#CBD5E1]
    dark:border-neutral-700

    opacity-80
  "
></div>

                    {/* <!-- Portfolio content --> */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 ">
                          Modern E-Learning Platform
                        </h3>
                        <p className="text-sm opacity-90">
                          A comprehensive learning management system with
                          interactive courses and performance analytics.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          React.js
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Node.js
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          MongoDB
                        </span>
                      </div>
                    </div>

                    {/* <!-- Hover overlay --> */}
                    <div className=" absolute inset-0 bg-[#FF6B00] bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">
                          Modern E-Learning Platform
                        </h3>
                        <p className="mb-4">
                          A robust platform serving 10,000+ students with 95%
                          course completion rate.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-4 py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#FF6B00] transition-colors duration-300"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Portfolio Item 2 --> */}
                <div className="portfolio-item group" data-category="mobile">
                  <div className="relative overflow-hidden rounded-lg bg-slate-300 dark:bg-neutral-600 h-64">
                    {/* <!-- Portfolio background with gradient overlay --> */}
                  <div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:from-[#1F2937]
    dark:via-[#374151]
    dark:to-[#4B5563]

    border border-[#CBD5E1]
    dark:border-neutral-700

    opacity-80
  "
></div>

                    {/* <!-- Portfolio content --> */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Fitness Tracking App
                        </h3>
                        <p className="text-sm opacity-90">
                          A mobile application for tracking workouts, nutrition,
                          and health metrics with personalized recommendations.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          React Native
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Firebase
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          AI
                        </span>
                      </div>
                    </div>

                    {/* <!-- Hover overlay --> */}
                    <div className="absolute inset-0 bg-[#FF6B00] bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">
                          Fitness Tracking App
                        </h3>
                        <p className="mb-4">
                          Achieved 500,000+ downloads with an average rating of
                          4.8/5 on app stores.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-4 py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#FF6B00] transition-colors duration-300"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Item 3 --> */}
                <div className="portfolio-item group" data-category="saas">
                  <div className="relative overflow-hidden rounded-lg bg-slate-300 dark:bg-neutral-600 h-64">
                    {/* <!-- Portfolio background with gradient overlay --> */}
                    <div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:from-[#1F2937]
    dark:via-[#374151]
    dark:to-[#4B5563]

    border border-[#CBD5E1]
    dark:border-neutral-700

    opacity-80
  "
></div>

                    {/* <!-- Portfolio content --> */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">CRM Solution</h3>
                        <p className="text-sm opacity-90">
                          A comprehensive customer relationship management
                          system with advanced analytics and automation
                          features.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Vue.js
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Express.js
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          PostgreSQL
                        </span>
                      </div>
                    </div>

                    {/* <!-- Hover overlay --> */}
                    <div className="absolute inset-0 bg-[#FF6B00] bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">CRM Solution</h3>
                        <p className="mb-4">
                          Increased client's sales efficiency by 40% and reduced
                          customer response time by 65%.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-4 py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#FF6B00] transition-colors duration-300"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Item 4 --> */}
                <div className="portfolio-item group" data-category="ecommerce">
                  <div className="relative overflow-hidden rounded-lg bg-slate-300 dark:bg-neutral-600 h-64">
                    {/* <!-- Portfolio background with gradient overlay --> */}
                   <div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:from-[#1F2937]
    dark:via-[#374151]
    dark:to-[#4B5563]

    border border-[#CBD5E1]
    dark:border-neutral-700

    opacity-80
  "
></div>

                    {/* <!-- Portfolio content --> */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Luxury Fashion Store
                        </h3>
                        <p className="text-sm opacity-90">
                          An exclusive e-commerce platform for a high-end
                          fashion brand with AR try-on features.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Shopify
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          AR/VR
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Custom API
                        </span>
                      </div>
                    </div>

                    {/* <!-- Hover overlay --> */}
                    <div className="absolute inset-0 bg-[#FF6B00] bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">
                          Luxury Fashion Store
                        </h3>
                        <p className="mb-4">
                          Increased online sales by 300% and reduced return
                          rates by 45% with AR try-on technology.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-4 py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#FF6B00] transition-colors duration-300"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Item 5 --> */}
                <div className="portfolio-item group" data-category="web">
                  <div className="relative overflow-hidden rounded-lg bg-slate-300 dark:bg-neutral-600 h-64">
                    {/* <!-- Portfolio background with gradient overlay --> */}
                    <div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:from-[#1F2937]
    dark:via-[#374151]
    dark:to-[#4B5563]

    border border-[#CBD5E1]
    dark:border-neutral-700

    opacity-80
  "
></div>

                    {/* <!-- Portfolio content --> */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Healthcare Patient Portal
                        </h3>
                        <p className="text-sm opacity-90">
                          A secure platform for patients to access medical
                          records, schedule appointments, and communicate with
                          doctors.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Angular
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Node.js
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          HIPAA Compliance
                        </span>
                      </div>
                    </div>

                    {/* <!-- Hover overlay --> */}
                    <div className="absolute inset-0 bg-[#FF6B00] bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">
                          Healthcare Patient Portal
                        </h3>
                        <p className="mb-4">
                          Reduced administrative tasks by 70% and improved
                          patient satisfaction scores by 45%.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-4 py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#FF6B00] transition-colors duration-300"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Item 6 --> */}
                <div className="portfolio-item group" data-category="mobile">
                  <div className="relative overflow-hidden rounded-lg bg-slate-300 dark:bg-neutral-600 h-64">
                    {/* <!-- Portfolio background with gradient overlay --> */}
                 <div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

    dark:from-[#1F2937]
    dark:via-[#374151]
    dark:to-[#4B5563]

    border border-[#CBD5E1]
    dark:border-neutral-700

    opacity-80
  "
></div>

                    {/* <!-- Portfolio content --> */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Food Delivery Application
                        </h3>
                        <p className="text-sm opacity-90">
                          A comprehensive food delivery platform with real-time
                          order tracking and multiple payment options.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Flutter
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Firebase
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-500 bg-opacity-50 rounded">
                          Google Maps API
                        </span>
                      </div>
                    </div>
                    {/*             
            <!-- Hover overlay --> */}
                    <div className="absolute inset-0 bg-[#FF6B00] bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-full">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">
                          Food Delivery Application
                        </h3>
                        <p className="mb-4">
                          Processed over 1 million orders in the first year with
                          an average delivery time of 25 minutes.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-4 py-2 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#FF6B00] transition-colors duration-300"
                        >
                          View Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12 ">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#FF6B00]  font-semibold text-white rounded-md hover:bg-[#FF8A3D] transition-colors duration-300"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </section>
        </div>
      </element>
      <script src="aunit\src\components\script.js"></script>
    </div>
  );
};

export default Portfolio1;
