"use client";

import React, { FC } from "react";

const Banner: FC = (): JSX.Element => {
  return (
    <div className="banner bg-grey w-full rounded-xl p-6 flex items-center gap-3">
      <div className="texts flex flex-col gap-3">
        <h1 className="text-secondary font-cal-sans text-2xl">
          Bienvenue dans l’espace assistance
        </h1>
        <p className="text-secondary-foreground">
          Sélectionnez une catégorie d'assistance parmi celles proposées
          ci-dessous, ajoutez vos produits agricoles et réalisez une prédiction
          pour une meilleure récolte.
        </p>
      </div>
      <img src="/bots.svg" alt="bot-icon" className="w-[130px]" />
    </div>
  );
};

export default Banner;
