/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import LandingCard from "@/components/shared/cards/LandingCard";
import { aboutCardData } from "@/helpers/constant";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SplitText = ({ text }: { text: string }) => {
  return (
    <span className="split-text">
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block text-gray-500">
          {char}
        </span>
      ))}
    </span>
  );
};

const About: React.FC = (): JSX.Element => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const letters = document.querySelectorAll(".split-text span");

    if (letters.length > 0) {
      const anim = gsap.to(letters, {
        color: "#000000",
        duration: 0.01,
        stagger: 0.03,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: ".landing-about__container",
        start: "top 80%",
        onEnter: () => anim.play(),
      });

      return () => {
        anim.kill();
      };
    }
  }, []);

  return (
    <section className="landing-about mt-[4rem] w-full overflow-hidden bg-white pb-5">
      <div className="container mx-auto flex gap-14 lg:px-14 px-5 items-center lg:flex-row flex-col">
        <div className="landing-about__container bg-grey02 w-full px-5 pt-14 pb-5 md:p-14 flex flex-col items-center rounded-lg md:rounded-[34px]">
          <header className="text-center">
            <h2 className="font-semibold text-2xl lg:text-3xl">
              <SplitText text="Qui sommes-Nous?" />
            </h2>
            <p className="w-full md:w-[580px] mt-3">
              <SplitText text="Nous visons à aider les agriculteurs à améliorer leur production et à vendre leurs produits à des prix équitables. Elle se décline en trois aspects clés." />
            </p>
          </header>
          <div className="content grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {aboutCardData.map((item, index) => (
              <LandingCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
