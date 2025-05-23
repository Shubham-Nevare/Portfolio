function Internship() {
  const internships = [
    {
      company: "Schbang Digital Solutions",
      position: "Frontend Developer Intern",
      duration: "April 2023 - Present",
      description:
        "Developed responsive web applications using React and Next.js. Implemented modern UI/UX designs and improved website performance.",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
  ];
  return (
    <section id="internships" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Internship Experience
        </h2>
        <div className="max-w-4xl mx-auto flex justify-center">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300 w-full md:w-[70%]"
            >
              <h3 className="text-xl font-semibold mb-2">
                {internship.company}
              </h3>
              <p className="text-blue-400 mb-2">{internship.position}</p>
              <p className="text-gray-400 text-sm mb-4">
                {internship.duration}
              </p>
              <p className="text-gray-300 mb-4">{internship.description}</p>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internship;
