"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Providers } from "@/lib/redux/provider";
import dynamic from "next/dynamic";

const DynamicLandingNav = dynamic(
  () => import("@/components/shared/navbars/LandingNav"),
  { suspense: true, loading: () => <LoadingScreen /> }
);
const DynamicHero = dynamic(
  () => import("@/components/sections/landing/Hero"),
  { suspense: true, loading: () => <LoadingScreen /> }
);
const DynamicAbout = dynamic(
  () => import("@/components/sections/landing/About"),
  { suspense: true, loading: () => <LoadingScreen /> }
);
const DynamicFooter = dynamic(
  () => import("@/components/sections/landing/Footer"),
  { suspense: true, loading: () => <LoadingScreen /> }
);

const LoadingScreen = () => (
  <div className="w-screen h-screen bg-red-200 fixed z-50 flex items-center justify-center">
    loading...
  </div>
);

const Landing: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Providers>
      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </Providers>
  );
};

export default Landing;
