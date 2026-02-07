import { useState } from "react";
import axios from 'axios';




const Why = ({ mode }) => {
  const darkThemeClass = mode ? 'dark' : ''
  const [openJob, setOpenJob] = useState(null);
  const [fileName, setFileName] = useState("");
  const [expandedJob, setExpandedJob] = useState(null);

  // Handles job details toggle
  const toggleJobDetails = (id) => {
    setOpenJob(openJob === id ? null : id);
  };


  // Handles job details expansion
  const toggleExpand = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };


  // Submit function
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    position: "",
    linkdin: "",
    github: "",
    resume: "" // For file upload
  });

  // Handles file upload preview
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handles input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      let response = await axios.post('http://localhost:4000/createcareer', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // ✅ Ensure correct headers for file upload
        }
      });

      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className={darkThemeClass}>
      <element id="1f781d29-5fdd-4fe5-ba5e-677b7c6d4ae0" data-section-id="1f781d29-5fdd-4fe5-ba5e-677b7c6d4ae0">

        <div id="root" className='bg-slate-100 dark:bg-neutral-900 text-neutral-800 dark:text-slate-100'>
          <section id="careers" className="py-20 ">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold pt-12 mb-4">
                  Join Our <span className="text-[#FF6B00]">Team</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-lg opacity-80">
                  Be part of a team that's passionate about creating innovative technology solutions. Explore our open positions and grow your career with us.
                </p>
              </div>

              {/* Why Join Us Section */}
 <div
  className={`
    grid grid-cols-1 lg:grid-cols-2
    gap-12
    p-8
    bg-slate-200
    rounded-t-lg
    border border-[#CBD5E1]
    hover:shadow-lg
    dark:bg-neutral-900
  `}
>


                {/* Image/Graphic Side */}
                <div className="bg-neutral-800 rounded-lg overflow-hidden relative">
                  {/* Gradient Background with Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br bg-slate-200 dark:bg-neutral-800"></div>
                  <div className="absolute inset-0 opacity-20 bg-pattern"></div>


                  {/* Content Overlay */}
<div className="
  relative h-full flex flex-col justify-center
  p-8 md:p-12 z-10

  bg-gradient-to-br
  from-[#fdfdfd] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-[#1F2937] dark:via-[#374151] dark:to-[#1F2937]
">
  <h3 className="text-2xl md:text-3xl font-bold mb-6">
    Why <span className="text-[#FF6B00]">AUNIT</span>?
  </h3>
  <div className="space-y-4">
                      {/* Benefits List */}
                      {[
                        {
                          title: "Innovation-Driven Culture",
                          description: "We foster creativity and continuous learning, encouraging our team to explore new technologies and innovative solutions.",
                        },
                        {
                          title: "Growth Opportunities",
                          description: "We believe in nurturing talent through mentorship, skill development programs, and clear career advancement paths.",
                        },
                        {
                          title: "Work-Life Balance",
                          description: "We value your well-being with flexible work arrangements, generous time off, and a supportive team environment.",
                        },
                        {
                          title: "Diverse & Inclusive",
                          description: "We celebrate different perspectives and backgrounds, knowing that diversity drives creativity and innovation.",
                        },
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-[#FF6B00] rounded-full p-2 mt-1 mr-4 flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{benefit.title}</h4>
                            <p className="opacity-80">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits Side */}
                <div className="bg-slate-100 dark:bg-neutral-800 rounded-lg p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Our <span className="text-[#FF6B00]">Benefits</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Benefit Cards */}
                    {[
                      {
                        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                        title: "Competitive Salary",
                        description: "We offer industry-competitive compensation packages that reflect your skills and experience.",
                      },
                      {
                        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                        title: "Health Benefits",
                        description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
                      },
                      {
                        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                        title: "Remote Work Options",
                        description: "Flexible work arrangements with remote options and flexible working hours.",
                      },
                      {
                        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                        title: "Learning Budget",
                        description: "Annual budget for conferences, courses, and learning resources to help you grow.",
                      },
                      {
                        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "Paid Time Off",
                        description: "Generous vacation policy, holidays, and personal days to rest and recharge.",
                      },
                      {
                        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                        title: "Team Events",
                        description: "Regular team-building activities, hackathons, and social events to foster connections.",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="
  benefit-card

  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-[#2B3441] dark:via-[#3A4351] dark:to-[#4A5568]

  hover:from-[#CBD5E1] hover:via-[#94A3B8] hover:to-[#CBD5E1]
  dark:hover:from-[#323B48] dark:hover:via-[#3F4856] dark:hover:to-[#556070]

  border border-[#CBD5E1]
  dark:border-neutral-600

  hover:shadow-lg
  rounded-lg p-6

  transition-all duration-300
"
>
                        <div className="text-[#FF6B00] mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                        <p className="opacity-80">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Current Openings Section */}
              <div className="mb-20">
                <h3 className="text-2xl mt-10 md:text-3xl font-bold mb-10 text-center">
                  Current <span className="text-[#FF6B00]">Openings</span>
                </h3>

                <div className="space-y-6">
                  {/* Job Listing 1 */}
                  <div className="
  job-listing

  bg-gradient-to-br
  from-[#fdfdfd] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-[#1F2937] dark:via-[#374151] dark:to-[#1F2937]

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg
  hover:border-[#FF6B00]

  rounded-lg
  overflow-hidden

  transition-all duration-300">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-bold">Senior Frontend Developer</h4>
                        <div className="flex space-x-3 mt-2 md:mt-0">
                          <span className="bg-[#FF6B00] bg-opacity-20 text-[#FF6B00] px-3 py-1 rounded-full text-sm">
                            Full-time
                          </span>
                          <span className="bg-slate-300 dark:bg-neutral-600 px-3 py-1 rounded-full text-sm">Remote</span>
                        </div>
                      </div>
                      <p className="opacity-80 mb-6">
                        We're looking for an experienced Frontend Developer with expertise in React.js and modern web technologies to join our team. You'll be responsible for building high-performance, responsive user interfaces for our clients.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux"].map((skill) => (
                          <span key={skill} className="bg-slate-300 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
className="job-details-btn flex items-center font-semibold text-[#FF6B00] hover:text-white bg-transparent hover:bg-[#FF6B00] border border-[#FF6B00] px-4 py-2 rounded-md transition-colors duration-300"
                        onClick={() => toggleExpand("job1")}
                      >
                        <span>{expandedJob === "job1" ? "Hide Details" : "View Details"}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={expandedJob === "job1" ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                        </svg>
                      </button>

                      {/* Expanded Job Details */}
                      {expandedJob === "job1" && (
                        <div className="job-details mt-6">
                          <div className="border-t border-neutral-700 pt-6">
                            <h5 className="font-bold text-lg mb-3">Responsibilities:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>Develop and maintain responsive, high-performance web applications</li>
                              <li>Collaborate with designers to implement pixel-perfect UIs</li>
                              <li>Work with backend developers to integrate APIs and services</li>
                              <li>Write clean, well-documented, and maintainable code</li>
                              <li>Contribute to technical architecture decisions</li>
                              <li>Implement modern frontend best practices and patterns</li>
                            </ul>

                            <h5 className="font-bold text-lg mb-3">Requirements:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>5+ years of frontend development experience</li>
                              <li>3+ years working with React.js</li>
                              <li>Strong knowledge of JavaScript, TypeScript, HTML, and CSS</li>
                              <li>Experience with state management solutions (Redux, Context API)</li>
                              <li>Familiar with modern build tools and workflows</li>
                              <li>Strong problem-solving skills and attention to detail</li>
                              <li>Excellent communication and collaboration abilities</li>
                            </ul>

                            <h5 className="font-bold text-lg mb-3">Nice to Have:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>Experience with Next.js or similar frameworks</li>
                              <li>Knowledge of testing frameworks (Jest, React Testing Library)</li>
                              <li>Understanding of CI/CD pipelines</li>
                              <li>Experience with GraphQL</li>
                              <li>Open source contributions</li>
                            </ul>

                            <a
                              href="#application-form"
                              className="inline-block bg-[#FF6B00] px-6 py-3 rounded-md hover:bg-[#FF8A3D] transition-colors duration-300"
                            >
                              Apply for this Position
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Job Listing 2 */}
                <div className="job-listing

  bg-gradient-to-br
  from-[#fdfdfd] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-[#1F2937] dark:via-[#374151] dark:to-[#1F2937]

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg
  hover:border-[#FF6B00]

  rounded-lg
  overflow-hidden

  transition-all duration-300">
    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-bold">Backend Developer (Node.js)</h4>
                        <div className="flex space-x-3 mt-2 md:mt-0">
                          <span className="bg-[#FF6B00] bg-opacity-20 text-[#FF6B00] px-3 py-1 rounded-full text-sm">
                            Full-time
                          </span>
                          <span className="bg-slate-300 dark:bg-neutral-700 px-3 py-1 rounded-full text-sm">Hybrid</span>
                        </div>
                      </div>
                      <p className="opacity-80 mb-6">
                        We're seeking a talented Backend Developer with Node.js expertise to design and implement scalable APIs, server-side logic, and database systems for our client projects.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Node.js", "Express.js", "MongoDB", "REST APIs", "AWS"].map((skill) => (
                          <span key={skill} className="bg-slate-300 dark:bg-neutral-600 px-3 py-1 rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
className="job-details-btn flex items-center font-semibold text-[#FF6B00] hover:text-white bg-transparent hover:bg-[#FF6B00] border border-[#FF6B00] px-4 py-2 rounded-md transition-colors duration-300"
                        onClick={() => toggleExpand("job2")}
                      >
                        <span>{expandedJob === "job2" ? "Hide Details" : "View Details"}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={expandedJob === "job2" ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                        </svg>
                      </button>

                      {/* Expanded Job Details */}
                      {expandedJob === "job2" && (
                        <div className="job-details mt-6">
                          <div className="border-t border-neutral-700 pt-6">
                            <h5 className="font-bold text-lg mb-3">Responsibilities:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>Design and implement scalable backend services and APIs</li>
                              <li>Develop and maintain database schemas and queries</li>
                              <li>Ensure application security and data protection</li>
                              <li>Collaborate with frontend developers to integrate server-side logic</li>
                              <li>Optimize application performance and responsiveness</li>
                              <li>Write clean, maintainable, and well-tested code</li>
                            </ul>

                            <h5 className="font-bold text-lg mb-3">Requirements:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>3+ years of backend development experience</li>
                              <li>Strong proficiency with Node.js and Express.js</li>
                              <li>Experience with MongoDB and other database systems</li>
                              <li>Knowledge of RESTful API design principles</li>
                              <li>Understanding of authentication and authorization mechanisms</li>
                              <li>Familiarity with cloud services (AWS, GCP, or Azure)</li>
                              <li>Good problem-solving skills and attention to detail</li>
                            </ul>

                            <h5 className="font-bold text-lg mb-3">Nice to Have:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>Experience with microservices architecture</li>
                              <li>Knowledge of GraphQL</li>
                              <li>Familiarity with Docker and containerization</li>
                              <li>Understanding of CI/CD pipelines</li>
                              <li>Experience with TypeScript</li>
                            </ul>

                            <a
                              href="#application-form"
                              className="inline-block bg-[#FF6B00] text-white px-6 py-3 rounded-md hover:bg-[#FF8A3D] transition-colors duration-300"
                            >
                              Apply for this Position
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Job Listing 3 */}
                  <div className="
  job-listing

  bg-gradient-to-br
  from-[#fdfdfd] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-[#1F2937] dark:via-[#374151] dark:to-[#1F2937]

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg
  hover:border-[#FF6B00]

  rounded-lg
  overflow-hidden

  transition-all duration-300">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-bold">UI/UX Designer</h4>
                        <div className="flex space-x-3 mt-2 md:mt-0">
                          <span className="bg-[#FF6B00] bg-opacity-20 text-[#FF6B00] px-3 py-1 rounded-full text-sm">
                            Full-time
                          </span>
                          <span className="bg-slate-300 dark:bg-neutral-700 px-3 py-1 rounded-full text-sm">Remote</span>
                        </div>
                      </div>
                      <p className="opacity-80 mb-6">
                        We're looking for a creative UI/UX Designer to craft intuitive and visually appealing user experiences across web and mobile applications.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"].map((skill) => (
                          <span key={skill} className="bg-slate-300 dark:bg-neutral-600 px-3 py-1 rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
className="job-details-btn flex items-center font-semibold text-[#FF6B00] hover:text-white bg-transparent hover:bg-[#FF6B00] border border-[#FF6B00] px-4 py-2 rounded-md transition-colors duration-300"
                        onClick={() => toggleExpand("job3")}
                      >
                        <span>{expandedJob === "job3" ? "Hide Details" : "View Details"}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={expandedJob === "job3" ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                        </svg>
                      </button>

                      {/* Expanded Job Details */}
                      {expandedJob === "job3" && (
                        <div className="job-details mt-6">
                          <div className="border-t border-neutral-700 pt-6">
                            <h5 className="font-bold text-lg mb-3">Responsibilities:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>Create user-centered designs by understanding business requirements and user feedback</li>
                              <li>Design wireframes, mockups, and prototypes for web and mobile applications</li>
                              <li>Conduct user research and usability testing</li>
                              <li>Develop and maintain design systems to ensure consistency</li>
                              <li>Collaborate with developers to ensure proper implementation of designs</li>
                              <li>Stay up-to-date with the latest UI/UX trends and techniques</li>
                            </ul>

                            <h5 className="font-bold text-lg mb-3">Requirements:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>3+ years of experience in UI/UX design</li>
                              <li>Strong portfolio demonstrating your design process and solutions</li>
                              <li>Proficiency with design tools such as Figma, Adobe XD, or Sketch</li>
                              <li>Understanding of user-centered design principles</li>
                              <li>Experience with design systems and component libraries</li>
                              <li>Knowledge of accessibility standards and best practices</li>
                              <li>Excellent communication and presentation skills</li>
                            </ul>

                            <h5 className="font-bold text-lg mb-3">Nice to Have:</h5>
                            <ul className="list-disc list-inside space-y-2 opacity-80 mb-6">
                              <li>Basic understanding of HTML/CSS</li>
                              <li>Experience with motion design and animations</li>
                              <li>Knowledge of design thinking methodologies</li>
                              <li>Experience working in agile environments</li>
                              <li>Background in mobile app design</li>
                            </ul>

                            <a
                              href="#application-form"
                              className="inline-block bg-[#FF6B00] text-white px-6 py-3 rounded-md hover:bg-[#FF8A3D] transition-colors duration-300"
                            >
                              Apply for this Position
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Form Section */}
              <div id="application-form" className="
  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-[#1F2937] dark:via-[#374151] dark:to-[#1F2937]

  border border-[#CBD5E1]
  dark:border-neutral-700

  hover:shadow-lg

  rounded-lg
  p-8 md:p-12
  max-w-4xl mx-auto

  transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Apply for a <span className="text-[#FF6B00]">Position</span>
                </h3>
                <p className="opacity-80 mb-8">
                  Fill out the form below to apply for one of our open positions. We'll review your application and get back to you as soon as possible.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="firstname"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                        onChange={handleChange} required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="lastname"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                        required onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                        required onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone" onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">
                      Position You're Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                      required onChange={handleChange}
                    >
                      <option value="">Select a position</option>
                      <option value="Senior Frontend Developer">Senior Frontend Developer</option>
                      <option value="Backend Developer (Node.js)">Backend Developer (Node.js)</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium mb-2 ">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkdin"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                      placeholder="https://linkedin.com/in/yourprofile" onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                      Portfolio/GitHub URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="github" onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Resume/CV *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-600 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 bg-slate-500 dark:bg-neutral-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-neutral-400">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-slate-100 dark:bg-neutral-700 rounded-md font-medium text-[#FF6B00] hover:text-[#FF8A3D] focus-within:outline-none"
                          >
                            <span className="px-3 py-2">Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                          </label>
                          <p className="pl-1 pt-2">or drag and drop</p>
                        </div>
                        <p className="text-xs text-neutral-400">PDF, DOC, or DOCX up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Cover Letter / Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-all duration-300"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#FF6B00] font-semibold text-white rounded-md hover:bg-[#FF8A3D] transition-colors duration-300 flex items-center justify-center"
                    >
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </element>
    </div>
  );
};

export default Why;