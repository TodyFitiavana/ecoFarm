"use client";

import SalesBoard from "@/components/sections/farmer/product/components/SalesBoard";
import { Button } from "@/components/ui/button";
import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";
import {FaPlus } from "react-icons/fa";

const FarmerProduit: FC = (): JSX.Element => {
  return (
    <section className="farmer-dashboard bg-[#F3F9FA] h-screen overflow-x-hidden">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-dashboard__content ml-[330px] h-[450px] px-5 mt-[100px]">
          {/* Stats section */}
          <div className="dashboard-stats w-full h-[200px]">
            <header className="flex justify-between items-center">
                <h1 className="font-semibold text-[25px]">Produit</h1>
                <Button className="text-white" Icon={FaPlus} iconPlacement="left">Ajouter produit</Button>
            </header>
           <section>
                <SalesBoard/>
           </section>
          </div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerProduit;
