import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";

export interface FamerCardProps {
  iconURL: string;
  title: string;
  description: string;
}

const FarmerCard: FC<FamerCardProps> = ({
  description,
  iconURL,
  title,
}): JSX.Element => {
  return (
    <Card className="p-3">
      <CardHeader className="p-0 flex w-full justify-between items-center">
        <Image src={iconURL} alt="icon" width={21} height={21} />
      </CardHeader>
      <CardContent className="p-0">
        <h2 className="text-black">{title}</h2>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default FarmerCard;
