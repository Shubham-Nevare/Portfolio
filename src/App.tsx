import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ChevronUp,
  FileText,
  Download,
  Braces,
  FileCode,
  Code,
  Palette,
  Feather,
  Layers,
  CodeSquare,
  Award,
} from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "education", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const skills = [
    { name: "React", icon: Code, color: "text-blue-400", items: [] },
    { name: "JavaScript", icon: Code2, color: "text-yellow-400", items: [] },
    { name: "Java", icon: Braces, color: "text-red-500", items: [] },
    { name: "Tailwind", icon: Feather, color: "text-teal-400", items: [] },
    { name: "Figma", icon: Palette, color: "text-purple-500", items: [] },
    { name: "Bootstrap", icon: Layers, color: "text-indigo-500", items: [] },
    { name: "HTML", icon: FileCode, color: "text-orange-500", items: [] },
    { name: "CSS", icon: CodeSquare, color: "text-blue-600", items: [] },
  ];

  const projects = [
    {
      title: "Smart AI Bot",
      description:
        "SmartAIBot is an advanced AI-powered chatbot to provide intelligent and human-like responses. The bot can be integrated into websites or applications to assist users with queries, automate customer support, and enhance user engagement.",
      image:
        "https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0JTIwYWklMjBib3R8ZW58MHx8MHx8fDA%3D",
      link: "https://smart-ai-bot.vercel.app/",
      tech: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Doctor Appointment Website",
      description:
        "A Web application created using HTML and JavaScript and backend use PHP which holds details of doctor and patients, complete report of particular patient and other details of available laboratory, etc.",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yJTIwYXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D",
      tech: ["PHP", "HTML", "CSS"],
    },
    {
      title: "Food delivery website",
      description:
        "A modern, responsive, and user-friendly food delivery web application built using React.js and Tailwind CSS. This project allows users to browse restaurants, search for food, add items to the cart, and place orders seamlessly. ",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
      link: "https://food-delivery-website-shubhams.vercel.app/",
      tech: ["React", "JavaScript", "Tailwind CSS"],
    },
  ];

  const certificates = [
    {
      title: "Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "July 2024",
      image: "src/public/AWS_Academy_Machine_Learning_Foundations.jpg",
      link: "https://drive.google.com/file/d/1_bwj_doBGUUUqHPa3HL6BN2ScrHO9LQK/view?usp=sharing",
      badge: "https://www.credly.com/go/YUoIBeIR",
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS Academy",
      date: "November 2024",
      image: "src/public/AWS_Academy_Cloud_Foundations.jpg",
      link: "https://drive.google.com/uc?id=1mh3vS9nKb7Tb66EfslRuDnrhyEHRvGlS",
      badge: "https://www.credly.com/go/q1vOGdTE",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      link: "#",
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Google",
      date: "September 2023",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              SN
            </span>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "projects",
                "certificates",
                "education",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  } transition-colors`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
                Shubham Nevare
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-20 blur"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              MCA Student & Frontend Developer
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://github.com/Shubham-Nevare"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-nevare-a607a0243"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:shubhamnevare25@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>

            {/* Resume Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://drive.google.com/file/d/1CgCwajofBd1DN0xa4GYbz6eh9tCxG8j-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
              >
                <FileText size={20} />
                View Resume
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1CgCwajofBd1DN0xa4GYbz6eh9tCxG8j-"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="animate-bounce mt-16">
              <a href="#about" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 mx-auto border-2 border-current rounded-full flex items-center justify-center">
                  ↓
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I'm a passionate MCA student specializing in frontend development
              and UI/UX design. Currently pursuing my Master's in Computer
              Applications at MET ICS College, I combine academic excellence
              with practical development experience. My goal is to create
              innovative and user-friendly web solutions that make a real
              impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {skills.map(({ name, icon: Icon, color }) => (
                <div key={name} className="group">
                  <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-1">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${color}`} />
                    <h3 className="font-semibold mb-2">{name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <span className="text-gray-600">•</span>
                    <a
                      href="https://github.com/Shubham-Nevare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700"
              >
                <div className="relative">
                  {/* Certificate Image */}
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-70"></div>

                  {/* Badge (Only displayed if certificate.badge exists) */}
                  {certificate.badge && (
                    <div className="absolute top-3 right-3 bg-blue-500/80 p-2 rounded-full">
                      <a
                        href={certificate.badge}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Award className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    {certificate.title}
                  </h3>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-500 text-xs">{certificate.date}</p>
                  </div>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-2"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-900 rounded-lg p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Master of Computer Applications
                  </h3>
                  <p className="text-gray-400">
                    MET ICS College, Bandra - Mumbai University • 2023 - Present
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Current CGPA: 7.85/10
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                Specializing in Frontend Development, UI/UX Design, and Web
                Technologies. Actively participating in college tech events and
                working on innovative web projects.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-gray-400">
                    North Maharashtra University • 2020 - 2023
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    CGPA: 9.45/10
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                Graduated with First Class Honours. Major in Computer Science.
                Completed multiple internships and developed award-winning
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-300 mb-8 text-lg">
              I'm currently looking for internship opportunities and would love
              to hear from you! Let's discuss how we can work together to create
              amazing solutions.
            </p>
            <a
              href="mailto:shubhamnevare25@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

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
  );
}

export default App;
