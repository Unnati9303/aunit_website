import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Why from './components/Why'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'

import Portfolio1 from './components/Portfolio1'
import Testiminols from './components/Testiminols'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Home1 from './components/Home1'
import ScrollToTop from './ScrollToTop'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode, "one")
  // Update the html tag class based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar mode={darkMode} />
        <Routes>
          <Route path='/' element={<Home1 mode={darkMode} />} />
          <Route path="/whyjoin" element={<Why mode={darkMode} />} />
          <Route path="/about" element={<About mode={darkMode} />} />
          <Route path="/" element={<Services mode={darkMode} />} />
          <Route path='/portfolio' element={<Portfolio1 mode={darkMode} />} />
          <Route path='/testiminols' element={<Testiminols mode={darkMode} />} />

<Route path="/blog" element={<Blog mode={darkMode} />} />
          
          <Route path='/contact' element={<Contact mode={darkMode} />} />
          <Route path='/faq' element={<Faq mode={darkMode} />} />
        </Routes>
        <Footer />

        {/* Theme Toggle Button */}
        <div className="fixed bottom-8 left-8 z-50">
          <button
            id="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 bg-neutral-800 dark:bg-neutral-200 rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {/* Light Icon (shown when darkMode is false) */}
            {!darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FF6B00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Dark Icon (shown when darkMode is true)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FF6B00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
