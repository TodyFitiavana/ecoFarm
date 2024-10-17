/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import SectionHeader from "./components/SectionHeader";
import AssistanceAccordion from "./components/AssistanceAccordion";
import { assistanceAccordionData } from "@/helpers/constant";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/helpers/framerMotion/framerMotion";

const Assistance = () => {
  return (
    <section className="w-full overflow-hidden lg:mt-[80px]">
      <motion.div
        className="mx-auto container lg:px-20 px-10 flex  gap-20 mb-20 lg:flex-row flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          className="lg:w-[55%] w-full flex flex-col gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <SectionHeader
            title="Etapes pour l’ assistance"
            subTitle="Comment avoir l’ assistance de l’ IA?"
          />
          {assistanceAccordionData.map((item, index) => (
            <AssistanceAccordion key={index} {...item} />
          ))}
        </motion.div>
        <motion.div
          className="lg:w-[45%] w-full"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/assistance.svg"
            alt="logo-assistance"
            className="object-contain w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Assistance;
