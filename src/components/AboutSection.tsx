import gsap from "gsap";
import {
  Box,
  Boxes,
 
  Code2,
 
  Coffee,
  Cpu,
 
  FileInput,
  Paintbrush,
  PaintBucket,
  PenTool,
  Wind,
  Database,
  Globe,
} from "lucide-react";
import { RefObject } from "react";

interface AboutSectionProps {
  cursorRef: RefObject<HTMLDivElement>;
}
function AboutSection({ cursorRef }: AboutSectionProps) {
  const skills = [
    { name: "React", icon: Cpu, color: "text-blue-400", items: [] },
    { name: "Next JS", icon: Box, color: "text-blue-400", items: [] },
    { name: "GSAP", icon: Paintbrush, color: "text-purple-500", items: [] }, 
    { name: "JavaScript", icon: Code2, color: "text-yellow-400", items: [] }, 
    { name: "Java", icon: Coffee, color: "text-red-500", items: [] }, 
    { name: "Tailwind", icon: Wind, color: "text-teal-400", items: [] }, 
    { name: "Figma", icon: PenTool, color: "text-purple-500", items: [] }, 
    { name: "Bootstrap", icon: Boxes, color: "text-indigo-500", items: [] }, 
    { name: "HTML", icon: FileInput, color: "text-orange-500", items: [] },
    { name: "CSS", icon: PaintBucket, color: "text-blue-600", items: [] },
    { name: "MySQL", icon: Database, color: "text-blue-600", items: [] },
    { name: "Webflow", icon: Globe, color: "text-blue-600", items: [] },


  ];
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-810"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            I'm a passionate MCA student specializing in frontend development
            and UI/UX design. Currently pursuing my Master's in Computer
            Applications at MET ICS College, I combine academic excellence with
            practical development experience. My goal is to create innovative
            and user-friendly web solutions that make a real impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="group"
                onMouseEnter={() => {
                  if (cursorRef.current) {
                    cursorRef.current.innerHTML = name || "No title";
                    gsap.to(cursorRef.current, {
                      width: "auto",
                      height: "auto",
                      padding: "8px 12px",
                      fontSize: "12px",
                      duration: 0,
                      delay: 0,
                      ease: "power2.out",
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (cursorRef.current) {
                    cursorRef.current.innerHTML = "";
                    gsap.to(cursorRef.current, {
                      width: 40,
                      height: 40,
                      padding: 0,
                      fontSize: "10px",
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                }}
              >
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
  );
}

export default AboutSection;
