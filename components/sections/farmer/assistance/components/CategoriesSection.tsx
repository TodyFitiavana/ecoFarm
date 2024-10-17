import FarmerCard from "@/components/shared/cards/FarmerCard";
import { farmerCardData } from "@/helpers/constant";
import React, { FC } from "react";

const CategoriesSection: FC = (): JSX.Element => {
  return (
    <div className="categories mt-11">
      <header>
        <h3 className="text-black text-xl font-cal-sans">
          Catégories d’assistance disponible
        </h3>
      </header>
      <div className="content grid grid-cols-2 gap-7 mt-5">
        {farmerCardData.map((item, index) => (
          <FarmerCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
