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
              duration={0.6}
              container=".landing-about"
              color="#282828"
            >
              <h2 className="font-semibold text-2xl lg:text-3xl">
                <SplitText
                  text="Qui sommes-Nous?"
                  classn="letters-text-smooth"
                />
              </h2>
            </TextSmooth>
            <TextSmooth
              duration={0.01}
              container=".landing-about"
              color="rgba(40, 40, 40, 0.65)"
            >
              <p className="w-full md:w-[680px] mt-3">
                <SplitText
                  text="Nous visons à aider les agriculteurs à améliorer leur production et à vendre leurs produits à des prix équitables. Elle se décline en trois aspects clés."
                  classn="letters-text-smooth"
                />
              </p>
            </TextSmooth>
          </header>
          <div className="content grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {aboutCardData.map((item, index) => (
              <AnimatedElement
                key={index}
                from={{
                  opacity: 0,
                  x: index % 2 === 0 ? -250 : undefined,
                  rotate: index % 2 === 0 ? -80 : undefined,
                  scale: index % 2 !== 0 ? 1 : undefined,
                }}
                to={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: index % 2 !== 0 ? 1 : undefined,
                  y: index % 2 !== 0 ? 0 : undefined,
                }}
                delay={(index + 4) * 0.3}
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
