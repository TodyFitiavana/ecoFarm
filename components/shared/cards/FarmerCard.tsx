import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FarmerCardTypes } from "@/helpers/types/types";
import Image from "next/image";
import React, { FC } from "react";

const FarmerCard: FC<FarmerCardTypes> = ({
  description,
  iconURL,
  title,
  iconColor,
}): JSX.Element => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 flex flex-row items-center w-full justify-between">
        <div
          className="icon rounded-lg p-2 w-max"
          style={{ backgroundColor: iconColor }}
        >
          <Image src={iconURL} alt="icon" width={30} height={30} />
        </div>
        <Image src="/icons/right.svg" alt="icon" width={30} height={30} />
      </CardHeader>
      <CardContent className="p-0 mt-8">
        <h2 className="text-secondary font-semibold text-xl">{title}</h2>
        <p className="text-secondary-foreground mt-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FarmerCard;
