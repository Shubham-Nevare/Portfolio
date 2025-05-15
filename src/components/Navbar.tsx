import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "internships",
        "projects",
        "certificates",
        "education",
        "contact",
      ];
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
  return (
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
              "internships",
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
  );
}

export default Navbar;
