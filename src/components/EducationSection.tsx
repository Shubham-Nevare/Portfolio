import { RefObject } from "react";

interface EducationSectionProps {
  cursorRef: RefObject<HTMLDivElement>;
}

const educationData = [
  {
    title: "Master of Computer Applications",
    institution: "MET ICS College, Bandra - Mumbai University",
    duration: "2023 - Present",
    tag: "Current CGPA: 7.85/10",
    tagColor: "bg-blue-500/20 text-blue-400",
    label: "MCA",
    description:
      "Specializing in Frontend Development, UI/UX Design, and Web Technologies. Actively participating in college tech events and working on innovative web projects.",
  },
  {
    title: "Bachelor of Computer Applications",
    institution: "North Maharashtra University",
    duration: "2020 - 2023",
    tag: "CGPA: 9.45/10",
    tagColor: "bg-green-500/20 text-green-400",
    label: "BCA",
    description:
      "Graduated with First Class Honours. Major in Computer Science. Completed multiple internships and developed award-winning projects.",
  },
];

function EducationSection({ cursorRef }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map(
            ({ title, institution, duration, tag, tagColor, label, description }) => (
              <div
                key={label}
                className="bg-gray-900 rounded-lg p-8 hover:transform hover:scale-[1.02] transition-all duration-300"
                onMouseEnter={() => {
                  if (cursorRef.current) {
                    cursorRef.current.innerHTML = label;
                    gsap.to(cursorRef.current, {
                      width: "auto",
                      height: "auto",
                      padding: "8px 12px",
                      fontSize: "10px",
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
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400">{institution} • {duration}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 ${tagColor} rounded-full text-sm`}>
                      {tag}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">{description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
