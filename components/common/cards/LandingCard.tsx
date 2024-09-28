import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LandingCardTypes } from "@/helpers/types/types";

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
          {title}
        </CardTitle>
        <CardDescription className="text-[#282828A6]">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LandingCard;
