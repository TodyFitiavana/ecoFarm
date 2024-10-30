"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { AboutCardTypes } from "@/helpers/types/types";

const LandingCard: React.FC<AboutCardTypes> = ({
  iconURL,
  title,
  description,
}): JSX.Element => {
  return (
    <Card className="bg-white hover:bg-primary-foreground hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-0 shadow-none p-6">
      <CardHeader className="p-0">
        <div className="bg bg-grey02 w-max p-3 rounded-lg">
          <Image alt="icon" src={iconURL} width={22} height={22} />
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-7">
        <h3 className="text-secondary text-xl">{title}</h3>
        <p className="text-secondary-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

export default LandingCard;
