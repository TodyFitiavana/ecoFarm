/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionHeader from "./components/SectionHeader";
import LandingCard from "@/components/common/cards/LandingCard";
import { landingCardData } from "@/helpers/constant";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const Features: React.FC = (): JSX.Element => {
  return (
    <section className="w-full overflow-hidden mt-[4rem]">
      <div className="mx-auto container lg:px-20 px-10 flex flex-col gap-10 mb-20 ">
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
              className="rounded-full text-white lg:flex hidden"
            >
              Discuter avec l'IA
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-flow-col gap-7 grid-cols-1 md:grid-cols-2">
          {landingCardData.map((item, index) => (
            <LandingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
