import LandingCard from "@/components/shared/cards/LandingCard";
import { aboutCardData } from "@/helpers/constant";
import React from "react";
import SplitText from "@/components/shared/animations/components/SplitText";
import TextSmooth from "@/components/shared/animations/TextSmooth";
import AnimatedElement from "@/components/shared/AnimatedElement";

const About: React.FC = (): JSX.Element => {
  return (
    <section className="landing-about mt-[4rem] w-full overflow-hidden bg-white pb-5">
      <div className="container mx-auto flex gap-14 lg:px-14 px-5 items-center lg:flex-row flex-col">
        <div className="landing-about__container bg-grey02 w-full px-5 pt-14 pb-5 md:p-14 flex flex-col items-center rounded-lg md:rounded-[34px]">
          <header className="text-center">
            <TextSmooth
              duration={0.7}
              container=".landing-about"
              delay={0.9}
              color="#282828"
            >
              <AnimatedElement
                from={{ x: -55, opacity: 0 }}
                to={{ x: 0, opacity: 1 }}
                duration={0.3}
                delay={0.5}
              >
                <h2 className="font-semibold text-2xl lg:text-3xl">
                  <SplitText
                    text="Qui sommes-Nous?"
                    classn="letters-text-smooth"
                  />
                </h2>
              </AnimatedElement>
            </TextSmooth>
            <AnimatedElement
              from={{ y: -55, opacity: 0 }}
              to={{ y: 0, opacity: 1 }}
              duration={0.63}
              delay={0.8}
            >
              <p className="w-full md:w-[680px] mt-3 text-secondary-foreground">
                Nous visons à aider les agriculteurs à améliorer leur production
                et à vendre leurs produits à des prix équitables. Elle se
                décline en trois aspects clés.
              </p>
            </AnimatedElement>
          </header>
          <div className="content grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {aboutCardData.map((item, index) => (
              <AnimatedElement
                key={index}
                from={{
                  opacity: 0,
                  x: index === aboutCardData.length - 1 ? 250 : -250,
                  rotate: index === aboutCardData.length - 1 ? 80 : -80,
                  scale: index % 2 !== 0 ? 1 : undefined,
                }}
                to={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: index % 2 !== 0 ? 1 : undefined,
                  y: index % 2 !== 0 ? 0 : undefined,
                }}
                delay={(index + 2.5) * 0.4}
                duration={0.5}
              >
                <LandingCard {...item} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
