import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const frameRate = 180; // ms
    const totalSteps = duration / frameRate;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const DelayedCounter = ({ end, delay = 800 }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return start ? <Counter end={end} /> : 0;
};


const About = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";
  useEffect(() => {
    const statSection = document.querySelector("#why-choose-us");
    const statCards = document.querySelectorAll(".stat-card");


    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          statCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate__animated", "animate__fadeInUp");
            }, index * 200);
          });


          observer.unobserve(statSection);
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(statSection);

    const coreValues = document.querySelectorAll(
      "#why-choose-us .grid:first-of-type > div",
    );
    const valueObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeIn",
              );
            }, index * 200);
            valueObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    coreValues.forEach((value) => {
      valueObserver.observe(value);
    });
  }, []);


  
return (

    
    <div className={darkThemeClass}>
      <element
        id="de0c14cb-6eb3-4b9f-ab08-631675fa577c"
        data-section-id="de0c14cb-6eb3-4b9f-ab08-631675fa577c"
      >
        <div
          id="root"
          className="bg-slate-100 dark:bg-neutral-900 text-neutral-800 dark:text-slate-100"
        >
          <section id="why-choose-us" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold pt-12 mb-4 ">
                  Why Choose <span className="text-[#FF6B00]">AUNIT</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-lg opacity-80">
                  We deliver exceptional results through innovation, expertise,
                  and a deep understanding of your business needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* <!-- Core Value 1 --> */}
                <div className="
  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

  dark:bg-gradient-to-br
  dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg
  rounded-lg p-8
  transition-all duration-300
  hover:-translate-y-2
"
>
                  <div className=" h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center  rounded-full bg-slate-400 dark:bg-neutral-700">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="opacity-80">
                    We stay at the forefront of technological advancements,
                    continuously exploring new solutions to deliver cutting-edge
                    products.
                  </p>
                </div>

                {/* <!-- Core Value 2 --> */}
               <div className="
  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

  dark:bg-gradient-to-br
  dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg
  rounded-lg p-8
  transition-all duration-300
  hover:-translate-y-2
"
>
                    <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-400 dark:bg-neutral-700 rounded-full">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                  <p className="opacity-80">
                    Our team of highly skilled professionals brings years of
                    industry experience and technical expertise to every
                    project.
                  </p>
                </div>

                {/* <!-- Core Value 3 --> */}
                              <div className="
  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

  dark:bg-gradient-to-br
  dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg
  rounded-lg p-8
  transition-all duration-300
  hover:-translate-y-2
"
>
                  <div className="h-16 w-16 mb-6 text-[#FF6B00] flex items-center justify-center bg-slate-400 dark:bg-neutral-700 rounded-full">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                  <p className="opacity-80">
                    We implement rigorous testing and quality control processes
                    to ensure reliable, high-performance products.
                  </p>
                </div>
              </div>

              {/* <!-- Stats Section --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Stat 1 --> */}
               <div
  className="
    stat-card
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

    dark:bg-gradient-to-br
    dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

    border border-[#CBD5E1]
    dark:border-neutral-700

    hover:shadow-lg
    rounded-lg p-8 text-center
  "
>
                  <div className="counter-container mb-3">
                    <span
                      className="text-4xl font-bold text-[#FF6B00] counter"
                      data-target="98">
  <Counter end={100} />
                    </span>
                    <span className="text-4xl font-bold text-[#FF6B00]">%</span>
                  </div>
                  <p className="text-lg">Client Satisfaction</p>
                </div>

                {/* <!-- Stat 2 --> */}
              <div
  className="
    stat-card
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

    dark:bg-gradient-to-br
    dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

    border border-[#CBD5E1]
    dark:border-neutral-700

    hover:shadow-lg
    rounded-lg p-8 text-center">

                  <div className="counter-container mb-3">
                    <span
                      className="text-4xl font-bold text-[#FF6B00] counter"
                      data-target="500"
                    >
                    <Counter end={50}/>
                    </span>
                    <span className="text-4xl font-bold text-[#FF6B00]">+</span>
                  </div>
                  <p className="text-lg">Projects Completed</p>
                </div>

                {/* <!-- Stat 3 --> */}
               <div className=" stat-card
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

    dark:bg-gradient-to-br
    dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

    border border-[#CBD5E1]
    dark:border-neutral-700

    hover:shadow-lg
    rounded-lg p-8 text-center">

<div className="counter-container mb-3">
  <span className="text-4xl font-semibold text-[#FF6B00]">
  <DelayedCounter end={4} delay={900} />
  </span>
  <span className="text-4xl font-bold text-[#FF6B00]">
    {" "}years +
  </span>
</div>
                  <p className="text-lg">Years of Experience</p>
                </div>

                {/* <!-- Stat 4 --> */}
               <div className="
    stat-card
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

    dark:bg-gradient-to-br
    dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

    border border-[#CBD5E1]
    dark:border-neutral-700

    hover:shadow-lg
    rounded-lg p-8 text-center">

                  <div className="counter-container mb-3">
                    <span
                      className="text-4xl font-bold text-[#FF6B00] counter"
                      data-target="50"
                    >
                    <Counter end={50} />
                    </span>
                    <span className="text-4xl font-bold text-[#FF6B00]">+</span>
                  </div>
                  <p className="text-lg">Team Members</p>
                </div>
              </div>

              {/* <!-- Additional Information --> */}
              <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Our <span className="text-[#FF6B00]">Approach</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#FF6B00] rounded-full p-2 mt-1 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Client-Centered Solutions
                        </h4>
                        <p className="opacity-80">
                          We prioritize understanding your unique business
                          challenges to deliver tailored solutions that address
                          your specific needs and goals.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#FF6B00] rounded-full p-2 mt-1 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Agile Development
                        </h4>
                        <p className="opacity-80">
                          Our agile methodology ensures rapid development
                          cycles, regular updates, and the flexibility to adapt
                          to changing requirements throughout the project
                          lifecycle.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#FF6B00] rounded-full p-2 mt-1 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Continuous Support
                        </h4>
                        <p className="opacity-80">
                          We provide ongoing maintenance and support services to
                          ensure your digital solutions remain up-to-date,
                          secure, and performing optimally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

             <div
  className="
    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

    dark:bg-gradient-to-br
    dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700

    border border-[#CBD5E1]
    dark:border-neutral-700

    hover:shadow-lg
    rounded-lg p-8
    relative overflow-hidden">

                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B00] opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    What Our <span className="text-[#FF6B00]">Clients Say</span>
                  </h3>
                  <blockquote className="mb-8">
                    <p className="text-lg italic opacity-90 mb-6 ">
                      "AUNIT transformed our business with their innovative
                      solutions. Their team's expertise and dedication to our
                      project exceeded our expectations. We've seen a
                      significant improvement in our operational efficiency."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center text-[#FF6B00] font-bold text-xl mr-4">
                        DS
                      </div>
                      <div>
                        <p className="font-semibold">Dinesh Suthar</p>
                      </div>
                    </div>
                  </blockquote>
                  <a
                    href="/testiminols"
                    className="text-[#FF6B00] inline-flex items-center hover:underline"
                  >
                    Read more testimonials
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
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
            </div>
          </section>
        </div>
      </element>
    </div>
  );
};

export default About;
