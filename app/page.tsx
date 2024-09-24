"use client";

import LandingNav from "@/components/common/navbars/LandingNav";
import About from "@/components/sections/landing/About";
import Hero from "@/components/sections/landing/Hero";
import React from "react";
const Landing: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="landing-hero">
        <LandingNav />
        <Hero />
      </section>
      <section>
        <About/>
      </section>
    </>
  );
};

export default Landing;
