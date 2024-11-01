/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";
import SplitText from "@/components/shared/animations/components/SplitText";
import TextSmooth from "@/components/shared/animations/TextSmooth";
import AnimatedElement from "@/components/shared/AnimatedElement";

const Description: FC = (): JSX.Element => {
  return (
    <section className="mt-[4rem] w-full overflow-hidden bg-white pb-5">
      <div className="container mx-auto flex gap-14 lg:px-14 px-5 items-center justify-between lg:flex-row flex-col">
        <TextSmooth duration={0.7} container=".landing-about" color="#282828">
          <h1 className="font-semibold text-2xl lg:text-3xl text-[#8E8E8E]">
            <SplitText
              text="Optimiser vos production"
              classn="letters-text-smooth"
            />
            <br /> pour de meilleurs résultats
          </h1>
        </TextSmooth>
        <AnimatedElement
          from={{ y: 155 }}
          to={{ opacity: 1, y: 0 }}
          delay={0.6}
          duration={0.9}
        >
          <p className="w-[500px] text-[#8E8E8E]">
            Grâce à EcoFarm, achetez directement des produits agricoles ou
            bénéficiez d'un accompagnement par l'IA pour optimiser vos
            productions et obtenir de meilleurs résultats.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Description;
