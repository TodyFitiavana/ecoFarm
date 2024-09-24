import React from "react";
import SectionHeader from "./components/SectionHeader";
import LandingCard from "@/components/common/cards/LandingCard";
import { landingCardData } from "@/helpers/constant";

const Features: React.FC = (): JSX.Element => {
  return (
    <section className="w-full mt-[80px]">
      <div className="mx-auto container px-20 flex flex-col gap-10 mb-20">
        <SectionHeader
          title="Fonctionnalités"
          subTitle="Que propose"
          varient="question"
          name="ecofarm"
        />
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
