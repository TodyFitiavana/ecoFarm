"use client";

import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";

const FarmerDashboard: FC = (): JSX.Element => {
  return (
    <section className="farmer-assistance bg-[#F3F9FA] h-screen overflow-x-hidden">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-assistance__content ml-[330px] h-[450px] px-5 mt-8 flex gap-7">
          {/* Stats section */}
          <div className="content-left w-[70%]">
            <div className="banner bg-grey w-full rounded-xl p-6 flex items-center gap-3">
              <div className="texts flex flex-col gap-3">
                <h1 className="text-black font-cal-sans text-2xl">
                  Bienvenue dans l’espace assistance
                </h1>
                <p className="text-secondary-foreground">
                  Sélectionnez une catégorie d'assistance parmi celles proposées
                  ci-dessous, ajoutez vos produits agricoles et réalisez une
                  prédiction pour une meilleure récolte.
                </p>
              </div>
              <img src="/bots.svg" alt="bot-icon" className="w-[130px]" />
            </div>
          </div>
          <div className="content-right w-[30%]"></div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerDashboard;
