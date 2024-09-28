import React from "react";
import SectionHeader from "./components/SectionHeader";
import AssistanceAccordion from "./components/AssistanceAccordion";
import { assistanceAccordionData } from "@/helpers/constant";

const Assistance = () => {
  return (
    <section className="w-full overflow-hidden lg:mt-[80px]">
      <div className="mx-auto container lg:px-20 px-10 flex  gap-20 mb-20 lg:flex-row flex-col">
        <div className="lg:w-[55%] w-full flex flex-col gap-5">
          <SectionHeader
            title="Etapes pour l’ assistance"
            subTitle="Comment avoir l’ assistance de l’ IA?"
          />
          {assistanceAccordionData.map((item, index) => (
            <AssistanceAccordion key={index} {...item} />
          ))}
        </div>
        <div className="lg:w-[45%] w-full">
          <img
            src="/assistance.svg"
            alt="logo-assistance"
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Assistance;
