/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import HeroContent from "./components/hero/HeroContent";
import HeroState from "./components/hero/HeroState";

const Hero: React.FC = (): JSX.Element => {
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
