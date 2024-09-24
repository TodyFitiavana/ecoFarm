import React from 'react';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';
const About:React.FC= ():JSX.Element => {
    return (
      <section className="landing-about w-[100%]">
        <div className="container mx-auto flex gap-20 px-20">
          <div className="landing-About-left w-[35%] h-screen">
            <img
              src="/Tomato.svg"
              alt="About-image"
              className="object-contain w-full"
            />
          </div>
          <div className="landing-About-right w-[65%] h-screen flex flex-col gap-5 pl-20">
            <h2 className="text-primary text-[27px]">A propos</h2>
            <h1 className="text-[40px] font-cal-sans">
              Parlons un peu de{" "}
              <span className="text-[#364423] bg-slate-300 p-2 rounded-full">
                EcoFarm
              </span>{" "}
            </h1>
            <p className="text-secondary-foreground">
              EcoFarm est une plateforme innovante où les agriculteurs peuvent
              demander des conseils personnalisés à l'IA pour optimiser leur
              production agricole. De plus, elle permet de vendre directement
              leurs produits à des prix raisonnables.
            </p>
            <div>
              <Button
                Icon={FaArrowRight}
                size="default"
                iconPlacement="right"
                className="rounded-full"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;