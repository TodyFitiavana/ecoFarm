import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import AnimatedElement from "@/components/shared/AnimatedElement";

const HeroState = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // L'animation ne se déclenche qu'une fois
  });

  const animatedNumber = (value) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { number } = useSpring({
      from: { number: 0 },
      number: inView ? value : 0,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return number.to((n) => Math.floor(n));
  };

  return (
    <div
      ref={ref}
      className="w-max grid grid-cols-3 justify-around items-center bg-white p-3 px-5"
      style={{ borderRadius: "20px 0px 0px 0px" }}
    >
      <div className="px-2">
        <h1 className="text-[35px] lg:text-[50px] text-black">
          <animated.span>{animatedNumber(50)}</animated.span>
        </h1>
        <AnimatedElement
          from={{ opacity: 0, x: -55 }}
          to={{ opacity: 1, x: 0 }}
          delay={0.9}
          duration={0.5}
        >
          <p className="text-[#8E8E8E] text-start w-[190px] lg:w-[170px] flex-grow">
            Agriculteurs locaux bénéficiaires
          </p>
        </AnimatedElement>
      </div>
      <div className="px-2">
        <h1 className="text-[35px] lg:text-[50px] text-black">
          <animated.span>{animatedNumber(150)}</animated.span>
        </h1>
        <AnimatedElement
          from={{ opacity: 0, x: -55 }}
          to={{ opacity: 1, x: 0 }}
          delay={0.9}
          duration={0.5}
        ><p className="text-[#8E8E8E] flex-grow">Produits agricoles</p>
        </AnimatedElement>
      </div>
      <div className="px-2">
        <h1 className="text-[35px] lg:text-[50px] text-black">
          <animated.span>{animatedNumber(125)}</animated.span>
        </h1>
        <AnimatedElement
          from={{ opacity: 0, x: -55 }}
          to={{ opacity: 1, x: 0 }}
          delay={0.9}
          duration={0.5}
        ><p className="text-[#8E8E8E] flex-grow">Tonnes de productions</p>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default HeroState;
