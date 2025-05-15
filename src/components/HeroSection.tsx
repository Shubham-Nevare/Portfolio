import { Download, FileText, Github, Linkedin, Mail } from "lucide-react";

function HeroSection() {
  return (
    <section
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
              href="https://drive.google.com/file/d/1_zCF6ys0XnuOkwKu8cUYJe5LjHL1i8ve/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
            >
              <FileText size={20} />
              View Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1_zCF6ys0XnuOkwKu8cUYJe5LjHL1i8ve/view?usp=sharing"
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
    </section>
  );
}

export default HeroSection;
