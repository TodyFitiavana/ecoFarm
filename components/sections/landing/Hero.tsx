/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import HeroStatItem from "./components/HeroStatItem";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section className="home__hero w-full h-[100%]">
      <div className="container mx-auto flex gap-20">
        <div className="hero-left w-[65%] h-screen flex flex-col gap-5 justify-center pl-14">
          <h2 className="font-bold text-[35px]">
            <span className="text-[#364423] bg-slate-300 p-2 rounded-full">
              L'Agriculteur
            </span>{" "}
            intelligente , à <br />
            portée de main .
          </h2>
          <p className="w-[80%]">
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
          <footer className="flex gap-20">
            <HeroStatItem nombre="+50" nom="Agriculteurs" />
            <HeroStatItem nombre="+150" nom="Produit Agricoles" />
          </footer>
        </div>
        <div className="hero-right w-[35%] h-screen flex justify-center items-center ">
          <img src="/Rectangle.svg" alt="logo" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
