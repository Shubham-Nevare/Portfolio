import { ExternalLink, Github } from "lucide-react";

function ProjectSection() {
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
  return (
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
  );
}

export default ProjectSection;
