/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "./components/SectionHeader";
import { itemVariants, containerVariants } from "@/helpers/framerMotion/framerMotion";

const About: React.FC = (): JSX.Element => {
  return (
    <section className="landing-about mt-[4rem] w-full overflow-hidden">
      <div className="container mx-auto flex gap-14 lg:px-16 px-5 items-center lg:flex-row flex-col">
        <motion.div
          className="landing-About-left w-[40%] lg:flex hidden"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/Tomato.svg"
            alt="About-image"
            className="object-contain w-full"
          />
        </motion.div>

        <motion.div
          className="landing-About-right lg:w-[60%] w-full flex flex-col gap-5 pl-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <SectionHeader
            title="A propos"
            subTitle="Parlons  un peu de"
            name="ecofarm"
          />
          <motion.p
            className="text-secondary-foreground"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            EcoFarm est une plateforme innovante où les agriculteurs peuvent
            demander des conseils personnalisés à l'IA pour optimiser leur
            production agricole. De plus, elle permet de vendre directement
            leurs produits à des prix raisonnables.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Button
              Icon={FaArrowRight}
              size="default"
              iconPlacement="right"
              className="rounded-full"
            >
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
