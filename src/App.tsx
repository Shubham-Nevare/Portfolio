import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import { ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Internship from "./components/Internship";
import gsap from "gsap";
// import CursorGSAP from "./components/CursorGSAP";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // GSAP for cursor
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  // GSAP for Animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
    // Cursor tracking animation
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block h-[30px] w-[30px]  bg-blue-500 rounded-full fixed z-[9999] pointer-events-none text-center text-[15px] items-center justify-center  font-semibold text-white whitespace-nowrap"
      ></div>
          <Router>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <Navbar />
         <Routes>
          <Route path="/" element={
            <>

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection cursorRef={cursorRef} />

        {/* Internship Section */}
        <Internship />

        {/* Projects Section */}
        <ProjectSection />

        {/* Certificates Section */}
        <CertificatesSection cursorRef={cursorRef}/>

        {/* Education Section */}
        <EducationSection cursorRef={cursorRef}/>

        {/* Contact Section */}
        <ContactSection />
          </>
          } />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>

        {/* Footer */}
        <footer className="py-8 bg-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Shubham Nevare. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Scroll to top button */}
        <button
          className={`fixed bottom-8 right-8 bg-blue-500 p-2 rounded-full shadow-lg transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          onClick={scrollToTop}
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
      </Router>
    </>
  );
}

export default App;
