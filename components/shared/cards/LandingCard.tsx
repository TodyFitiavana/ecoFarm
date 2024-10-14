"use client"

import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { motion } from "framer-motion";
import { LandingCardTypes } from "@/helpers/types/types";
import { motion } from "framer-motion";
import { containerVariants } from "@/helpers/framerMotion/framerMotion";

const LandingCard: React.FC<LandingCardTypes> = ({
  lotlie,
  title,
  description,
  index,
  bgColor,
}): JSX.Element => {
  return (
    <Card
      className={`rounded-[15px] ${
        index === 2 ? "md:col-span-2" : "md:col-span-1"
      }`}
      style={{ backgroundColor: `${bgColor as string}` }}
    >
      <DotLottiePlayer src={`${lotlie}`} loop autoplay className="w-[150px]" />
      <CardHeader>
        <CardTitle className="font-cal-sans from-neutral-600 text-[25px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {title}
          </motion.div>
        </CardTitle>
        <CardDescription className="text-[#282828A6]">
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {description}
          </motion.p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LandingCard;
