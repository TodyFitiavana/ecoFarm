import React from "react";

const HeroState = () => {
  return (
    <div
      className="w-max grid grid-cols-3 justify-around items-center bg-white p-3 px-5"
      style={{ borderRadius: "20px 0px 0px 0px" }}
    >
      <div className="px-2">
        <h1 className="text-[35px] lg:text-[50px] text-black">+50</h1>
        <p className="text-[#8E8E8E] text-start w-[190px] lg:w-[170px]">
          Agriculteurs locaux bénéficiaires
        </p>
      </div>
      <div className="px-2">
        <h1 className="text-[35px] lg:text-[50px] text-black">150</h1>
        <p className="text-[#8E8E8E]">Produits agricoles</p>
      </div>
      <div className="px-2">
        <h1 className="text-[35px] lg:text-[50px] text-black">125K</h1>
        <p className="text-[#8E8E8E]">Tonnes de productions</p>
      </div>
    </div>
  );
};

export default HeroState;
