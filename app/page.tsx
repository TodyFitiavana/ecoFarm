"use client";

import LandingNav from "@/components/common/navbars/LandingNav";
import Hero from "@/components/sections/landing/Hero";
import React from "react";

const Landing: React.FC = (): JSX.Element => {
  return (
    <section className="landing-hero">
      <LandingNav />
      <Hero/>
    </section>
  );
};

export default Landing;
