import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FadeInText = ({ text }) => {
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(
      textRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );
  }, []);

  return (
    <div className="fade-in-text">
      {text.split("").map((char, index) => (
        <span key={index} ref={(el) => (textRefs.current[index] = el)}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default FadeInText;
