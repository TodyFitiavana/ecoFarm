/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const FarmerDashboardCard = () => {
  return (
    <div className="farmer-dashboard w-full h-full">
      <div className="flex gap-10">
        <div className="bg-[#F0EAD299] flex justify-between items-center p-6 rounded-lg gap-5 w-full">
          <div className="flex flex-col  ">
            <h1 className="font-bold text-secondary text-xl">20 000 AR</h1>
            <p className="text-secondary-foreground">Total ventes du mois</p>
          </div>
          <img src="/icons/vector1.svg" />
        </div>
        <div className="bg-[#CFE1B999] flex justify-between items-center p-6 rounded-lg gap-5 w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-secondary text-xl">25</h1>
            <p className="text-secondary-foreground">Commandes en cours</p>
          </div>
          <img src="/icons/vector2.svg" />
        </div>
        <div className="bg-[#fff] flex justify-between items-center p-6 rounded-lg gap-5 w-full">
          <div className="flex flex-col text-secondary">
            <h1 className="font-bold text-secondary text-xl">1000 KG</h1>
            <p className="text-secondary-foreground">Produits agricoles</p>
          </div>
          <img src="/icons/vector3.svg" />
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboardCard;
