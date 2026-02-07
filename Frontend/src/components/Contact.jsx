import { useState, useRef } from "react";
import "./contact.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Contact = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";
  // const [errors, setErrors] = useState({});
  // const [formSuccess, setFormSuccess] = useState(false);
  // const chatBubbleRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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
      console.log("FORM SUBMITTED");
    try {
      // 1️⃣ Save data to backend / MongoDB
      await axios.post("http://localhost:5000/createcontact", formData);

      // 2️⃣ Send auto-reply email (THIS WAS MISSING)
emailjs.sendForm(
  "service_cemwvqy",
  "template_utp6ry7",
  form.current,
  {
    publicKey: "63mIkhy-oPze24kwW"
  }
);

console.log("EMAILJS SEND WORKED");

      // 3️⃣ Reset form UI
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  console.log(formData);

  return (
    <div className={darkThemeClass}>
      <div
        id="a5b24678-63e6-41a2-ad25-0866fae6b5d0"
        data-section-id="a5b24678-63e6-41a2-ad25-0866fae6b5d0"
      >
        <div id="root" className=" text-neutral-800 dark:text-slate-100">
          <section
            id="contact"
            className="py-20 bg-slate-100 dark:bg-neutral-900 relative overflow-hidden"
          >
            {/* <!-- Background Elements --> */}
            <div className="absolute inset-0 overflow-hidden">
              {/* <!-- Abstract Shape 1 --> */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B00] rounded-full filter blur-3xl opacity-10 translate-y-1/2 translate-x-1/2"></div>

              {/* <!-- Abstract Shape 2 --> */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#C0C0C0] rounded-full filter blur-3xl opacity-10 -translate-y-1/2 -translate-x-1/2"></div>

              {/* <!-- Grid Pattern --> */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="contactGrid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#C0C0C0"
                        stroke-width="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#contactGrid)" />
                </svg>
              </div>
            </div>

            <div className="container mx-auto px-4 pt-12 relative z-10">
              {/* <!-- Section Header --> */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get in <span className="text-[#FF6B00]">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                <p className="text-xl  max-w-3xl mx-auto">
                  Ready to transform your digital presence? Contact us today to
                  discuss how we can help you achieve your technology goals.
                </p>
              </div>

              {showSuccess && (
                <div className="success-overlay">
                  <div className="success-popup">
                    Form submitted successfully!
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* <!-- Contact Form --> */}
                <div className="bg-slate-200 dark:bg-neutral-800 bg-opacity-60 backdrop-blur-md p-8 rounded-xl border border-neutral-700 shadow-lg animate__animated animate__fadeInLeft">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                  <form
                    id="contactForm"
                    className="space-y-6"
                    ref={form}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* <!-- Name Input --> */}
                      <div>
                        <label
                          for="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="
    w-full
    bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]
    border border-[#CBD5E1]
    hover:shadow-lg
    text-neutral-900 dark:text-neutral-900
    dark:bg-neutral-700 bg-opacity-50
    rounded-lg py-3 px-4
    placeholder-gray-400 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#FF6B00]
    focus:border-transparent transition-all
  "
                          placeholder="Raj Patel"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      {/* <!-- Email Input --> */}
                      <div>
                        <label
                          for="email"
                          className="block text-sm font-medium mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="
    w-full
    bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]
    border border-[#CBD5E1]
    hover:shadow-lg
    text-neutral-900 dark:text-neutral-900
    dark:bg-neutral-700 bg-opacity-50
    rounded-lg py-3 px-4
    placeholder-gray-400 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#FF6B00]
    focus:border-transparent transition-all
  "
                          placeholder="email@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* <!-- Phone Input --> */}
                    <div>
                      <label
                        for="phone"
                        className="block text-sm font-medium  mb-1"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="
    w-full
    bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]
    border border-[#CBD5E1]
    hover:shadow-lg
    text-neutral-900 dark:text-neutral-900
    dark:bg-neutral-700 bg-opacity-50
    rounded-lg py-3 px-4
    placeholder-gray-400 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#FF6B00]
    focus:border-transparent transition-all
  "
                        placeholder="+91 9874563210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- Service Selection --> */}
                    <div>
                      <label
                        for="service"
                        className="block text-sm font-medium  mb-1"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className={`
    w-full
    bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]
    border border-[#CBD5E1]
    hover:shadow-lg
    text-neutral-400 dark:text-black
    dark:bg-neutral-500 bg-opacity-50
    rounded-lg py-3 px-4
    focus:outline-none focus:ring-2 focus:ring-[#FF6B00]
    focus:border-transparent transition-all
    ${
      /* LIGHT MODE */
      formData.service === "" ? "text-gray-400" : "text-neutral-800"
    }

    ${
      /* DARK MODE */
      formData.service === "" ? "dark:text-gray-400" : "dark:text-black"
    }
  `}
                        required
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option
                          value=""
                          disabled
                          className="text-gray-500 dark:text-gray-400"
                        >
                          Select a service
                        </option>

                        <option value="app-development">App Development</option>
                        <option value="web-development">Web Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="saas">SaaS Development</option>
                        <option value="ecommerce">E-commerce Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* <!-- Message Input --> */}
                    <div>
                      <label
                        for="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full
    bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]
    border border-[#CBD5E1]
    hover:shadow-lg
    text-neutral-900 dark:text-neutral-900
    dark:bg-neutral-700 bg-opacity-50
    rounded-lg py-3 px-4
    placeholder-gray-400 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#FF6B00]
    focus:border-transparent transition-all"
                        placeholder="Tell us about your project..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div>
                      <button
                        type="submit"
                        className="w-full text-white font-bold bg-[#FF6B00] hover:bg-[#FF8C00]     py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>

                {/* <!-- Contact Information & Map --> */}
                <div className="space-y-8 animate__animated animate__fadeInRight">
                  {/* <!-- Contact Information --> */}
                  <div className="bg-slate-200 dark:bg-neutral-800 bg-opacity-60 backdrop-blur-md p-8 rounded-xl border border-neutral-700 shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      {/* <!-- Address --> */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#FF6B00]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#FF6B00]">
                            Our Office
                          </h4>
                          <address className="not-italic ">
                            Gujarat International Finance
                            <br />
                            Tech-City, Gandhinagar,
                            <br />
                            Gujarat 382050
                          </address>
                        </div>
                      </div>

                      {/* <!-- Email --> */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#FF6B00]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#FF6B00]">
                            Email Us
                          </h4>
                          <p>
                            <a
                              href="mailto:info@aunit.in"
                              className="hover:underline transition-all"
                            >
                              info@aunit.in
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* <!-- Phone --> */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#FF6B00]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#FF6B00]">
                            Call Us
                          </h4>
                          <p>
                            <a
                              href="tel:+91 6353735795"
                              className="hover:underline transition-all"
                            >
                              +91 6353735795
                            </a>
                          </p>
                          <p>
                            <a
                              href="tel:+1-415-987-6543"
                              className="hover:underline transition-all"
                            >
                              +91 9313400462
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* <!-- Working Hours --> */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#FF6B00]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#FF6B00]">
                            Working Hours
                          </h4>
                          <p className="">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="">Saturday: 10:00 AM - 4:00 PM</p>
                          <p className="">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Social Media Links --> */}
                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-slate-300 dark:bg-neutral-700 hover:bg-[#FF6B00]    flex items-center justify-center transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-slate-300 dark:bg-neutral-700 hover:bg-[#FF6B00]    flex items-center justify-center transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-slate-300 dark:bg-neutral-700 hover:bg-[#FF6B00]    flex items-center justify-center transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/aunit.in?igsh=YTQ3cjR2cTY2dTRy&utm_source=qr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-slate-300 dark:bg-neutral-700 hover:bg-[#FF6B00]    flex items-center justify-center transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Map Container --> */}
                  <div className="bg-slate-100 dark:bg-neutral-800 bg-opacity-60 backdrop-blur-md p-8 rounded-xl border border-neutral-700 shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Find Us</h3>

                    {/* <!-- Map Placeholder (replace with actual Google Maps iframe) --> */}
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <iframe
                        title="GIFT City Location"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14301.606123011565!2d72.66632540150523!3d23.16921621908849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA5JzU0LjQiTiA3MsKwNDAnMzMuMCJF!5e0!3m2!1sen!2sin!4v1769953188780!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    <div className="mt-4">
                      <a
                        href="https://maps.app.goo.gl/dzhq8AFKcKc7W8gEA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B00] hover:underline flex items-center"
                      >
                        <span>Get Directions</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Link to Animate.css for animations --> */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
          </section>
        </div>
        <script src="aunit\src\components\script.js"></script>
      </div>
    </div>
  );
};

export default Contact;
