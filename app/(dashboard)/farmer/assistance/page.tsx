"use client";

import AssistanceLeftPart from "@/components/sections/farmer/assistance/AssistanceLeftPart";
import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";

const FarmerDashboard: FC = (): JSX.Element => {
  return (
    <section className="farmer-assistance bg-[#F3F9FA] h-screen overflow-x-hidden mb-5">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-assistance__content ml-[330px] h-[450px] px-5 mt-8 flex gap-7">
          {/* Left content section */}
          <AssistanceLeftPart />
          <div className="content-right w-[30%]"></div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerDashboard;
