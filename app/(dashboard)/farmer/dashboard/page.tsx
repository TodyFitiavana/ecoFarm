"use client";

import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";

const FarmerDashboard: FC = (): JSX.Element => {
  return (
    <section className="farmer-dashboard bg-[#F3F9FA] h-screen overflow-x-hidden">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-dashboard__content ml-[330px] h-[450px] px-5 mt-8">
          {/* Stats section */}
          <div className="dashboard-stats w-full bg-white h-[200px]"></div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerDashboard;
