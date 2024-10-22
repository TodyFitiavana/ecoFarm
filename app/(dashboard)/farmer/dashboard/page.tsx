"use client";

import { SaleChart } from "@/components/sections/farmer/dashboard/components/SaleChart";
import SalesHistorie from "@/components/sections/farmer/dashboard/components/SalesHistorie";
import FarmerDashboardCard from "@/components/shared/cards/FarmerDashboardCard";
import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";

const FarmerDashboard: FC = (): JSX.Element => {
  return (
    <section className="farmer-dashboard bg-[#F3F9FA] h-screen overflow-x-hidden">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-dashboard__content ml-[330px] mt-[100px] h-[450px] px-5">
          <div className="dashboard-stats">
            <FarmerDashboardCard />
            <SaleChart />
            <SalesHistorie />
          </div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerDashboard;
