/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import LandingCard from "@/components/shared/cards/LandingCard";
import { aboutCardData } from "@/helpers/constant";
import React from "react";

const About: React.FC = (): JSX.Element => {
  return (
    <section className="landing-about mt-[4rem] w-full overflow-hidden bg-white pb-5">
      <div className="container mx-auto flex gap-14 lg:px-14 px-5 items-center lg:flex-row flex-col">
        <div className="landing-about__container bg-grey02 w-full p-14 flex flex-col items-center rounded-[34px]">
          <header className="text-center">
            <h2 className="text-black font-semibold text-3xl">
              Qui sommes-Nous?
            </h2>
            <p className="text-secondary-foreground w-[580px] mt-3">
              Nous visons à aider les agriculteurs à améliorer leur production
              et à vendre leurs produits à des prix équitables. Elle se décline
              en trois aspects clés.
            </p>
          </header>
          <div className="content grid gap-5 grid-cols-3 mt-16">
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
