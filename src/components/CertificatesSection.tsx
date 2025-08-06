import gsap from "gsap";
import { Award, ExternalLink } from "lucide-react";
import { RefObject, useEffect, useRef, useCallback } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface CertificateSectionProps {
  cursorRef: RefObject<HTMLDivElement>;
}

function CertificatesSection({ cursorRef }: CertificateSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const draggableRef = useRef<Draggable | null>(null);

  // Initialize animation and draggable
  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const certificatesWidth = scrollRef.current.scrollWidth / 2;
      const containerWidth = containerRef.current.offsetWidth;

      // Only animate if content overflows
      if (certificatesWidth > containerWidth) {
        tweenRef.current = gsap.to(scrollRef.current, {
          xPercent: -50,
          repeat: -1,
          ease: "none",
          duration: 20,
        });

        draggableRef.current = Draggable.create(scrollRef.current, {
          type: "x",
          bounds: {
            minX: containerWidth - certificatesWidth * 2,
            maxX: 0
          },
          edgeResistance: 0.8,
          inertia: true,
          onDrag: function() {
            if (tweenRef.current && tweenRef.current.isActive()) {
              tweenRef.current.pause();
            }
          },
          onThrowComplete: function() {
            if (tweenRef.current && !tweenRef.current.isActive()) {
              tweenRef.current.resume();
            }
          }
        })[0];
      }
    }

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      if (draggableRef.current) draggableRef.current.kill();
    };
  }, []);

  const pauseScroll = useCallback(() => {
    if (tweenRef.current && tweenRef.current.isActive()) {
      tweenRef.current.pause();
    }
  }, []);

  const resumeScroll = useCallback(() => {
    if (tweenRef.current && !tweenRef.current.isActive()) {
      tweenRef.current.resume();
    }
  }, []);

  // Set up event listeners
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mouseenter", pauseScroll);
      el.addEventListener("mouseleave", resumeScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("mouseenter", pauseScroll);
        el.removeEventListener("mouseleave", resumeScroll);
      }
    };
  }, [pauseScroll, resumeScroll]);

  const certificates = [
    {
      title: "Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "July 2024",
      image: "https://plus.unsplash.com/premium_photo-1682124710157-d1573373a4f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfDB8MHx8fDA%3D",
      link: "https://drive.google.com/file/d/1_bwj_doBGUUUqHPa3HL6BN2ScrHO9LQK/view?usp=sharing",
      badge: "https://www.credly.com/go/YUoIBeIR",
      hoverName: "ML",
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS Academy",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3VkJTIwZm91bmRhdGlvbiUyMGF3c3xlbnwwfDB8MHx8fDA%3D",
      link: "https://drive.google.com/file/d/1hh-Pzpb-kC8ZSQ_Pf-X3XPhtANgFwL5C/view?usp=sharing",
      badge: "https://www.credly.com/go/q1vOGdTE",
      hoverName: "Cloud",
    },
    {
      title: "React Developer Certification",
      issuer: "SimpliLearn",
      date: "March 2025",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      link: "https://drive.google.com/file/d/1tZ11BUfB9KEqvOXk6dcEBe6dqqyA_Zut/view?usp=sharing",
      hoverName: "React Dev.",
    },
    {
      title: "SQL",
      issuer: " Newton School",
      date: "March 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMixxo0AHShAGpvUCCQv69tU8IWepmIdzNeg&s",
      link: "https://drive.google.com/file/d/1qwgS2ZQb6cFELoBDiqFfQdkEMGiwIB8_/view?usp=sharing",
      hoverName: "SQL",
    },
    {
      title: "Power BI",
      issuer: " Newton School",
      date: "March 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT2fjTofco1q2A-hedCVAp2Zuy_9qc5P6fw&s",
      link: "https://drive.google.com/file/d/1mSPObF52KPQy7Dlv92Si5qFtjqUu2LTa/view?usp=sharing",
      hoverName: "Power BI",
    },
  ];

  const handleMouseEnter = (hoverName: string) => {
    if (cursorRef.current) {
      cursorRef.current.innerHTML = hoverName || "No title";
      gsap.to(cursorRef.current, {
        width: "auto",
        height: "auto",
        padding: "8px 12px",
        fontSize: "12px",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.innerHTML = "";
      gsap.to(cursorRef.current, {
        width: 30,
        height: 30,
        padding: 0,
        fontSize: "10px",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div 
          ref={containerRef}
          className="relative"
        >
          <div
            ref={scrollRef}
            className="flex gap-6 w-max"
          >
            {[...certificates, ...certificates].map((certificate, index) => (
              <div
                key={index}
                className="shrink-0 w-72 bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-blue-400 hover:-translate-y-1"
                onMouseEnter={() => handleMouseEnter(certificate.hoverName)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
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
                  <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                    {certificate.title}
                  </h3>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400 text-sm line-clamp-1">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-500 text-xs shrink-0 ml-2">
                      {certificate.date}
                    </p>
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
      </div>
    </section>
  );
}

export default CertificatesSection;