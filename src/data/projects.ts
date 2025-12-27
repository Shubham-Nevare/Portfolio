export interface Project {
  title: string;
  duration: string;
  description: string;
  image: string;
  link?: string;
  tech: string[];
  github?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    title: "Resume Personal Website",
    duration: "Dec 2025",
    description:
      "A personal resume website built with Next.js to highlight experience, education, and projects in a clean and responsive layout.",
    // image:
    //   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop",
    image : "/project/Resume_Personal_Website.png",
    link: "https://shubhamnevare-resume.vercel.app/",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "lucide-icons"],
    github: "https://github.com/Shubham-Nevare/Personal-Resume",
    category: "Frontend",
  },
  {
    title: "Developous",
    duration: "July 2025",
    description: "A modern tech services hub for Web, Mobile, AI, Cloud, and UI/UX solutions. Developed using Next.js and Tailwind CSS, with best practices for high-performance deployment on Vercel.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // image: "/project/Developous.png",
    link: "https://developous.com",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS","lucide-icons"],
    github: "https://github.com/Shubham-Nevare/TechFoundry-",
    category: "Full Stack",
  },
  {
    title: "CareerConnect",
    duration: "Jul 2025",
    description: "A job portal platform enabling job seekers and employers to connect efficiently. Built using the MERN stack, deployed on Vercel and Render with integrated Cloudinary for image uploads.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "https://career-connect-jobs.vercel.app",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/Shubham-Nevare/CareerConnect.git",
    category: "Full Stack",
  },
 
  {
    title: "Digital Health",
    duration: "June 2025",
    description: "A secure, user-friendly digital health platform built with the MERN stack. It enables patient data management, online appointments, and real-time updates, deployed on Vercel and connected to MongoDB Atlas.",
    image: "https://plus.unsplash.com/premium_photo-1664478269201-bfe127044de0?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://digital-health-dh.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Shubham-Nevare/Digital-Health",
    category: "Full Stack",
  },
  {
    title: "Food delivery website",
    duration: "Feb 2025",
    description: "A modern, responsive, and user-friendly food delivery web application built using React.js and Tailwind CSS. This project allows users to browse restaurants, search for food, add items to the cart, and place orders seamlessly.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    link: "https://food-delivery-website-shubhams.vercel.app/",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Shubham-Nevare/Food-Delivery-Website",
    category: "Frontend",
  },
  {
    title: "Smart AI Bot",
    duration: "Jan 2025",
    description: "SmartAIBot is an advanced AI-powered chatbot to provide intelligent and human-like responses. The bot can be integrated into websites or applications to assist users with queries, automate customer support, and enhance user engagement.",
    image: "https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0JTIwYWklMjBib3R8ZW58MHx8MHx8fDA%3D",
    link: "https://smart-ai-bot.vercel.app/",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Shubham-Nevare/SmartAIBot",
    category: "Frontend",
  },
  {
    title: "Alex Book Finder",
    duration: "Sep 2025",
    description: "Alex Book Finder is a sleek and responsive web app designed for students and book lovers. It lets you explore millions of books via the Open Library API and offers features such as filtering, bookmarking, and exporting your reading list.",
    image: "https://images.unsplash.com/photo-1560693478-dfdb32f2176a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://book-finder-app-khaki.vercel.app/",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Shubham-Nevare/book-finder-app",
    category: "Full Stack",
  },
  {
    title: "Doctor Appointment Website",
    duration: "Dec 2024",
    description: "A Web application created using HTML and JavaScript and backend use PHP which holds details of doctor and patients, complete report of particular patient and other details of available laboratory, etc.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["PHP", "HTML", "CSS"],
    github: "https://github.com/Shubham-Nevare/Doctor-Appointment-Website",
    category: "Full Stack",
  },


  {
    title: "Portfolio Website",
    duration: "Feb 2025",
    description:
      "Personal portfolio showcasing work, projects, and skills with smooth animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1664748512003-8820b08d8161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbmFsJTIwcG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    link: "https://shubhamnevare.vercel.app/",
    category: "Frontend",
  },

  {
    title: "XOX / Rock Paper Scissors Game",
    duration: "Dec 2025",
    description:
      "A browser-based game combining Tic-Tac-Toe and Rock-Paper-Scissors with simple gameplay and clean UI.",
    image:
      "https://media.istockphoto.com/id/825160850/photo/tic-tac-toe-xo-game-tic-tac-toe-x-game-o-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=y59OaaXJdotJkDPi0JKheyRo1WuJ5-XvPnuiZFJsng4=",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://xox-rps-game.vercel.app/",
    category: "Frontend",
  },

  {
    title: "D2D Consultancy Website",
    duration: "Nov 2025",
    description:
      "A corporate consultancy website designed with responsive layouts, service sections, and contact forms.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://d2d-cunsultancy.vercel.app/",
    category: "Frontend",
  },

  {
    title: "Cake House Website",
    duration: "Nov 2025",
    description:
      "A bakery website showcasing cakes, pricing, and services with an appealing design.",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1600",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://cakehouse.vercel.app/",
    category: "Frontend",
  },

  {
    title: "PetPaws Hub",
    duration: "Nov 2025",
    description:
      "A modern website for pet care services with service listings and WhatsApp inquiry integration.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://petpaws-hub.vercel.app/",
    category: "Frontend",
  },

  {
    title: "Gym Mira Road",
    duration: "Oct 2025",
    description:
      "A gym and fitness website built to attract members using strong visuals and CTAs.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://gymmiraroad.vercel.app/",
    category: "Frontend",
  },

  {
    title: "Cars Doctor",
    duration: "Oct 2025",
    description:
      "An automotive service website showcasing repair services, pricing, and contact details.",
    image:
      "https://plus.unsplash.com/premium_photo-1661778512247-d5fcf4b52b37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycyUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://carsdoctor.vercel.app/",
    category: "Frontend",
  },

  {
    title: "Akruti Developers",
    duration: "Sep 2025",
    description:
      "A real-estate development website featuring projects, details, and contact sections.",
    image:
      "https://plus.unsplash.com/premium_photo-1681823237713-ce2b13124240?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://akruti-developers.vercel.app/",
    category: "Frontend",
  },

  {
    title: "Weather Agent Chat Interface",
    duration: "Oct 2025",
    description:
      "A chat-based weather assistant that fetches real-time data using backend APIs.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600",
    tech: ["React", "Node.js", "API Integration"],
    link: "https://weather-agent-chat-interface-waci.vercel.app/",
    category: "Full Stack",
  },

  {
    title: "Blog Save",
    duration: "Jun 2025",
    description:
      "A blogging platform that allows users to create, save, edit, and manage blog posts.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://blog-save.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "PlatiOne – Business Suite Website",
    duration: "Dec 2025",
    description:
      "A modern business suite website built with Next.js, focused on clean UI, responsive layouts, and fast performance for showcasing services and features.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    link: "https://platione.vercel.app/",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
  }, 
  {
    title: "Home Of Marketing",
    duration: "Dec 2025",
    description:
      "A modern marketing website designed to showcase services, promote brand visibility, and convert visitors through clear sections and responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop",
    link: "https://home-of-marketing.vercel.app/",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
  }
  
  
];

