import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function CursorGSAP() {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  // GSAP for Animation
  useEffect(() => {
    gsap.from(sectionRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    // Cursor tracking animation
    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className="h-[40px] w-[40px] bg-blue-500 rounded-full fixed z-[9999] pointer-events-none text-center text-[15px] flex items-center justify-center  font-bold text-black whitespace-nowrap"
    ></div>
  );
}

export default CursorGSAP;
