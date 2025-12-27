import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUp } from "lucide-react";
import { projects } from "../data/projects";

// Helper to convert 'Month YYYY' to a Date object for sorting
function parseMonthYear(duration: string): Date {
  if (!duration) return new Date(0);
  const [monthStr, yearStr] = duration.split(" ");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = months.findIndex(m => monthStr.startsWith(m));
  const year = parseInt(yearStr, 10);
  if (month === -1 || isNaN(year)) return new Date(0);
  return new Date(year, month);
}

function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get all unique categories
  const allCategories = [
    "All",
    ...new Set(
      projects
        .flatMap((project) => project.category)
        .filter((cat): cat is string => Boolean(cat))
    ),
  ];

  // Filter projects based on selected category and sort by duration (latest first)
  const filteredProjects = (
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)
  ).sort((a, b) => parseMonthYear(b.duration).getTime() - parseMonthYear(a.duration).getTime());

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // no explicit 'ease' string to avoid framer-motion TypeScript mismatch
      },
    },
  };

  return (
    <section className="min-h-screen bg-gray-900 pb-12 pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my frontend development skills
            and modern web technologies
          </p>
        </motion.div>

        {/* Tech Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

                  {/* Date Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                      {project.duration}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2  group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-3 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} className="text-white" />
                        <span className="text-white text-xs hidden  group-hover:block transition-opacity duration-200 whitespace-nowrap">
                          Code
                        </span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} className="text-white" />
                        <span className="text-white text-xs hidden  group-hover:block transition-opacity duration-200 whitespace-nowrap">
                          Demo
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.category && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 whitespace-nowrap">
                        {project.category}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">
              No projects found in {selectedCategory} category
            </div>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Show All Projects
            </button>
          </motion.div>
        )}

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "Express.js",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {/* <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors z-50"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence> */}
    </section>
  );
}

export default AllProjects;
