"use client";

import React, { lazy, useState } from "react";
import { Providers } from "@/lib/redux/provider";
import LoadingScreen from "@/components/shared/loading/LoadingScreen";

const DynamicLandingNav = lazy(
  () => import("@/components/shared/navbars/LandingNav")
);
const DynamicHero = lazy(() => import("@/components/sections/landing/Hero"));
const DynamicAbout = lazy(() => import("@/components/sections/landing/About"));
const DynamicFooter = lazy(
  () => import("@/components/sections/landing/Footer")
);
const DynamicDescription = lazy(
  () => import("@/components/sections/landing/Description")
);

const Landing: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <Providers>
      <section className="landing-hero relative z-10">
        <DynamicLandingNav />
        <DynamicHero />
      </section>

      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!loading && (
        <>
          <section>
            <DynamicDescription />
          </section>
          <section className="landing-About">
            <DynamicAbout />
          </section>
          <section>
            <DynamicFooter />
          </section>
        </>
      )}
    </Providers>
  );
};

export default Landing;
