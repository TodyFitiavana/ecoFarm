import React from 'react';
import SectionHeader from './components/SectionHeader';
import AssistanceAccordion from './components/AssistanceAccordion';
import { assistanceAccordionData } from '@/helpers/constant';



const Assistance = () => {
    return (
      <section className="w-full mt-[80px]">
        <div className="mx-auto container px-20 flex  gap-20 mb-20">
          <div className="w-[60%]">
            <SectionHeader
              title="Etapes pour l’ assistance"
              subTitle="Comment avoir l’ assistance de l’ IA?"
            />
            {assistanceAccordionData.map((item, index) => (
              <AssistanceAccordion key={index} {...item} />
            ))}
          </div>
          <div className="w-[40%]">
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