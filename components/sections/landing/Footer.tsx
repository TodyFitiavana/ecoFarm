/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import FooterNav from "@/components/common/navbars/footer/FooterNav";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "@/helpers/framerMotion/framerMotion";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.section
      className="w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="bg-[#D9F2B4]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          className="container mx-auto flex lg:flex-row flex-col lg:px-20 px-10 lg:gap-20 justify-center items-center py-10 md:text-center lg:text-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            className="lg:w-[70%] w-full flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h1
              className="font-cal-sans lg:text-[40px] text-[2rem]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              Besoin d’ aide?
            </motion.h1>
            <motion.p
              className="text-[#282828A6]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              Nous avons intégré une assistance à l'aide d'une intelligence
              artificielle via un chatbot pour répondre à vos questions et vous
              assister.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Button
                variant="secondary"
                Icon={FaArrowRight}
                size="default"
                iconPlacement="right"
                className="rounded-full text-white"
              >
                Discuter avec l'IA
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[30%] justify-center lg:flex hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img src="/bots.svg" alt="footer-img" className="object-contain" />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full h-[50%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          className="container flex flex-col px-20 lg:h-[336px] h-[50%] justify-center items-center p-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h1
            className="font-cal-sans lg:text-[37px] text-[2rem] "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {" "}
            Restez serein.
          </motion.h1>
          <motion.h1
            className="font-cal-sans lg:text-[37px] text-[2rem]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            Rejoignez-nous
          </motion.h1>
          <motion.div
            className="button flex gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <Button variant="ghost">Se connecter</Button>
            <Button className="rounded-full">S'inscrire</Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <FooterNav />
    </motion.section>
  );
};

export default Footer;
