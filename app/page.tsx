"use client";

import React, { Suspense, useState, useEffect, useRef, lazy } from "react";
import { Providers } from "@/lib/redux/provider";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

const DynamicLandingNav = dynamic(
  () => import("@/components/shared/navbars/LandingNav"),
  { suspense: true, loading: () => <LoadingScreen /> }
);
const DynamicHero = dynamic(
  () => import("@/components/sections/landing/Hero"),
  { suspense: true, loading: () => <LoadingScreen /> }
);
const DynamicAbout = lazy(() => import("@/components/sections/landing/About"));
const DynamicFooter = lazy(
  () => import("@/components/sections/landing/Footer")
);
const DynamicDescription = lazy(
  () => import("@/components/sections/landing/Description")
);

const LoadingScreen = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");
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
  }, []);

  const colors = [
    "rgb(12, 226, 12)",
    "rgb(50, 230, 50)",
    "rgb(98, 235, 98)",
    "rgb(139, 235, 139)",
    "rgb(175, 231, 175)",
    "rgb(202, 223, 202)",
  ];

  return (
    <div className="w-screen h-screen fixed z-50 flex items-center justify-center bg-animated">
      <div className="relative">
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
    </div>
  );
};

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
        <section>
          <DynamicDescription />
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
