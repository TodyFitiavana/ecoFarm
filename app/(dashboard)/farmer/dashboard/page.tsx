"use client";

import { SaleChart } from "@/components/sections/admin/dashboard/components/SaleChart";
import SalesHistorie from "@/components/sections/admin/dashboard/components/SalesHistorie";
import FarmerDashboardCard from "@/components/shared/cards/FarmerDashboardCard";
import FarmerLayout from "@/layouts/FarmerLayout";
import React, { FC } from "react";

const FarmerDashboard: FC = (): JSX.Element => {
  return (
    <section className="farmer-dashboard bg-[#F3F9FA] h-screen overflow-x-hidden">
      <FarmerLayout>
        {/* Farm Dashboard Content */}
        <div className="farm-dashboard__content ml-[330px] h-[450px] px-5 mt-[100px]">
          {/* Stats section */}
          <div className="dashboard-stats w-full h-[200px] ">
            <section>
              <FarmerDashboardCard />
            </section>
            <section>
              <SaleChart />
            </section>
            <section>
              <SalesHistorie />
            </section>
          </div>
        </div>
      </FarmerLayout>
    </section>
  );
};

export default FarmerDashboard;
