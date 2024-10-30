/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import FooterNav from "@/components/shared/navbars/footer/FooterNav";
import { Button } from "@/components/ui/button";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="bg-[#D9F2B4]">
        <div className="container mx-auto flex lg:flex-row flex-col lg:px-20 px-10 lg:gap-20 justify-center items-center py-10 md:text-center lg:text-start">
          <div className="lg:w-[70%] w-full flex flex-col gap-5">
            <h1 className="font-cal-sans lg:text-[40px] text-[2rem]">
              Besoin d’ aide?
            </h1>
            <p className="text-[#282828A6]">
              Nous avons intégré une assistance à l'aide d'une intelligence
              artificielle via un chatbot pour répondre à vos questions et vous
              assister.
            </p>
            <div>
              <Button
                variant="secondary"
                Icon={FaArrowRight}
                size="default"
                iconPlacement="right"
                className="rounded-full text-white"
              >
                Discuter avec l'IA
              </Button>
            </div>
          </div>
          <div className="w-[30%] justify-center lg:flex hidden">
            <img src="/bots.svg" alt="footer-img" className="object-contain" />
          </div>
        </div>
      </div>
      <div className="w-full h-[50%]">
        <div className="container flex flex-col px-20 lg:h-[336px] h-[50%] justify-center items-center">
          <h1 className="font-cal-sans lg:text-[37px] text-[2rem]">
            {" "}
            Restez serein.
          </h1>
          <h1 className="font-cal-sans lg:text-[37px] text-[2rem] mt-[-12px]">
            Rejoignez-nous
          </h1>
          <div className="button flex gap-4 mt-[20px]">
            <Button variant="ghost">Se connecter</Button>
            <Button className="rounded-full">S'inscrire</Button>
          </div>
        </div>
      </div>
      <FooterNav />
    </section>
  );
};

export default Footer;
