"use client";

import LandingNav from "@/components/common/navbars/LandingNav";
import About from "@/components/sections/landing/About";
import Assistance from "@/components/sections/landing/Assistance";
import Features from "@/components/sections/landing/Features";
import Footer from "@/components/sections/landing/Footer";
import Hero from "@/components/sections/landing/Hero";
import React from "react";
const Landing: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="landing-hero">
        <LandingNav />
        <Hero />
      </section>
      <section className="landing-About">
        <About/>
      </section>
      <section className="landing-features">
        <Features/>
      </section>
      <section className="landing-assistance">
        <Assistance/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
};

export default Landing;
