/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "./components/SectionHeader";
const About: React.FC = (): JSX.Element => {
  return (
    <section className="landing-about -mt-[4rem]">
      <div className="container mx-auto flex gap-14 px-16 items-center">
        <div className="landing-About-left w-[40%]">
          <img
            src="/Tomato.svg"
            alt="About-image"
            className="object-contain w-full"
          />
        </div>

        <div className="landing-About-right w-[60%] flex flex-col gap-5 pl-10">
          <SectionHeader
            title="A propos"
            subTitle="Parlons  un peu de"
            name="ecofarm"
          />
          <p className="text-secondary-foreground">
            EcoFarm est une plateforme innovante où les agriculteurs peuvent
            demander des conseils personnalisés à l'IA pour optimiser leur
            production agricole. De plus, elle permet de vendre directement
            leurs produits à des prix raisonnables.
          </p>
          <div>
            <Button
              Icon={FaArrowRight}
              size="default"
              iconPlacement="right"
              className="rounded-full"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
