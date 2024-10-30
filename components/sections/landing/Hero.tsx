/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import HeroContent from "./components/hero/HeroContent";
import HeroState from "./components/hero/HeroState";
import gsap from "gsap";

const Hero: React.FC = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    if (ref.current) {
      const letters = ref.current.querySelectorAll(".letters");

      gsap.fromTo(
        letters,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.25,
          ease: "power2.out",
        }
      );
    }
  }, []);
  return (
    <section className="w-full h-screen overflow-x-hidden md:px-4">
      <div
        className="relative z-10 text-white text-center p-5 w-full h-screen md:rounded-3xl flex items-center"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        ref={ref}
      >
        <HeroContent />
        <div className="absolute right-0 end-0 bottom-0 hidden md:flex">
          <HeroState />
        </div>
      </div>
    </section>
  );
};

export default Hero;
