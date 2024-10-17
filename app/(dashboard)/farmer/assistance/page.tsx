"use client";

import AssistanceLeftPart from "@/components/sections/farmer/assistance/AssistanceLeftPart";
import AssistanceRightPart from "@/components/sections/farmer/assistance/AssistanceRightPart";
import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";

const FarmerDashboard: FC = (): JSX.Element => {
  return (
    <section className="farmer-assistance bg-[#F3F9FA] h-screen overflow-x-hidden">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-assistance__content ml-[330px] w-[calc(100%-330px)] px-5 mt-[100px] mb-10">
          <div className="w-full container mx-auto flex gap-7">
            {/* Left content section */}
            <AssistanceLeftPart />
            {/* Right content section */}
            <AssistanceRightPart />
          </div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerDashboard;
