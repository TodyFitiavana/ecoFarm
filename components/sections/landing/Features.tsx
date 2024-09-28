/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionHeader from "./components/SectionHeader";
import LandingCard from "@/components/common/cards/LandingCard";
import { landingCardData } from "@/helpers/constant";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const Features: React.FC = (): JSX.Element => {
  return (
    <section className="w-full mt-[4rem]">
      <div className="mx-auto container px-20 flex flex-col gap-10 mb-20">
        <div className="flex justify-between items-center">
          <SectionHeader
            title="Fonctionnalités"
            subTitle="Que propose"
            varient="question"
            name="ecofarm"
          />
          <div>
            <Button
              variant="secondary"
              Icon={FaArrowRight}
              size="default"
              iconPlacement="right"
              className="rounded-full text-white"
            >
              Discuter avec l'IA
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-flow-col gap-7">
          {landingCardData.map((item, index) => (
            <LandingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
