"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const textRef = useRef(null);
  const barsRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const letters = textRef.current?.querySelectorAll("span");
    if (letters) {
      gsap.fromTo(
        letters,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "bounce",
          repeat: -1,
          yoyo: true,
        }
      );
    }

    const bars = barsRef.current?.querySelectorAll(".bar");
    if (bars) {
      gsap.to(bars, {
        height: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.inOut",
        delay: 1.5,
        onComplete: () => {
          onComplete();
        },
      });

      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 2,
      });

      gsap.to(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 3,
      });
    }
  }, [onComplete]);

  const colors = [
    "rgb(12, 226, 12)",
    "rgb(50, 230, 50)",
    "rgb(98, 235, 98)",
    "rgb(139, 235, 139)",
    "rgb(175, 231, 175)",
    "rgb(202, 223, 202)",
  ];

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      ref={ref}
    >
      <div ref={barsRef} className="absolute inset-0 flex w-screen">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="bar w-[10vw] h-[105vh] bg-white"></div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span ref={textRef} className="fallingText">
          {Array.from("Chargement...").map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ color: colors[index % colors.length] }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
