/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import FooterNav from "@/components/common/navbars/footer/FooterNav";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full ">
      <div className="bg-[#D9F2B4]">
        <div className="container mx-auto flex flex-col gap-5">
          <div className="flex flex-row px-20 gap-20 h-[336px] justify-center items-center">
            <div className="w-[70%] flex flex-col gap-5">
              <h1 className="font-cal-sans text-[40px]">Besoin d’ aide?</h1>
              <p className="text-[#282828A6]">
                Nous avons intégré une assistance à l'aide d'une intelligence
                artificielle via un chatbot pour répondre à vos questions et
                vous assister.
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
            <div className="w-[30%] justify-center">
              <img
                src="/bots.svg"
                alt="footer-img"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container flex flex-col px-20 gap-2 h-[336px] justify-center items-center">
          <h1 className="font-cal-sans text-[37px]"> Restez serein.</h1>
          <h1 className="font-cal-sans text-[37px]">Rejoignez-nous</h1>
          <div className="button flex gap-4">
            <Button variant="ghost">Se connecter</Button>
            <Button className="rounded-full">S'inscrire</Button>
          </div>
        </div>
      </div>
      <FooterNav/>
    </section>
  );
};

export default Footer;
