/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HeroContent = () => {
  return (
    <div className="hero-content w-full">
      <div className="container mx-auto flex justify-between px-12 w-full">
        <div className="flex flex-col justify-start gap-5 md:pt-[18vh] w-full md:w-[650px]">
          <p className="text-[#D9D9D9] backgroundBlur w-max p-2 px-3 rounded-lg text-sm">
            #1 des Plateformes à Madagascar
          </p>
          <h1 className="text-[2.6em] md:text-[3em] lg:text-[3.3em] font-normal text-start">
            L’agriculture Intelligente, à votre portée de main.
          </h1>

          <div className="flex gap-10">
            <Button
              iconPlacement="right"
              Icon={BsArrowUpRightCircle}
              variant="ghost"
              className="border-b-[1px] rounded-b-none rounded-t-lg hover:rounded-lg px-1"
            >
              Commencer
            </Button>
            <Button
              iconPlacement="right"
              Icon={BsArrowUpRightCircle}
              variant="ghost"
              className="border-b-[1px] rounded-b-none rounded-t-lg hover:rounded-lg px-1"
            >
              Se connecter
            </Button>
          </div>
        </div>
        <div className="w-[290px] pt-[6vh] pb-[20vh] lg:flex hidden">
          <div className="flex flex-col gap-3 justify-start items-center backdrop-blur p-2 rounded-lg  backgroundBlur">
            <div className="flex">
              <img src="./image.png" alt="image/hero" />
              <IoIosCloseCircleOutline className="absolute top-0 right-0" />
            </div>
            <div className="flex items-center gap-3 p-2">
              <p className="text-lg font-normal">
                Soutien aux agriculteurs locaux{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
