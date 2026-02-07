import React, { useState, useEffect } from "react";

const FAQ = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // FAQ data
  const faqData = [
    {
      id: 1,
      category: "services",
      question: "What services does AUNIT Tech offer?",
      answer:
        "AUNIT Tech provides a comprehensive range of technology services including website development, mobile app development, SaaS product development, e-commerce solutions, UI/UX design, no-code development, CMS development, and cloud solutions. We work with businesses of all sizes to create custom digital solutions that meet their specific needs.",
    },
    {
      id: 2,
      category: "pricing",
      question: "How much does a project typically cost?",
      answer:
        "Project costs vary based on complexity, features, timeline, and specific requirements. We offer customized quotes for each project after an initial consultation. Our pricing is transparent with no hidden fees, and we can work with different budget ranges by tailoring solutions to meet your needs and priorities. Contact us for a free consultation and personalized quote.",
    },
    {
      id: 3,
      category: "process",
      question: "What is your development process?",
      answer: (
        <>
          <p>
            Our development process follows an agile methodology with the
            following key phases:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-2 opacity-90">
            <li>
              <strong>Discovery & Planning:</strong> We gather requirements,
              define project scope, and create a roadmap.
            </li>
            <li>
              <strong>Design:</strong> We create wireframes and design mockups
              for your approval.
            </li>
            <li>
              <strong>Development:</strong> Our team builds your solution in
              sprints with regular updates.
            </li>
            <li>
              <strong>Testing:</strong> We perform thorough QA testing to ensure
              quality and performance.
            </li>
            <li>
              <strong>Deployment:</strong> We launch your solution and provide
              training if needed.
            </li>
            <li>
              <strong>Maintenance & Support:</strong> We offer ongoing support
              and updates after launch.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 4,
      category: "services",
      question: "Do you work with clients internationally?",
      answer:
        "Yes, we work with clients globally! Our team is experienced in remote collaboration and we have established efficient communication processes to work across different time zones. We use various tools to ensure smooth project management and regular updates regardless of geographic location. We've successfully completed projects for clients in North America, Europe, Asia, Australia, and beyond.",
    },
    {
      id: 5,
      category: "process",
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications or platforms may take 3-6 months or more. During our initial consultation, we'll provide a detailed timeline based on your specific requirements. We're committed to delivering high-quality solutions within agreed timeframes, and our agile approach allows for flexibility to accommodate changes during development.",
    },
    {
      id: 6,
      category: "support",
      question: "Do you provide maintenance and support after launch?",
      answer:
        "Yes, we offer comprehensive maintenance and support services after your project launches. We provide different support packages tailored to your needs, including regular updates, security patches, performance monitoring, content updates, and technical support. Our team remains available to resolve any issues, implement new features, or provide guidance as your business grows and evolves.",
    },
    {
      id: 7,
      category: "pricing",
      question: "Do you offer fixed-price contracts or hourly billing?",
      answer: (
        <>
          <p>
            We offer both fixed-price contracts and hourly billing options to
            accommodate different project needs:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
            <li>
              <strong>Fixed-price:</strong> Ideal for projects with clear,
              well-defined requirements and scope. This provides budget
              certainty.
            </li>
            <li>
              <strong>Hourly billing:</strong> Better for projects that may
              evolve significantly during development or require ongoing
              collaboration.
            </li>
            <li>
              <strong>Retainer agreements:</strong> We also offer monthly
              retainer packages for ongoing development and support needs.
            </li>
          </ul>
          <p className="mt-2 opacity-90">
            During our initial consultation, we'll recommend the most suitable
            pricing model based on your specific project requirements.
          </p>
        </>
      ),
    },
    {
      id: 8,
      category: "services",
      question: "What technologies do you specialize in?",
      answer: (
        <>
          <p>
            We specialize in a wide range of technologies, focusing primarily on
            the MERN stack (MongoDB, Express.js, React.js, Node.js). Our
            expertise includes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
            <li>
              <strong>Frontend:</strong> React.js, Vue.js, Angular, HTML5, CSS3,
              JavaScript, TypeScript
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, Python, PHP, Ruby
              on Rails
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Firebase
            </li>
            <li>
              <strong>Mobile:</strong> React Native, Flutter, Swift, Kotlin
            </li>
            <li>
              <strong>CMS:</strong> WordPress, Shopify, Contentful, Strapi
            </li>
            <li>
              <strong>Cloud:</strong> AWS, Google Cloud, Azure, Netlify, Vercel
            </li>
            <li>
              <strong>DevOps:</strong> Docker, Kubernetes, CI/CD pipelines
            </li>
          </ul>
          <p className="mt-2 opacity-90">
            We're always expanding our skills and adapting to new technologies
            to provide the most effective solutions for our clients.
          </p>
        </>
      ),
    },
    {
      id: 9,
      category: "support",
      question: "How do you handle project changes or additional requirements?",
      answer: (
        <>
          <p>
            We understand that project requirements can evolve during
            development. Our agile methodology is designed to accommodate
            changes and new requirements. When changes arise, we follow this
            process:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-2 opacity-90">
            <li>Document the requested changes or additions</li>
            <li>Evaluate the impact on timeline, scope, and budget</li>
            <li>Provide you with clear options and recommendations</li>
            <li>Once approved, implement the changes efficiently</li>
          </ol>
          <p className="mt-2 opacity-90">
            For fixed-price projects, significant changes may require
            adjustments to the contract. We always discuss and agree on any
            changes before implementation to ensure transparency and alignment.
          </p>
        </>
      ),
    },
    {
      id: 10,
      category: "process",
      question: "How do you ensure project quality and security?",
      answer: (
        <>
          <p>
            Quality and security are paramount in our development process. We
            implement multiple measures to ensure the highest standards:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
            <li>
              <strong>Quality Assurance:</strong> Comprehensive testing
              including unit tests, integration tests, UI/UX testing, and
              cross-browser/device compatibility testing
            </li>
            <li>
              <strong>Code Reviews:</strong> Regular peer code reviews to
              maintain code quality and best practices
            </li>
            <li>
              <strong>Security Practices:</strong> Implementation of security
              best practices, data encryption, secure authentication, and
              protection against common vulnerabilities (OWASP)
            </li>
            <li>
              <strong>Performance Optimization:</strong> Thorough performance
              testing and optimization for speed and efficiency
            </li>
            <li>
              <strong>Compliance:</strong> Adherence to relevant regulations and
              standards (GDPR, CCPA, ADA, etc.)
            </li>
            <li>
              <strong>Documentation:</strong> Detailed documentation for
              maintenance and future development
            </li>
          </ul>
        </>
      ),
    },
  ];

  // Filter FAQs based on category and search term
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof faq.answer === "string" &&
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchTerm(""); // Reset search term when changing category
    setNoResults(false); // Reset no results message
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setNoResults(filteredFAQs.length === 0 && e.target.value !== "");
  };

  // Reset search
  const resetSearch = () => {
    setSearchTerm("");
    setNoResults(false);
    setActiveCategory("all");
  };

  // Toggle FAQ answer visibility
  const toggleAnswer = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  // Add animations when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".faq-item, .max-w-2xl");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkThemeClass}>
      <section
        id="faq"
        className="py-20  bg-slate-100 dark:bg-neutral-900 text-neutral-800 dark:text-slate-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold pt-12 mb-4">
              Frequently Asked <span className="text-[#FF6B00]">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              Find answers to some of the most common questions about our
              services and processes.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              {/* Search Input */}
              <div className="mb-6">
                <input
                  id="faq-search"
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={handleSearchChange}
className="
  w-full px-4 py-2
  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

  dark:bg-gradient-to-br
  dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-600

  border border-[#CBD5E1]
  dark:border-neutral-600

  hover:shadow-lg

  text-neutral-900
  dark:text-neutral-100

  placeholder-neutral-600
  dark:placeholder-gray-400

  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-[#FF6B00]

  transition-all duration-300
"
                />
              </div>
            </div>
          </div>
          <div id="faq" className="p-8">
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["all", "services", "pricing", "process", "support"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md ${
                      activeCategory === category
                        ? "bg-[#FF6B00]"
                        : "dark:bg-neutral-700 dark:hover:bg-neutral-600 bg-slate-300 hover:bg-slate-400"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ),
              )}
            </div>

            {/* No Results Message */}
            {noResults && (
              <div
                id="no-results"
                className="text-center bg-slate-300 dark:text-neutral-400"
              >
                No results found.
              </div>
            )}

            {/* FAQ Items */}
            <div className="max-w-3xl mx-auto space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
               className="
  faq-item
  bg-gradient-to-br
  from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]

  dark:bg-gradient-to-br
  dark:from-[#2B3441] dark:via-[#3A4351] dark:to-[#4A5568]

  border border-[#CBD5E1]
  dark:border-neutral-600

  hover:shadow-lg
  rounded-lg
  overflow-hidden
  transition-all duration-300
"

                  data-category={faq.category}
                >
                <button
  className="
    faq-question
    w-full flex justify-between items-center

    bg-gradient-to-br
    from-[#E2E8F0] via-[#CBD5E1] to-[#fdfdfd]

    dark:bg-gradient-to-br
    dark:from-[#2B3441] dark:via-[#3A4351] dark:to-[#4A5568]

    border border-[#CBD5E1]
    dark:border-neutral-600

    hover:shadow-xl hover:shadow-slate-400/40
    dark:hover:shadow-none

    hover:scale-[1.02]
    transition-all duration-300 ease-in-out

    p-5 rounded-lg text-left
  "

    onClick={() => toggleAnswer(faq.id)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`faq-icon h-6 w-6 text-[#FF6B00] transform transition-transform duration-300 ${
                        expandedQuestion === faq.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedQuestion === faq.id && (
                    <div className="faq-answer bg-slate-200 dark:bg-neutral-500 bg-opacity-60 rounded-b-lg px-5 pb-5">
                      <div className="pt-4 opacity-90">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="max-w-2xl mx-auto opacity-80 mb-8">
              Can't find the answer you're looking for? Our team is here to help
              with any questions you may have.
            </p>
            <a
              href="/contact"
              className="inline-block  px-8 py-4 bg-[#FF6B00] font-bold text-white rounded-md hover:bg-[#FF8A3D] transition-colors duration-300 animate__animated animate__fadeIn"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
