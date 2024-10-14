/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import HeroStatItem from "./components/HeroStatItem";
import {
  containerVariants,
  itemVariants,
} from "@/helpers/framerMotion/framerMotion";
const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="home__hero w-full overflow-hidden h-full">
      <div className="container mx-auto px-10 lg:px-20 flex lg:gap-20 mt-[19vh] flex-col md:flex-row">
        <motion.div
          className="hero-left w-full md:w-[47%] flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            className="font-cal-sans text-[2rem] lg:text-[2.65rem] md:text-[2.65rem] text-secondary"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-[#364423] bg-slate-300 p-2 rounded-full">
              L'agriculture
            </span>{" "}
            intelligente , à portée de main .
          </motion.h2>
          <motion.p
            className="w-[95%] text-secondary-foreground"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            Grâce à EcoFarm, achetez directement des produits agricoles ou
            bénéficiez d'un accompagnement par l'IA pour optimiser vos
            productions et obtenir de meilleurs résultats.
          </motion.p>
          <motion.div
            className="hero-button flex gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Button className="rounded-full">Commencer</Button>
            <Button
              variant="ghost"
              Icon={FaArrowRight}
              size="default"
              iconPlacement="right"
            >
              Nous contacter
            </Button>
          </motion.div>
          <motion.footer
            className="flex gap-20 mt-[3vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <HeroStatItem nombre="+50" nom="Agriculteurs" />
            <HeroStatItem nombre="+150" nom="Produit Agricoles" />
          </motion.footer>
        </motion.div>
        <motion.div
          className="hero-right lg:w-[53%] relative w-full flex items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src="/hero-shape.svg"
            alt="logo"
            className="object-contain h-full w-full mt-[-10vh]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
