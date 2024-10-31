"use client";

import React from "react";
import { Providers } from "@/lib/redux/provider";
import dynamic from "next/dynamic";

const DynamicLandingNav = dynamic(
  () => import("@/components/shared/navbars/LandingNav"),
  {  loading: () => <LoadingScreen /> }
);
const DynamicHero = dynamic(
  () => import("@/components/sections/landing/Hero"),
  {  loading: () => <LoadingScreen /> }
);
const DynamicAbout = dynamic(
  () => import("@/components/sections/landing/About"),
  {  loading: () => <LoadingScreen /> }
);
const DynamicFooter = dynamic(
  () => import("@/components/sections/landing/Footer"),
  {  loading: () => <LoadingScreen /> }
);

const LoadingScreen = () => (
  <div className="w-screen h-screen bg-red-300 fixed z-50 flex items-center justify-center">
    loading...
  </div>
);

const Landing: React.FC = (): JSX.Element => {
  return (
    <Providers>
      <section className="landing-hero">
        <DynamicLandingNav />
        <DynamicHero />
      </section>
      <section className="landing-About">
        <DynamicAbout />
      </section>
      <section>
        <DynamicFooter />
      </section>
    </Providers>
  );
};

export default Landing;
