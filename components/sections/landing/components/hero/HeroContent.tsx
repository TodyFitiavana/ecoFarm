/* eslint-disable @next/next/no-img-element */
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Button } from "@/components/ui/button";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HeroContent = () => {
  return (
    <div className="hero-content w-full">
      <div className="container mx-auto flex justify-between px-5 md:px-12 w-full">
        <div className="flex flex-col justify-start gap-5 md:pt-[18vh] w-full md:w-[600px]">
          <AnimatedElement
            from={{ opacity: 0, x: -55 }}
            to={{ opacity: 1, x: 0 }}
            delay={0.9}
            duration={0.5}
          >
            <p className="text-[#D9D9D9] backgroundBlur w-max p-2 px-3 rounded-lg text-sm">
              #1 des Plateformes à Madagascar
            </p>
          </AnimatedElement>
          <h1 className="text-[2.2em] md:text-[3em] lg:text-[3.3em] font-normal text-start leading-tight">
            {[
              "L'agriculture",
              "Intelligente",
              "à",
              "votre",
              "portée",
              "de",
              "main",
            ].map((word, index) => (
              <span key={index} className="inline-block">
                {word.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block letters"
                    dangerouslySetInnerHTML={{ __html: letter }}
                  />
                ))}
                {index < 7 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </h1>

          <div className="flex gap-5 md:gap-10">
            <AnimatedElement
              from={{ opacity: 0, y: -55 }}
              to={{ opacity: 1, y: 0 }}
              delay={0.5}
              duration={0.5}
            >
              <Button
                iconPlacement="right"
                Icon={BsArrowUpRightCircle}
                variant="ghost"
                className="border-b-[1px] rounded-b-none rounded-t-lg hover:rounded-lg px-1"
              >
                Commencer
              </Button>
            </AnimatedElement>
            <AnimatedElement
              from={{ opacity: 0, y: 55 }}
              to={{ opacity: 1, y: 0 }}
              delay={0.9}
              duration={0.5}
            >
              <Button
                iconPlacement="right"
                Icon={BsArrowUpRightCircle}
                variant="ghost"
                className="border-b-[1px] rounded-b-none rounded-t-lg hover:rounded-lg px-1"
              >
                Se connecter
              </Button>
            </AnimatedElement>
          </div>
        </div>
        <div className="w-[290px] pt-[6vh] pb-[20vh] lg:flex hidden">
          <div className="flex flex-col gap-3 justify-start items-center backdrop-blur p-2 rounded-lg  backgroundBlur">
            <AnimatedElement
              from={{ opacity: 0, y: 55 }}
              to={{ opacity: 1, y: 0 }}
              delay={0.9}
              duration={0.5}
            >
              <div className="flex">
                <img src="./image.png" alt="image/hero" />
                <IoIosCloseCircleOutline className="absolute top-0 right-0" />
              </div>
            </AnimatedElement>
            <AnimatedElement
              from={{ opacity: 0, x: -55 }}
              to={{ opacity: 1, x: 0 }}
              delay={0.9}
              duration={0.5}
            >
              <div className="flex items-center gap-3 p-2">
                <p className="text-lg font-normal">
                  Soutien aux agriculteurs locaux{" "}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
