"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import HeroStatItem from "./components/HeroStatItem";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="home__hero">
      <div className="container mx-auto px-20 flex gap-20 mt-[19vh] items-start">
        <div className="hero-left w-[47%] flex flex-col gap-6">
          <h2 className="font-cal-sans text-[2.65rem] text-secondary">
            <span className="text-[#364423] bg-slate-300 p-2 rounded-full">
              L'agriculture
            </span>{" "}
            intelligente , à portée de main .
          </h2>
          <p className="w-[95%] text-secondary-foreground">
            Grâce à EcoFarm, achetez directement des produits agricoles ou
            bénéficiez d'un accompagnement par l'IA pour optimiser vos
            productions et obtenir de meilleurs résultats.
          </p>
          <div className="hero-button flex gap-5">
            <Button className="rounded-full">Commencer</Button>
            <Button
              variant="ghost"
              Icon={FaArrowRight}
              size="default"
              iconPlacement="right"
            >
              Nous contacter
            </Button>
          </div>
          <footer className="flex gap-20 mt-[3vh]">
            <HeroStatItem nombre="+50" nom="Agriculteurs" />
            <HeroStatItem nombre="+150" nom="Produit Agricoles" />
          </footer>
        </div>
        <div className="hero-right w-[53%] relative -top-[14vh]">
          <img
            src="/hero-shape.svg"
            alt="logo"
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
