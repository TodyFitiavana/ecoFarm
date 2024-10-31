"use client";

import LandingNav from "@/components/shared/navbars/LandingNav";
import About from "@/components/sections/landing/About";
import Footer from "@/components/sections/landing/Footer";
import Hero from "@/components/sections/landing/Hero";
import React, { Suspense } from "react";

const Landing: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback>
      <section className="landing-hero">
        <LandingNav />
        <Hero />
      </section>
      <section className="landing-About">
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </Suspense>
  );
};

export default Landing;
